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
  const [valuePrice, setValuePrice] = useState<number | null>(
    props.article ? props.article.price : null
  );
  const [valueDone, setValueDone] = useState<boolean | null>(
    props.article ? props.article.done : null
  );
  const hanldeValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(valuePrice);
    setValuePrice(event.target.valueAsNumber);
  };
  const handleDone = () => {
    if (props.article.price !== 0 && valuePrice >= 0) {
      props.article.price = valuePrice;
      props.article.done = valueDone;
      updateArticleDoneInDB(props.article);
      updateArticlePriceInDB(props.article);
    } else {
      setValuePrice(0);
    }
    return props.abort();
  };
  const handleDoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueDone(!valueDone);
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
            value={valuePrice}
            onChange={hanldeValueChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={valueDone}
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
