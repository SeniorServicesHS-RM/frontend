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
        if (!newList.includes(service)) {
          return newList.push(service);
        }
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
  const sumAllPrices = () => {
    let sum = 0;
    props.orderList.map((order) => {
      order.articleList.map((article) => {
        sum = sum + article.price;
      });
    });
    return sum;
  };
  return (
    <div>
      <Dialog open={props.open} onClose={props.abort}>
        <DialogContent>
          {mappedServices}
          <TextField
            label="Summe"
            type="number"
            value={sumAllPrices()}
            disabled
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.abort}>Zurück</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ShowUserOverview;
