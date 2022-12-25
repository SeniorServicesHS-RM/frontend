import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import * as React from "react";
import { MartAry } from "../data/ArticleTestData";
import Order from "../data/Order";

interface Props {
  order: Order;
  handleClose: () => void;
  editOrder: (newOrder: Order, oldOrder: Order) => void;
}
interface ValueHandler {
  newId?: string;
  newName?: string;
  newNote?: string;
  newAmount?: number;
  newMart?: string;
}

function EditArticleDialog(props: Props) {
  const [order, setOrder] = React.useState<Order>(props.order);

  const [valueName, setValueName] = React.useState<ValueHandler>({
    newName: props.order.article.name,
  });
  const [valueNote, setValueNote] = React.useState<ValueHandler>({
    newNote: props.order.article.note,
  });
  const [valueAmount, setValueAmount] = React.useState<ValueHandler>({
    newAmount: props.order.amount,
  });
  const [valueMart, setValueMart] = React.useState<ValueHandler>({
    newMart: props.order.mart,
  });
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueName({ newName: event.target.value });
  };
  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueNote({ newNote: event.target.value });
  };
  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueAmount({ newAmount: event.target.valueAsNumber });
  };
  const handleMartChange = (event: SelectChangeEvent) => {
    setValueMart({ newMart: event.target.value as string });
  };
  const handleDone = () => {
    const orderReturn = new Order(
      order.id,
      order.seniorId,
      order.article,
      valueAmount.newAmount,
      order.date,
      valueMart.newMart
    );

    orderReturn.article.name = valueName.newName;
    orderReturn.article.note = valueNote.newNote;
    props.editOrder(orderReturn, order);
    props.handleClose();
  };
  const mappedMartList = MartAry.map((mart: String) => {
    return <MenuItem value={mart as string}>{mart}</MenuItem>;
  });
  return (
    <div>
      <Dialog open>
        <DialogTitle>Bearbeiten</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="normal"
            label="Produktbezeichnung"
            type="text"
            value={valueName.newName}
            onChange={handleNameChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            label="Notiz"
            type="text"
            value={valueNote.newNote}
            onChange={handleNoteChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            label="Menge"
            type="number"
            value={valueAmount.newAmount}
            onChange={handleAmountChange}
            fullWidth
          />
          <Select
            value={valueMart.newMart}
            onChange={handleMartChange}
            fullWidth
          >
            <InputLabel>Supermarkt</InputLabel>
            {mappedMartList}
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDone}>Fertig</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default EditArticleDialog;
