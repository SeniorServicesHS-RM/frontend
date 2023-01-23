import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { ChangeEvent, useState } from "react";
import Article from "../data/Article";
import {
  updateArticleDoneInDB,
  updateArticlePriceInDB,
} from "../data/DatabaseFunctions";
import Order from "../data/Order";

interface Props {
  abort: () => void;
  open: boolean;
  article: Article;
}

const ShowEmpDoneDialog = (props: Props) => {
  const [valuePrice, setValuePrice] = useState<number>(props.article.price);
  const [valueDone, setValueDone] = useState<boolean>(props.article.done);
  const handleDone = () => {
    console.log(props.article);

    props.article.price = valuePrice;
    props.article.done = valueDone;
    updateArticleDoneInDB(props.article);
    updateArticlePriceInDB(props.article);

    return props.abort();
  };
  const hanldeValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValuePrice(event.target.valueAsNumber);
    props.article.price = event.target.valueAsNumber;
  };
  const handleDoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueDone(!valueDone);
    props.article.done = Boolean(event.target.checked);
  };
  const handleAbort = () => {
    setValuePrice(0);
    return props.abort();
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleAbort}>
        <DialogContent>
          <TextField
            label="Artikel eingekauft"
            type="number"
            inputProps={{ step: 0.01 }}
            value={props.article.price}
            onChange={hanldeValueChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.article.done}
                onChange={handleDoneChange}
                name="eingekauft?"
              />
            }
            label="eingekauft?"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDone}>Fertig</Button>
          <Button onClick={handleAbort}>Abbrechen</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ShowEmpDoneDialog;
