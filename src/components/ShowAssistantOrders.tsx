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
import Order from "../data/Order";
import { DataBaseContext } from "../store/DataBaseContext";
import ArticleCard from "./ArticleCard";
import FlexBox from "./FlexBox";

interface Props {
  abort: () => void;
}
interface ValueHandler {
  selectedMart: string;
}
const ShowAsisstantOrders = (props: Props) => {
  const employee = "emp001";
  const { openOrders } = React.useContext(DataBaseContext);
  const { martList } = React.useContext(DataBaseContext);
  const [valueMart, setValueMart] = useState<ValueHandler>({
    selectedMart: martList ? martList[0] : "",
  });
  const unsortedList = () => {
    console.log(openOrders);
    const newArticleList: Article[] = [];
    for (const order of openOrders) {
      console.log(order.employeeId);
      if (order.employeeId === employee) {
        newArticleList.concat(order.articleList);
      }
    }
    return newArticleList;
  };
  const [orderList, setOrderList] = useState<Article[] | null>(unsortedList());

  const handleMartChange = (event: SelectChangeEvent) => {
    setValueMart({ selectedMart: event.target.value as string });
  };
  const mappedMartList = martList.map((mart: String) => {
    return <MenuItem value={mart as string}>{mart}</MenuItem>;
  });
  const mappedArticleList =
    orderList &&
    orderList.length > 0 &&
    orderList.map((article: Article) => {
      return (
        <Grid item lg={3} md={4} sm={6} xs={12}>
          {/* <CardActionArea> */}
          <ArticleCard
            key={article.id}
            title={article.name}
            description={article.note}
            amount={article.amount}
            mart={article.mart}
            route={"/assistant"}
          ></ArticleCard>
          {/* </CardActionArea> */}
        </Grid>
      );
    });
  return (
    <FlexBox>
      <Button onClick={props.abort}>Menü</Button>
      <Select
        value={valueMart.selectedMart}
        onChange={handleMartChange}
        fullWidth
      >
        <InputLabel>Supermarkt</InputLabel>
        {mappedMartList}
      </Select>
      <Grid>{mappedArticleList}</Grid>
    </FlexBox>
  );
};
export default ShowAsisstantOrders;
