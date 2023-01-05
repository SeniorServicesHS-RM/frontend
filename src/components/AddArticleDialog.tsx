import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import Article from "../data/Article";
import * as React from "react";
import Order from "../data/Order";
import { useState } from "react";
import { MartAry } from "../data/ArticleTestData";
interface Props {
  addOrder: (order: Order) => void;
}
interface ValueHandler {
  newId?: string;
  newName?: string;
  newNote?: string;
  newAmount?: number;
  newMart?: string;
}

function AddArticleDialog(props: Props) {
  const [martList, setMartList] = useState<String[] | null>(MartAry);
  const [valueID, setValueID] = useState<ValueHandler>({
    newId: "",
  });
  const [valueName, setValueName] = useState<ValueHandler>({
    newName: "",
  });
  const [valueNote, setValueNote] = useState<ValueHandler>({
    newNote: "",
  });
  const [valueAmount, setValueAmount] = useState<ValueHandler>({
    newAmount: 1,
  });
  const [valueMart, setValueMart] = useState<ValueHandler>({
    newMart: "",
  });
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
    props.addOrder(
      new Order(
        "o" + Date.now(),
        "senior" + Date.now(), //Hier Senior ID einfuegen
        new Article(
          Date.now().toString(),
          valueName.newName,
          valueNote.newNote
        ),
        valueAmount.newAmount,
        new Date(),
        valueMart.newMart
      )
    );
    setValueName({ newName: "" });
    setValueID({ newId: "" });
    setValueNote({ newNote: "" });
    setValueAmount({ newAmount: 1 });
    setOpen(false);
  };
  const mappedMartList = martList.map((mart: String) => {
    return <MenuItem value={mart as string}>{mart}</MenuItem>;
  });
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add Article
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new Article</DialogTitle>
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
          <FormControl fullWidth>
            <InputLabel>Supermarkt</InputLabel>
            <Select
              value={valueMart.newMart}
              label="Supermarkt"
              onChange={handleMartChange}
              fullWidth
            >
              {mappedMartList}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Abbrechen</Button>
          <Button onClick={handleDone}>Fertig</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AddArticleDialog;
