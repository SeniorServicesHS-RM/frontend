import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import GetUserOrders from "../data/GetUserOrders";
import Order from "../data/Order";
import { DataBaseContext } from "../store/DataBaseContext";
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
