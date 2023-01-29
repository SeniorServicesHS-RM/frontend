import { useContext } from "react";
import { DataBaseContext } from "../store/DataBaseContext";
import { UserContext } from "../store/UserContext";
import { Button, Grid } from "@mui/material";
interface Props {
  abort: () => void;
}
const ShowSeniorReciept = (props: Props) => {
  const { user } = useContext(UserContext);
  const { openOrders } = useContext(DataBaseContext);

  return (
    <Grid item xs={12}>
      <Button variant="outlined" sx={{ p: 2, m: 1 }} onClick={props.abort}>
        Zurück
      </Button>
    </Grid>
  );
};
export default ShowSeniorReciept;
