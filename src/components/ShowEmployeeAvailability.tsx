import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
} from "@mui/material";
import { ChangeEvent, useContext, useState } from "react";
import {
  updateAvailabilityInDB,
  updateAvailableMartsInDB,
} from "../data/DatabaseFunctions";
import { DataBaseContext } from "../store/DataBaseContext";
import { UserContext } from "../store/UserContext";
import FlexBox from "./FlexBox";

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
      <FlexBox>
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
      </FlexBox>
    );
  });

  return (
    <FlexBox>
      <Button onClick={props.abort}>Menü</Button>
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

      {isAvailable ? mappedMartAvailability : <></>}
      <Button onClick={handleDone}>Speichern</Button>
    </FlexBox>
  );
};
export default ShowEmployeeAvailability;
