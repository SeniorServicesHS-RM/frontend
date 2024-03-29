import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import React, { ChangeEvent, useContext, useState } from "react";
import {
  addArticleToDatabase,
  addOrderToDatabase,
} from "../data/DatabaseFunctions";
import Order from "../data/Order";
import { DataBaseContext } from "../store/DataBaseContext";

interface Props {
  orderToPush: Order;
  abort: () => void;
}
interface ValueHandler {
  newService?: string;
}

function AdditionalServicesDialog(props: Props) {
  const { serviceList } = useContext(DataBaseContext);
  const { nextShoppingDate } = useContext(DataBaseContext);
  const [services] = useState([""]);
  const [valueService, setValueService] = React.useState<ValueHandler>({
    newService: "",
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDone = () => {
    services.push(valueService.newService);
    props.orderToPush.additionalServices = services.filter((e) => e);
    handlePush();
    handleClose();
    props.abort();
    props.abort();
  };
  const handlePush = () => {
    for (const singleArticle of props.orderToPush.articleList) {
      addArticleToDatabase(singleArticle);
    }
    if (nextShoppingDate) {
      props.orderToPush.planDate = nextShoppingDate;
    }
    addOrderToDatabase(props.orderToPush);
  };

  const addToAry = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValueService({ newService: event.target.value });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      services.push(event.target.name);
    } else {
      services.findIndex((localServ) => {
        return event.target.name === localServ;
      }) ? (
        (services[
          services.findIndex((localServ) => {
            return event.target.name === localServ;
          })
        ] = "")
      ) : (
        <></>
      );
    }
  };
  const mappedServices = serviceList.map((singleServ: string) => {
    return (
      <FormControlLabel
        control={<Checkbox onChange={handleChange} name={singleServ} />}
        label={singleServ}
      />
    );
  });

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Fertig
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Zusatzleistungen</DialogTitle>
        <DialogContent>
          <FormGroup>{mappedServices}</FormGroup>
          <TextField
            autoFocus
            margin="normal"
            label="weitere Zusatzleistung"
            type="text"
            value={valueService.newService}
            onChange={addToAry}
            fullWidth
          ></TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDone}>Fertig</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default AdditionalServicesDialog;
