import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import ShowOrders from "../components/ShowOrders";
import { DataBaseContext } from "../store/DataBaseContext";
import ShoppingPage from "./ShoppingPage";
import Typography from "@mui/material/Typography";

const ShoppingPageSelection = () => {
  const { nextShoppingDate } = useContext(DataBaseContext);
  const [newOrderSelection, setNewOrderSelection] = useState<boolean>(false);
  const [showOrderSelection, setShowOrderSelection] = useState(false);
  const orderSelectionHandler = () => {
    setNewOrderSelection(!newOrderSelection);
  };
  const showOrderSelectionHandler = () => {
    setShowOrderSelection(!showOrderSelection);
  };

  return (
    <>
      {!newOrderSelection && !showOrderSelection && (
        <>
          <Typography>
            Naechstes Einkaufsdatum:{" "}
            {nextShoppingDate
              ? nextShoppingDate
              : "Ein Fehler ist aufgetreten, oh noes!"}
          </Typography>
          <Button onClick={orderSelectionHandler}>Neue Bestellung</Button>
          <Button onClick={showOrderSelectionHandler}>
            Bestellungen ansehen
          </Button>
        </>
      )}
      {newOrderSelection && <ShoppingPage abort={orderSelectionHandler} />}
      {showOrderSelection && <ShowOrders />}
    </>
  );
};

export default ShoppingPageSelection;
