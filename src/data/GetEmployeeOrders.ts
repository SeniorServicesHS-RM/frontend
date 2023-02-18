import { useContext } from "react";
import { DataBaseContext } from "../store/DataBaseContext";

const GetEmployeeOrders = (employeeId: string) => {
  const { openOrders } = useContext(DataBaseContext);
  const openUserOrders = openOrders
    ? openOrders.filter((order) => {
        return order.employeeId === employeeId;
      })
    : [];
  return openUserOrders;
};

export default GetEmployeeOrders;
