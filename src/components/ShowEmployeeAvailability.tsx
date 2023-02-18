import { Button, Checkbox, FormControlLabel, Grid, Paper } from "@mui/material";
import { ChangeEvent, useContext, useState } from "react";
import {
  updateAvailabilityInDB,
  updateAvailableMartsInDB,
} from "../data/DatabaseFunctions";
import { DataBaseContext } from "../store/DataBaseContext";
import { UserContext } from "../store/UserContext";

interface Props {
  abort: () => void;
}

const ShowEmployeeAvailability = (props: Props) => {
  const { martList } = useContext(DataBaseContext);
  const { user } = useContext(UserContext);
  const [selectedMarts, setSelectedMart] = useState<string[]>(user.marts);
  const [isAvailable, setIsAvailable] = useState(user.available);
  const handleDone = () => {
    updateAvailabilityInDB(isAvailable, user.id);
    updateAvailableMartsInDB(selectedMarts, user.id);
    props.abort();
  };

  const handleMartChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      selectedMarts.push(event.target.name);
    } else {
      selectedMarts[
        selectedMarts.findIndex((singleMart) => {
          return singleMart === event.target.name;
        })
      ] = "";
    }
    setSelectedMart(selectedMarts.filter((e) => e));

    console.log(selectedMarts);
  };
  const handleAvailabilityChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsAvailable(!isAvailable);
    setSelectedMart(user.marts);
    console.log(user.marts);
  };
  const mappedMartAvailability = martList.map((mart) => {
    return (
      <Grid container xs={12}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox
                defaultChecked={user.marts.includes(mart)}
                onChange={handleMartChange}
                name={mart}
              />
            }
            label={mart}
          />
        </Grid>
      </Grid>
    );
  });

  return (
    <Grid
      container
      xs={12}
      sx={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12}>
        <Button onClick={props.abort}>Menü</Button>
      </Grid>
      <Paper sx={{ width: "100%" }}>
        <Grid item xs={9} sx={{ p: 5 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isAvailable}
                onChange={handleAvailabilityChange}
                name="available"
              />
            }
            label="available"
          />
        </Grid>
        <Grid
          xs={9}
          item
          sx={{
            pl: 10,
            mb: 5,
          }}
        >
          {isAvailable ? mappedMartAvailability : <></>}
        </Grid>
      </Paper>
      <Grid item xs={12}>
        <Button onClick={handleDone}>Speichern</Button>
      </Grid>
    </Grid>
  );
};
export default ShowEmployeeAvailability;
