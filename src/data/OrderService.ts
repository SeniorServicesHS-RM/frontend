import React from "react";
import { DataBaseContext } from "../store/DataBaseContext";
import Order from "./Order";

// Alternative Implementierung einer GetUserOrders-ähnlichen Funktion
// Bessere Lesbarkeit?
// Auslagerung von Dopplung
// Minderung von if-else-blöcken
// Sinnvoll? Besprechen

// Filter-Function Interface
interface OrderFilter {
  (order: Order): Boolean;
}

// Wraps mapping from falsy order-array input to empty arr
// -> undefined | null outputs impossible
// Then applies given filter
function filterOrders(array: Order[], filterFun: OrderFilter): Order[] {
  if (!array) {
    return [];
  }

  return array.filter(filterFun);
}

export const GetOrdersByUser = (seniorId: string) => {
  const filterFun: OrderFilter = (order: Order) => {
    return order.seniorId === seniorId;
  };

  const { openOrders, closedOrders } = React.useContext(DataBaseContext);
  const openUserOrders = filterOrders(openOrders, filterFun);
  const closedUserOrders = filterOrders(closedOrders, filterFun);

  return openUserOrders.concat(closedUserOrders);
};

const GetOrdersByEmployee = (employeeId: string) => {
  const filterFun: OrderFilter = (order: Order) => {
    return order.employeeId === employeeId;
  };

  const { openOrders, closedOrders } = React.useContext(DataBaseContext);
  const openUserOrders = filterOrders(openOrders, filterFun);
  const closedUserOrders = filterOrders(closedOrders, filterFun);

  return openUserOrders.concat(closedUserOrders);
};

export default GetOrdersByEmployee;
