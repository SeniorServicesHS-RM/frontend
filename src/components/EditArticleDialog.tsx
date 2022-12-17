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
import ShoppingPage from "../pages/ShoppingPage";
interface Props {
  //editArticle: (article: Article) => void;
  article: Article;
  //editCloseHandler: () => void;
}
interface ValueHandler {
  newId?: string;
  newName?: string;
  newNote?: string;
}

function EditArticleDialog(props: Props) {
  const [valueID, setValueID] = React.useState<ValueHandler>({
    newId: props.article.id,
  });
  const [valueName, setValueName] = React.useState<ValueHandler>({
    newName: props.article.name,
  });
  const [valueNote, setValueNote] = React.useState<ValueHandler>({
    newNote: props.article.note,
  });
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueName({ newName: event.target.value });
  };
  const handleNoteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValueNote({ newNote: event.target.value });
  };
  const handleDone = () => {
    //setValueID({ newId: new Date().toString() });
    props.article.name = valueName.newName;
    props.article.note = valueName.newNote;
    // setValueName({ newName: "" });
    // setValueID({ newId: "" });
    // setValueNote({ newNote: "" });
    //props.editCloseHandler();
  };
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
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={props.editCloseHandler}>Abbrechen</Button> */}
          <Button onClick={handleDone}>Fertig</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default EditArticleDialog;
