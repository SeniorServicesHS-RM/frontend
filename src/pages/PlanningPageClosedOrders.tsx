import { useContext } from "react";
import ShowOrdersForPlanner from "../components/ShowOrdersForPlanner";
import { DataBaseContext } from "../store/DataBaseContext";

const PlanningPageClosedOrders = () => {
  const { closedOrders } = useContext(DataBaseContext);
  return (
    <>
      {closedOrders &&
        closedOrders
          .map((order) => {
            return <ShowOrdersForPlanner order={order} />;
          })
          .reverse()}
    </>
  );
};

export default PlanningPageClosedOrders;
