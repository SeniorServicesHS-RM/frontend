import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useState } from "react";
import FlexBox from "../components/FlexBox";
import ShowAsisstantOrders from "../components/ShowAssistantOrders";
import ShowEmployeeAvailability from "../components/ShowEmployeeAvailability";
import ShowSeniorReciept from "../components/ShowSeniorReciept";

const AssistantPage = () => {
  const [shoppingListSelection, setShoppingListSelection] = useState(false);
  const [showEmployeeAvailability, setShowEmployeeAvailability] =
    useState(false);
  const [showSeniorReciept, setShowSeniorReciept] = useState(false);
  const shoppingListHandler = () => {
    setShoppingListSelection(!shoppingListSelection);
  };
  const employeeAvailabiliyHandler = () => {
    setShowEmployeeAvailability(!showEmployeeAvailability);
  };
  const seniorRecieptHandler = () => {
    setShowSeniorReciept(!showSeniorReciept);
  };
  return (
    <FlexBox>
      {!shoppingListSelection &&
        !showEmployeeAvailability &&
        !showSeniorReciept && (
          <Typography>
            <Button onClick={shoppingListHandler}>Einkaufsliste</Button>
            <Button onClick={employeeAvailabiliyHandler}>Planning</Button>
            <Button onClick={seniorRecieptHandler}>Abrechnung</Button>
          </Typography>
        )}
      {shoppingListSelection && (
        <ShowAsisstantOrders abort={shoppingListHandler} />
      )}
      {showEmployeeAvailability && (
        <ShowEmployeeAvailability abort={employeeAvailabiliyHandler} />
      )}
      {showSeniorReciept && <ShowSeniorReciept abort={seniorRecieptHandler} />}
    </FlexBox>
  );
};
export default AssistantPage;
