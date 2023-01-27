import { Button } from "@mui/material";
import { useContext } from "react";
import GetUserOrders from "../data/GetUserOrders";
import { UserContext } from "../store/UserContext";
import OrderCard from "./OrderCard";

interface Props {
  abort: () => void;
}

const ShowOrders = (props: Props) => {
  const { user } = useContext(UserContext);
  const seniorId = user.seniorId;
  const userOrders = GetUserOrders(seniorId);
  // console.log(userOrders);

  return (
    <>
      <Button onClick={props.abort}>Zurueck</Button>
      {userOrders.reverse().map((order) => {
        return <OrderCard order={order}></OrderCard>;
      })}
    </>
  );
};

export default ShowOrders;
