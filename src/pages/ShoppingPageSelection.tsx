import { Button, Grid, Paper } from "@mui/material";
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
    <Grid
      container
      xs={12}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
      }}
    >
      {!newOrderSelection && !showOrderSelection && (
        <Grid item>
          <Typography
            sx={{
              textAlign: "center",
              mt: 3,
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Naechstes Einkaufsdatum
            <Paper
              variant="elevation"
              sx={{
                m: 1.5,
                p: 1.5,
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              <Typography>
                {console.log(nextShoppingDate)}
                {nextShoppingDate
                  ? nextShoppingDate.toDateString()
                  : "Ein Fehler ist aufgetreten, oh noes!"}
              </Typography>
            </Paper>
          </Typography>
          <Button
            onClick={orderSelectionHandler}
            sx={{
              bgcolor: "primary.main",
              color: "#ffffff",
              m: 1.5,
              p: 1.5,
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            Neue Bestellung
          </Button>
          <Button
            onClick={showOrderSelectionHandler}
            sx={{
              bgcolor: "primary.main",
              color: "#ffffff",
              m: 1.5,
              p: 1.5,
              "&:hover": { bgcolor: "primary.dark" },
            }}
          >
            Bestellungen ansehen
          </Button>
        </Grid>
      )}
      {newOrderSelection && <ShoppingPage abort={orderSelectionHandler} />}
      {showOrderSelection && <ShowOrders abort={showOrderSelectionHandler} />}
    </Grid>
  );
};

export default ShoppingPageSelection;
