import { PurchaseArray } from "../data/PurchaseTestData";
import Purchase from "../data/Purchase";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";
import FlexBox from "../components/FlexBox";
import ArticleCard from "../components/ArticleCard";
import Order from "../data/Order";
import { MartAry, OrderArray } from "../data/ArticleTestData";

//TODO: Where to define?
class FilteredList {
  constructor(private _filter: String, private _filtered: Order[]) {}

  public get filter() {
    return this._filter;
  }
  public get filtered() {
    return this._filtered;
  }
}

const EkhPage = () => {
  const [OrderAry, addOrderAry] = React.useState<Order[] | null>(OrderArray);

  // const FILTER_MART = "FILTER_MART";
  // const FILTER_SENIOR = "FILTER_SENIOR";

  // setFilter(FILTER_MART);

  // let activeFilter = FILTER_MART;
  let filterList = MartAry;

  // function setFilter(filterType: string) {

  // }

  let filteredLists = filterList.map((entry) => {
    console.log(entry);
    return new FilteredList(
      entry,
      OrderAry.filter((order: Order) => {
        return order.mart.toLowerCase() == entry.toLowerCase();
        return order.seniorId == entry;
      })
    );
  });

  const mappedOrderAry = OrderAry.map((order: Order) => {
    return (
      <Grid>
        <ArticleCard
          title={order.article.name}
          description={order.article.note}
          amount={order.amount}
          route={"/ekh"}
          mart={order.mart}
        ></ArticleCard>
      </Grid>
    );
  });

  let allFiltered = filteredLists.map((filteredList: FilteredList) => {
    return (
      <Grid>
        <h1>{filteredList.filter.toString()}</h1>
        {orderByFilter(filteredList.filtered)}
      </Grid>
    );
  });

  function orderByFilter(filtered: Order[]) {
    return filtered.map((order: Order) => {
      return (
        <Grid>
          <ArticleCard
            title={order.article.name}
            description={order.article.note}
            amount={order.amount}
            route={"/ekh"}
            mart={order.mart}
          ></ArticleCard>
        </Grid>
      );
    });
  }

  return (
    <FlexBox>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="stretch"
      >
        {allFiltered}
      </Grid>
    </FlexBox>
  );
  console.log("Test");
};

export default EkhPage;
