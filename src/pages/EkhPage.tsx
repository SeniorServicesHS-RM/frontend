import { PurchaseArray } from "../data/PurchaseTestData";
import Purchase from "../data/Purchase";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import FlexBox from "../components/FlexBox";
import ArticleCard from "../components/ArticleCard";
import Order from "../data/Order";
import { MartAry, OrderArray } from "../data/ArticleTestData";

//TODO: auslagern!
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

  const FILTER_MART = "FILTER_MART";
  const FILTER_SENIOR = "FILTER_SENIOR";

  let activeFilterType = FILTER_MART;
  let activeFilter: Function = null;
  let filterList = MartAry;

  setFilter(FILTER_SENIOR);

  function setFilter(filterType: string) {
    activeFilterType = filterType;
    if (activeFilterType == FILTER_MART) {
      filterList = MartAry;
      activeFilter = (order: Order, entry: string) => {
        return order.mart.toLowerCase() == entry.toLowerCase();
      };
    }
    if (activeFilterType == FILTER_SENIOR) {
      filterList = [
        ...new Set(
          OrderAry.map((order: Order) => {
            return order.seniorId;
          })
        ),
      ];
      activeFilter = (order: Order, entry: string) => {
        return order.seniorId.toLowerCase() == entry.toLowerCase();
      };
    }
  }

  let filteredLists = filterList.map((entry) => {
    return new FilteredList(
      entry,
      OrderAry.filter((order: Order) => activeFilter(order, entry))
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
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="web">Web</ToggleButton>
        <ToggleButton value="android">Android</ToggleButton>
        <ToggleButton value="ios">iOS</ToggleButton>
      </ToggleButtonGroup>
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
};

export default EkhPage;
