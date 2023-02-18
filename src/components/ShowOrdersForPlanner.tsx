import { Button, Divider, Typography } from "@mui/material";
import React, { useContext } from "react";
import { updateEmployeeInOrderInDB } from "../data/DatabaseFunctions";
import Order from "../data/Order";
import User from "../data/User";
import { DataBaseContext } from "../store/DataBaseContext";
import OrderCard from "./OrderCard";
import EmployeeDropDownMenu from "./EmployeeDropDownMenu";

interface Props {
  order: Order;
}

const ShowOrdersForPlanner = (props: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const { users } = useContext(DataBaseContext);
  const employees = users.filter((user) => {
    return user.role === 2;
  });

  const handleClickDropDown = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const dropDownClosingHandler = (user?: User) => {
    if (user) {
      updateEmployeeInOrderInDB(props.order, user);
      console.log(user.empID);
    } else if (user === null) {
      updateEmployeeInOrderInDB(props.order, null);
    }
    setAnchorEl(null);
  };

  // console.log(props.order);

  return (
    <>
      <Typography>Bestellung von: {props.order.seniorId}</Typography>
      <Typography>
        Zugewiesener Einkaufshelfer:{" "}
        {props.order.employeeId !== "undefined"
          ? props.order.employeeId
          : "noch nicht zugewiesen"}
      </Typography>
      <Button onClick={handleClickDropDown}>Einkaufshelfer zuweisen</Button>
      <EmployeeDropDownMenu
        userList={employees}
        isOpen={Boolean(anchorEl)}
        handleClose={dropDownClosingHandler}
        anchorElement={anchorEl}
      />
      <OrderCard order={props.order} />
      <br />
      <Divider variant="middle" />
      <br />
    </>
  );
};

export default ShowOrdersForPlanner;
