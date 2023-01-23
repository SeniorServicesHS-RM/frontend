import React, { useContext } from "react";
import OrderCard from "../components/OrderCard";
import OrderCardPlanner from "../components/OrderCardPlanner";
import { DataBaseContext } from "../store/DataBaseContext";

const PlanningPageOpenOrders = () => {
  const { openOrders, userId } = useContext(DataBaseContext);
  console.log(openOrders);
  console.log("pp: ", userId);
  return (
    <>
      {openOrders &&
        openOrders.map((order) => {
          return <OrderCardPlanner order={order} />;
        })}
    </>
  );
};

export default PlanningPageOpenOrders;
