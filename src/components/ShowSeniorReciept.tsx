import { Button } from "@mui/material";
import { useContext } from "react";
import { DataBaseContext } from "../store/DataBaseContext";
import { UserContext } from "../store/UserContext";

interface Props {
  abort: () => void;
}
const ShowSeniorReciept = (props: Props) => {
  // const { user } = useContext(UserContext);
  // const { openOrders } = useContext(DataBaseContext);

  return <Button onClick={props.abort}>Zurück</Button>;
};
export default ShowSeniorReciept;
