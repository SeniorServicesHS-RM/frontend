import { Button, Grid, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useContext, useState } from "react";
import ShowOrders from "../components/ShowOrders";
import { DataBaseContext } from "../store/DataBaseContext";
import ShoppingPage from "./ShoppingPage";

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

  function dateConverter (date: Date): string {
    let dateString: string = ('0' + date.getDate()).slice(-2) + '-'
    + ('0' + (date.getMonth()+1)).slice(-2) + '-'
    + date.getFullYear();
    return dateString;
  }

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
              <Typography variant="h5">
                {nextShoppingDate
                  ? dateConverter(nextShoppingDate)
                  : "Ein Fehler beim Abruf des Datums ist aufgetreten!"}
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
