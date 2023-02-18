import React, { useState } from "react";
import MenuAppBar from "./MenuAppBar";
import MenuDrawer from "./MenuDrawer";
interface AnchorState {
  left: boolean;
}
type Anchor = "left";
const NavigationBar = () => {
  const [state, setState] = useState<AnchorState>({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  return (
    <React.Fragment>
      <MenuDrawer toggleDrawer={toggleDrawer} state={state}></MenuDrawer>
      <MenuAppBar toggleDrawer={toggleDrawer}></MenuAppBar>
    </React.Fragment>
  );
};

export default NavigationBar;
