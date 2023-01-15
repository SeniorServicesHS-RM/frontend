import React from "react";
import { DataBaseContext } from "../store/DataBaseContext";

const GetUserOrders = (seniorId: string) => {
  const { openOrders, closedOrders } = React.useContext(DataBaseContext);
  const openUserOrders = openOrders
    ? openOrders.filter((order) => {
        return order.seniorId === seniorId;
      })
    : [];
  const closedUserOrders = closedOrders
    ? closedOrders.filter((order) => {
        return order.seniorId === seniorId;
      })
    : [];
  return [...openUserOrders, ...closedUserOrders];
};

export default GetUserOrders;
