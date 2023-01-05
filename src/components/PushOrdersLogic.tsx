import { Button } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import Article from "../data/Article";
import {
  addArticleToDatabase,
  addOrderToDatabase,
} from "../data/DatabaseFunctions";
import Order from "../data/Order";
interface Props {
  order: Order;
}

const PushOrdersLogic = (props: Props) => {
  const mappedOrders = props.order.articleList.map((singleOrder: Article) => {
    return addArticleToDatabase(singleOrder);
  });
  const handlePush = () => {
    for (const singleArticle of props.order.articleList) {
      addArticleToDatabase(singleArticle);
    }
    addOrderToDatabase(props.order);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handlePush}>
        Push List
      </Button>
    </div>
  );
};

export default PushOrdersLogic;
