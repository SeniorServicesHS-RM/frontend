import { useContext } from "react";
import ShowOrdersForPlanner from "../components/ShowOrdersForPlanner";
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
            return <ShowOrdersForPlanner order={order} />;
          })
          .reverse()}
    </>
  );
};

export default PlanningPageOpenOrders;
