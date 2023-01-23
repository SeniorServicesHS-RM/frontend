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
  const [selectedMarts, setSelectedMart] = useState<string[]>([]);
  const [isAvailable, setIsAvailable] = useState(false);
  const { user } = useContext(UserContext);
  const handleDone = () => {
    console.log(user.id);
    updateAvailabilityInDB(isAvailable, user.id);
    updateAvailableMartsInDB(selectedMarts, user.id);
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
    if (!event.target.checked) {
      setSelectedMart([]);
    }
  };
  const mappedMartAvailability = martList.map((mart) => {
    const checkSelect = () => {
      return (
        selectedMarts &&
        selectedMarts.find((singleMart) => {
          return singleMart === mart;
        }) === mart
      );
    };
    return (
      <FlexBox>
        <FormControlLabel
          control={<Checkbox onChange={handleMartChange} name={mart} />}
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
          <Checkbox onChange={handleAvailabilityChange} name="available" />
        }
        label="available"
      />

      {isAvailable ? mappedMartAvailability : <></>}
      <Button onClick={handleDone}>Speichern</Button>
    </FlexBox>
  );
};
export default ShowEmployeeAvailability;
