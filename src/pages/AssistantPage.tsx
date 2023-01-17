import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import FlexBox from "../components/FlexBox";
import ShowAsisstantOrders from "../components/ShowAssistantOrders";

const AssistantPage = () => {
  const [shoppingListSelection, setShoppingListSelection] = useState(false);
  const shoppingListHandler = () => {
    setShoppingListSelection(!shoppingListSelection);
  };
  return (
    <FlexBox>
      {!shoppingListSelection && (
        <Typography>
          <Button onClick={shoppingListHandler}>Einkaufsliste</Button>
        </Typography>
      )}
      {shoppingListSelection && (
        <ShowAsisstantOrders abort={shoppingListHandler} />
      )}
    </FlexBox>
  );
};
export default AssistantPage;
