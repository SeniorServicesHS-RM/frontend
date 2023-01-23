import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DrawerData, { GetDrawerData } from "../data/DrawerData";
import { NavLink } from "react-router-dom";
interface AnchorState {
  left: boolean;
}
type Anchor = "left";
interface Props {
  toggleDrawer: (
    anchor: Anchor,
    open: boolean
  ) => (event: React.KeyboardEvent | React.MouseEvent) => void;
  state: AnchorState;
}

export default function MenuDrawer(props: Props) {
  const drawerData = GetDrawerData();
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={props.toggleDrawer(anchor, false)}
      onKeyDown={props.toggleDrawer(anchor, false)}
    >
      <List>
        {drawerData.map((item, index) => {
          return (
            <ListItem key={index} disablePadding>
              <NavLink
                to={item.path}
                style={{ textDecoration: "none", color: "black" }}
              >
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </NavLink>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={props.state["left"]}
            onClose={props.toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
