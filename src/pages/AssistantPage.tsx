import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import FlexBox from "../components/FlexBox";
import ShowAsisstantOrders from "../components/ShowAssistantOrders";
import ShowEmployeeAvailability from "../components/ShowEmployeeAvailability";

const AssistantPage = () => {
  const [shoppingListSelection, setShoppingListSelection] = useState(false);
  const [showEmployeeAvailability, setShowEmployeeAvailability] =
    useState(false);
  const shoppingListHandler = () => {
    setShoppingListSelection(!shoppingListSelection);
  };
  const employeeAvailabiliyHandler = () => {
    setShowEmployeeAvailability(!showEmployeeAvailability);
  };
  return (
    <FlexBox>
      {!shoppingListSelection && !showEmployeeAvailability && (
        <Typography>
          <Button onClick={shoppingListHandler}>Einkaufsliste</Button>
          <Button onClick={employeeAvailabiliyHandler}>Planning</Button>
        </Typography>
      )}
      {shoppingListSelection && (
        <ShowAsisstantOrders abort={shoppingListHandler} />
      )}
      {showEmployeeAvailability && (
        <ShowEmployeeAvailability abort={employeeAvailabiliyHandler} />
      )}
    </FlexBox>
  );
};
export default AssistantPage;
