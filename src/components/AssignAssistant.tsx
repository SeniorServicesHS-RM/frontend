import { Button, Divider, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { updateEmployeeInOrderToDatabase } from "../data/DatabaseFunctions";
import Order from "../data/Order";
import User from "../data/User";
import { DataBaseContext } from "../store/DataBaseContext";
import DropDownUserMenu from "./DropDownUserMenu";
import OrderCard from "./OrderCard";

interface Props {
  order: Order;
}

const AssignAssistant = (props: Props) => {
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
      updateEmployeeInOrderToDatabase(props.order, user);
      console.log(user.empID);
    } else if (user === null) {
      updateEmployeeInOrderToDatabase(props.order, null);
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
      <DropDownUserMenu
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

export default AssignAssistant;
