import { Card, Grid, TextField, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent/CardContent";
import { useState } from "react";
import Article from "../data/Article";
import Order from "../data/Order";
import FlexBox from "./FlexBox";
import ShowArticles from "./ShowArticles";

interface Props {
  senior: string;
  orderList: Order[];
}

const ShowOrdersBySeniors = (props: Props) => {
  const getUserOrdersByEmp = () => {
    return props.orderList
      ? props.orderList.filter((order) => {
          return order.seniorId === props.senior;
        })
      : [];
  };
  const userOrders = getUserOrdersByEmp();
  const getAllArticles = () => {
    const newList = [] as Article[];
    userOrders.map((order) => {
      order.articleList.map((article) => {
        if (order.seniorId === props.senior) {
          newList.push(article);
        }
      });
    });
    return newList;
  };
  return (
    <>
      <Card variant="outlined">
        <CardContent>
          <Typography
            variant="h3"
            sx={{ p: 1, fontSize: 22, fontWeight: "bold" }}
            color="text.secondary"
            gutterBottom
          >
            {props.senior}
          </Typography>
          <ShowArticles articles={getAllArticles()}></ShowArticles>
        </CardContent>
      </Card>
    </>
  );
};

export default ShowOrdersBySeniors;
