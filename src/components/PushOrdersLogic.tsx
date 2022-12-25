import { Button } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { addOrderToDatabase } from "../data/DatabaseFunctions";
import Order from "../data/Order";
interface Props {
  orders: Order[];
}

const PushOrdersLogic = (props: Props) => {
  const mappedOrders = props.orders.map((singleOrder: Order) => {
    return addOrderToDatabase(singleOrder);
  });
  const handlePush = () => {
    // mappedOrders;
  };
  return (
    <div>
      <Button variant="outlined" onClick={handlePush}>
        Push List
      </Button>
    </div>
  );
};

export default PushOrdersLogic;
