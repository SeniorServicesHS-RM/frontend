import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import Article from "../data/Article";
import * as React from "react";
interface Props {
  addArticle: (article: Article) => void;
}
interface ValueHandler {
  newId?: string;
  newName?: string;
  newNote?: string;
}

function AddArticleDialog(props: Props) {
  const [valueID, setValueID] = React.useState<ValueHandler>({
    newId: "",
  });
  const [valueName, setValueName] = React.useState<ValueHandler>({
    newName: "",
  });
  const [valueNote, setValueNote] = React.useState<ValueHandler>({
    newNote: "",
  });
  const [open, setOpen] = React.useState(false);
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
  const handleDone = () => {
    setValueID({ newId: new Date().toString() });
    props.addArticle(
      new Article(valueID.newId, valueName.newName, valueNote.newNote)
    );
    setValueName({ newName: "" });
    setValueID({ newId: "" });
    setValueNote({ newNote: "" });
    setOpen(false);
  };
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
