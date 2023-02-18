import {
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import Order from "../../data/Order";

interface Props {
  abort: () => void;
  seniorId: string;
  open: boolean;
  orderList: Order[];
}
const SeniorSumServicesDialog = (props: Props) => {
  const getAllAdditionalServices = () => {
    const newList = [] as string[];
    props.orderList.forEach((order: Order) => {
      order.additionalServices.forEach((service: string) => {
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
    props.orderList.forEach((order) => {
      order.articleList.forEach((article) => {
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
export default SeniorSumServicesDialog;
