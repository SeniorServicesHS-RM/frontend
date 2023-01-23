import {
  Button,
  CardActionArea,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import React, { useContext, useState } from "react";
import Article from "../data/Article";
import GetEmployeeOrders from "../data/GetEmployeeOrders";
import Order from "../data/Order";
import User from "../data/User";
import { DataBaseContext } from "../store/DataBaseContext";
import { UserContext } from "../store/UserContext";
import ArticleCard from "./ArticleCard";
import FlexBox from "./FlexBox";
import ShowArticles from "./ShowArticles";
import ShowOrders from "./ShowOrders";
import ShowOrdersBySeniors from "./ShowOrdersBySeniors";

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
  // console.log(user);
  const seniorList = users.filter((singleUser: User) => {
    return singleUser.role === 3;
  });

  const { martList } = useContext(DataBaseContext);
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
        <ShowOrdersBySeniors
          senior={myUser.seniorId}
          orderList={orderList}
          selectedMart={valueMart.selectedMart}
          showSorted={showSorted}
        ></ShowOrdersBySeniors>
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
      <Grid>
        <Button onClick={props.abort}>Menü</Button>
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
    </FlexBox>
  );
};
export default ShowAsisstantOrders;
