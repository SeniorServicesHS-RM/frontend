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
import Article from "../data/Article";
import { DataBaseContext } from "../store/DataBaseContext";

interface Props {
  article: Article;
  handleClose: () => void;
  editOrder: (newOrder: Article, oldOrder: Article) => void;
  deleteArticle: (article: Article) => void;
}
interface ValueHandler {
  newId?: string;
  newName?: string;
  newNote?: string;
  newAmount?: number;
  newMart?: string;
}

function EditArticleDialog(props: Props) {
  const { martList } = React.useContext(DataBaseContext);
  const [order] = React.useState<Article>(props.article);

  const [valueName, setValueName] = React.useState<ValueHandler>({
    newName: props.article.name,
  });
  const [valueNote, setValueNote] = React.useState<ValueHandler>({
    newNote: props.article.note,
  });
  const [valueAmount, setValueAmount] = React.useState<ValueHandler>({
    newAmount: props.article.amount,
  });
  const [valueMart, setValueMart] = React.useState<ValueHandler>({
    newMart: props.article.mart,
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
    const orderReturn = new Article(
      order.id,
      valueName.newName,
      valueAmount.newAmount,
      valueMart.newMart,
      false,
      0
    );

    props.editOrder(orderReturn, order);
    props.handleClose();
  };
  const handleDelete = () => {
    props.deleteArticle(props.article);
    props.handleClose();
  };
  const mappedMartList = martList.map((mart: String) => {
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
          <Button onClick={handleDelete}>Löschen</Button>
          <Button onClick={handleDone}>Speichern</Button>
          <Button onClick={props.handleClose}>Abbrechen</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default EditArticleDialog;
