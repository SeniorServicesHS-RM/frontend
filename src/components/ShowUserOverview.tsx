import {
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import Order from "../data/Order";
import { DataBaseContext } from "../store/DataBaseContext";

interface Props {
  abort: () => void;
  seniorId: string;
  open: boolean;
  orderList: Order[];
}
const ShowUserOverview = (props: Props) => {
  const { serviceList } = useContext(DataBaseContext);
  const getAllAdditionalServices = () => {
    const newList = [] as string[];
    props.orderList.map((order: Order) => {
      order.additionalServices.map((service: string) => {
        return newList.push(service);
      });
    });
    return newList;
  };

  const mappedServices = getAllAdditionalServices().map(
    (singleServ: string) => {
      return (
        <FormControlLabel
          control={<Checkbox checked name={singleServ} />}
          label={singleServ}
        />
      );
    }
  );
  return (
    <div>
      <Dialog open={props.open} onClose={props.abort}>
        <DialogContent>{mappedServices}</DialogContent>
        <DialogActions>
          <Button onClick={props.abort}>Zurück</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ShowUserOverview;
