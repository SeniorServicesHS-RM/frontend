import { Button } from "@mui/material";
import GetUserOrders from "../data/GetUserOrders";
import OrderCard from "./OrderCard";

interface Props {
  abort: () => void;
}

const ShowOrders = (props: Props) => {
  const seniorId = "s001"; //gemockte SeniorId! Richtige muss aus authcontext kommen
  const userOrders = GetUserOrders(seniorId);
  console.log(userOrders);

  return (
    <>
      <Button onClick={props.abort}>Zurueck</Button>
      {userOrders.map((order) => {
        return <OrderCard order={order}></OrderCard>;
      })}
    </>
  );
};

export default ShowOrders;
