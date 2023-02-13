import { Button, Grid } from "@mui/material";
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
    <Grid container xs={12}>
      <Grid item xs={12}>
        <Button onClick={props.abort}>Zurueck</Button>
      </Grid>
      <Grid item xs={12}>
        {userOrders.reverse().map((order) => {
          return <OrderCard order={order}></OrderCard>;
        })}
      </Grid>
    </Grid>
  );
};

export default ShowOrders;
