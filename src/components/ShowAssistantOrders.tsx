import {
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
} from "@mui/material";
import { useContext, useState } from "react";
import GetEmployeeOrders from "../data/GetEmployeeOrders";
import Order from "../data/Order";
import User from "../data/User";
import { DataBaseContext } from "../store/DataBaseContext";
import { UserContext } from "../store/UserContext";
import SwitchableSeniorCard from "./cards/SwitchableSeniorCard";
import FlexBox from "./FlexBox";

interface Props {
  abort: () => void;
}
interface ValueHandler {
  selectedMart: string;
}
const ShowAsisstantOrders = (props: Props) => {
  const { user } = useContext(UserContext);
  const { users } = useContext(DataBaseContext);
  const employee = user.empID;
  const seniorList = users.filter((singleUser: User) => {
    return singleUser.role === 3;
  });

  const martList = user.marts;
  const [valueMart, setValueMart] = useState<ValueHandler>({
    selectedMart: martList ? martList[0] : "",
  });
  const [showSorted, setShowSorted] = useState(true);
  const [orderList, setOrderList] = useState<Order[] | null>(
    GetEmployeeOrders(employee)
  );

  const mappedMartList =
    martList &&
    martList.length > 0 &&
    martList.map((mart: String) => {
      return <MenuItem value={mart as string}>{mart}</MenuItem>;
    });
  const mappedArticleList =
    seniorList &&
    seniorList.length > 0 &&
    seniorList.map((myUser: User) => {
      return (
        <SwitchableSeniorCard
          senior={myUser.seniorId}
          orderList={orderList}
          selectedMart={valueMart.selectedMart}
          showSorted={showSorted}
        />
      );
    });
  const handleMartChange = (event: SelectChangeEvent) => {
    setValueMart({ selectedMart: event.target.value as string });
  };
  const handleSeniorChange = () => {
    setShowSorted(!showSorted);
  };

  return (
    <FlexBox>
      <Grid container md={9} xs={12}>
        <Grid item xs={12}>
          <Grid item xs={12}>
            <Button onClick={props.abort}>Menü</Button>
          </Grid>
          <Switch defaultChecked onChange={handleSeniorChange}></Switch>
          <Select
            value={valueMart.selectedMart}
            onChange={handleMartChange}
            fullWidth
          >
            <InputLabel>Supermarkt</InputLabel>
            {mappedMartList}
          </Select>
          {mappedArticleList}
        </Grid>
      </Grid>
    </FlexBox>
  );
};
export default ShowAsisstantOrders;
