import React, { useContext } from "react";
import OrderCard from "../components/OrderCard";
import AssignAssistant from "../components/AssignAssistant";
import { DataBaseContext } from "../store/DataBaseContext";

const PlanningPageOpenOrders = () => {
  const { openOrders, userId } = useContext(DataBaseContext);
  console.log(openOrders);
  console.log("pp: ", userId);
  return (
    <>
      {openOrders &&
        openOrders
          .map((order) => {
            return <AssignAssistant order={order} />;
          })
          .reverse()}
    </>
  );
};

export default PlanningPageOpenOrders;
