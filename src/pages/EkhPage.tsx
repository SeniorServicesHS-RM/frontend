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
import { OrderArray } from "../data/ArticleTestData";

const EkhPage = () => {
  const [OrderAry, addOrderAry] = React.useState<Order[] | null>(OrderArray);
  const mappedOrderAry = OrderAry.map((order: Order) => {
    return (
      <Grid item xs={4}>
        <ArticleCard
          title={order.article.name}
          description={order.article.note}
          amount={order.amount}
          route={"/shopping"}
        ></ArticleCard>
      </Grid>
    );
  });
  return (
    <FlexBox>
      <Grid>{mappedOrderAry}</Grid>
    </FlexBox>
  );
  console.log("Test");
};

export default EkhPage;
