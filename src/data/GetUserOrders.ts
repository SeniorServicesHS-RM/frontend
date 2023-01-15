import React from "react";
import { DataBaseContext } from "../store/DataBaseContext";

const GetUserOrders = (seniorId: string) => {
  const { openOrders, closedOrders } = React.useContext(DataBaseContext);
  const openUserOrders =
    openOrders &&
    openOrders.filter((order) => {
      return order.seniorId === seniorId;
    });
  const closedUserOrders =
    closedOrders &&
    closedOrders.filter((order) => {
      return order.seniorId === seniorId;
    });
  if (openUserOrders[0] && closedUserOrders[0]) {
    return [...openUserOrders, ...closedUserOrders];
  } else if (openUserOrders[0]) {
    return openUserOrders;
  } else if (closedUserOrders[0]) {
    return closedUserOrders;
  } else {
    return [];
  }
};

export default GetUserOrders;
