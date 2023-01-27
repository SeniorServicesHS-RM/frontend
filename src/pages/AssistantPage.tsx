import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import FlexBox from "../components/FlexBox";
import ShowAsisstantOrders from "../components/ShowAssistantOrders";
import ShowEmployeeAvailability from "../components/ShowEmployeeAvailability";
import ShowSeniorReciept from "../components/ShowSeniorReciept";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import AddTaskIcon from "@mui/icons-material/AddTask";
import CalculateIcon from "@mui/icons-material/Calculate";
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
          <Typography sx={{ p: 5 }}>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                marginBottom: 2,
                textAlign: "left",
                width: "100%",
                p: 1.5,
              }}
              onClick={shoppingListHandler}
              size="large"
              startIcon={<FactCheckIcon />}
            >
              Einkaufsliste
            </Button>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                marginBottom: 2,
                textAlign: "left",
                width: "100%",
                p: 1.5,
              }}
              size="large"
              startIcon={<AddTaskIcon />}
              onClick={employeeAvailabiliyHandler}
            >
              Planning
            </Button>
            <Button
              variant="contained"
              sx={{
                display: "flex",
                marginBottom: 2,
                textAlign: "left",
                width: "100%",
                p: 1.5,
              }}
              size="large"
              startIcon={<CalculateIcon />}
              onClick={seniorRecieptHandler}
            >
              Abrechnung
            </Button>
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
