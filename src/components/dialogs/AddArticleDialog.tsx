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
import Article from "../../data/Article";
import * as React from "react";
import { useContext, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { DataBaseContext } from "../../store/DataBaseContext";
interface Props {
  addOrder: (article: Article) => void;
}
interface ValueHandler {
  newId?: string;
  newName?: string;
  newNote?: string;
  newAmount?: number;
  newMart?: string;
}

function AddArticleDialog(props: Props) {
  const { martList } = useContext(DataBaseContext);
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
      new Article(
        Date.now().toString(),
        valueName.newName,
        valueAmount.newAmount,
        valueMart.newMart,
        false,
        0,
        valueNote.newNote
      )
    );
    setValueName({ newName: "" });
    setValueNote({ newNote: "" });
    setValueAmount({ newAmount: 1 });
    setOpen(false);
  };
  const mappedMartList = martList.map((mart: String) => {
    return <MenuItem value={mart as string}>{mart}</MenuItem>;
  });
  return (
    <div>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ marginBottom: 2, textAlign: "left" }}
        size="large"
        startIcon={<AddShoppingCartIcon />}
      >
        Artikel hinzufügen
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
