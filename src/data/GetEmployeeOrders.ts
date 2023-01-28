import { useContext } from "react";
import { DataBaseContext } from "../store/DataBaseContext";
import Article from "./Article";
import Order from "./Order";

const GetEmployeeOrders = (employeeId: string) => {
  const { openOrders, closedOrders } = useContext(DataBaseContext);
  const testOrders = [
    new Order(
      "otest1",
      "s001",
      [
        new Article("atest6", "brot6 ", 1, "Rewe", false, 0, "bla6"),
        new Article("atest5", "brot5 ", 1, "Lidl", false, 0, "bla5"),
      ],
      new Date(),
      ["nix5", "nix5"],
      new Date(),
      "emp001"
    ),
    new Order(
      "otest2",
      "s002",
      [
        new Article("atest3", "brot3 ", 1, "Rewe", false, 0, "bla3"),
        new Article("atest4", "brot4 ", 1, "Aldi", false, 0, "bla4"),
      ],
      new Date(),
      ["nix3", "nix4"],
      new Date(),
      "emp001"
    ),
    new Order(
      "otest3",
      "s002",
      [new Article("atest2", "brot2 ", 1, "Rewe", false, 0, "bla2")],
      new Date(),
      ["nix2", "nix1"],
      new Date(),
      "emp001"
    ),
  ];
  const openUserOrders = openOrders
    ? openOrders.filter((order) => {
        return order.employeeId === employeeId;
      })
    : testOrders;
  return openUserOrders;
};

export default GetEmployeeOrders;
