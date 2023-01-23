import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Divider,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Order from "../data/Order";
import OrderCard from "./OrderCard";

interface Props {
  order: Order;
}

const OrderCardPlanner = (props: Props) => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const dialogOpenHandler = () => {
    setDialogOpen(!isDialogOpen);
  };

  return (
    <>
      <Typography>Bestellung von: {props.order.seniorId}</Typography>
      <Typography>
        Zugewiesener Einkaufshelfer:{" "}
        {props.order.employeeId !== "undefined"
          ? props.order.employeeId
          : "noch nicht zugewiesen"}
      </Typography>
      <Button onClick={dialogOpenHandler}>Editieren</Button>
      <Dialog
        open={isDialogOpen}
        onClose={dialogOpenHandler}
        aria-labelledby={"Edit Order " + props.order.id}
      >
        <DialogContent>
          <DialogContentText>
            Bestellungs ID: {props.order.id}
          </DialogContentText>
          <DialogContentText>
            Senior ID: {props.order.seniorId}
          </DialogContentText>
          <DialogContentText>
            Einkaufshelfer ID: {props.order.employeeId}
          </DialogContentText>
          <Button>Einkaufshelfer zuweisen</Button>
        </DialogContent>

        <DialogActions>
          <Button>Speichern</Button>
          <Button onClick={dialogOpenHandler}>Abbrechen</Button>
        </DialogActions>
      </Dialog>
      <OrderCard order={props.order} />
      <br />
      <Divider variant="middle" />
      <br />
    </>
  );
};

export default OrderCardPlanner;
