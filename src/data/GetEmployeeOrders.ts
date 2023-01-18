import React from "react";
import { DataBaseContext } from "../store/DataBaseContext";
import Order from "./Order";

const GetEmployeeOrders = (employeeId: string) => {
  const { openOrders } = React.useContext(DataBaseContext);
  const openUserOrders = openOrders
    ? openOrders.filter((order: Order) => {
        return order.employeeId === employeeId;
      })
    : [];
  return openUserOrders;
};

export default GetEmployeeOrders;
