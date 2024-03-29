import AddTaskIcon from "@mui/icons-material/AddTask";
import CalculateIcon from "@mui/icons-material/Calculate";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import FlexBox from "../components/FlexBox";
import EmployeeReceipts from "../components/EmployeeReceipts";
import EmployeeOrders from "../components/EmployeeOrders";
import EmployeeAvailability from "../components/EmployeeAvailability";

const EmployeePage = () => {
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
            <Button
              onClick={shoppingListHandler}
              variant="contained"
              sx={{
                display: "flex",
                marginBottom: 2,
                textAlign: "left",
                width: "100%",
                p: 1.5,
              }}
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
      {shoppingListSelection && <EmployeeOrders abort={shoppingListHandler} />}
      {showEmployeeAvailability && (
        <EmployeeAvailability abort={employeeAvailabiliyHandler} />
      )}
      {showSeniorReciept && <EmployeeReceipts abort={seniorRecieptHandler} />}
    </FlexBox>
  );
};
export default EmployeePage;
