import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Article from "../data/Article";
import Order from "../data/Order";

interface Props {
  abort: () => void;
  open: boolean;
  article: Article;
}
interface ValueHandler {
  newPrice: number;
}
const ShowEmpDoneDialog = (props: Props) => {
  const [valuePrice, setValuePrice] = useState<ValueHandler>({
    newPrice: props.article.price,
  });
  const hanldeValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValuePrice({ newPrice: event.target.valueAsNumber });
  };
  const handleDone = () => {
    if (props.article.price && valuePrice.newPrice >= 0) {
      props.article.price = valuePrice.newPrice;
      props.article.done = true;
    } else {
      setValuePrice({ newPrice: 0 });
    }
    return props.abort();
  };
  const handleAbort = () => {
    valuePrice.newPrice >= 0 ? <></> : setValuePrice({ newPrice: 0 });
    return props.abort();
  };
  return (
    <div>
      <Dialog open={props.open} onClose={props.abort}>
        <DialogContent>
          <TextField
            label="Artikel eingekauft"
            type="number"
            inputProps={{ step: 0.01 }}
            value={valuePrice.newPrice}
            onChange={hanldeValueChange}
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
