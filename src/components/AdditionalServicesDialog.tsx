import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { text } from "body-parser";
import React, { ChangeEvent } from "react";
import { useState } from "react";
import {
  addArticleToDatabase,
  addOrderToDatabase,
} from "../data/DatabaseFunctions";
import Order from "../data/Order";

interface Props {
  orderToPush: Order;
}
interface ValueHandler {
  newService?: string;
}

function AdditionalServicesDialog(props: Props) {
  const serviceList: string[] = [
    "In Wohnung bringen",
    "In Wohnung verräumen",
    "Mit Abrechnung helfen",
  ];
  const [services, setServices] = useState([""]);
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
    console.log(services);
    services.push(valueService.newService);
    props.orderToPush.additionalServices = services.filter((e) => e);
    console.log(props.orderToPush.additionalServices);
    handlePush();
    handleClose();
  };
  const handlePush = () => {
    for (const singleArticle of props.orderToPush.articleList) {
      addArticleToDatabase(singleArticle);
    }
    addOrderToDatabase(props.orderToPush);
  };
  function addToAry(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void {
    setValueService({ newService: event.target.value });
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    console.log(event.target.checked);
    console.log(event.target.name);
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
    console.log(services);
  }
  const mappedServices = serviceList.map((singleServ: string) => {
    return (
      <FormControlLabel
        control={<Checkbox onChange={handleChange} name={singleServ} />}
        label={singleServ}
      />
    );
  });

  return (
    <div className="send-btn">
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ marginBottom: 2 }}
        size="large"
        startIcon={<TaskAltIcon />}
        color={"primary"}
      >
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
