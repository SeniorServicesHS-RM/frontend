import { useContext } from "react";
import AssignEmployee from "../components/AssignEmployee";
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
            return <AssignEmployee order={order} />;
          })
          .reverse()}
    </>
  );
};

export default PlanningPageOpenOrders;
