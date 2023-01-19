import {
  Button,
  CardActionArea,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import Article from "../data/Article";
import GetEmployeeOrders from "../data/GetEmployeeOrders";
import Order from "../data/Order";
import { DataBaseContext } from "../store/DataBaseContext";
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
  const employee = "emp001";
  const seniorList = ["s001", "s002"];
  const { martList } = React.useContext(DataBaseContext);
  const [isSorted, setIsSorted] = useState(true);
  const [valueMart, setValueMart] = useState<ValueHandler>({
    selectedMart: martList ? martList[0] : "",
  });
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
    seniorList.map((senior: string) => {
      return (
        <ShowOrdersBySeniors
          senior={senior}
          orderList={orderList}
          selectedMart={valueMart.selectedMart}
        ></ShowOrdersBySeniors>
      );
    });
  const handleMartChange = (event: SelectChangeEvent) => {
    setValueMart({ selectedMart: event.target.value as string });
  };
  const testArr = () => {
    const test1 = [] as number[];
    const test2 = [1, 2, 3];
    const test3 = [4, 5, 6];
    const test4 = [test2, test3];
    for (const stest of test4) {
      for (const t of stest) {
        // console.log([...test1, t]);
        test1.push(t);
      }
      // console.log([...test1, stest]);
    }
    console.log(test1);
  };

  return (
    <FlexBox>
      <Grid>
        <Button onClick={props.abort}>Menü</Button>
        <Button onClick={testArr}>Test</Button>
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
