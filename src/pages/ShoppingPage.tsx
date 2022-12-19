import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import AddArticleDialog from "../components/AddArticleDialog";
import ArticleCard from "../components/ArticleCard";
import EditArticleDialog from "../components/EditArticleDialog";
import FlexBox from "../components/FlexBox";
import { OrderArray } from "../data/ArticleTestData";
import Order from "../data/Order";
import React, { useState } from "react";

const ShoppingPage = () => {
  const [isEditOpen, setEditOpen] = useState(false);
  const [orderList, setOrderList] = useState<Order[] | null>(OrderArray);
  const [singleOrder, setSingleOrder] = useState<Order | null>(null);
  const editHandler = (order: Order) => {
    setSingleOrder(order);
    setEditOpen(!isEditOpen);
  };
  const handleClose = () => {
    setEditOpen(false);
  };
  const editOrder = (newOrder: Order, oldOrder: Order) => {
    const arrayIndex = orderList.findIndex((aryOrder) => {
      return aryOrder === oldOrder;
    });
    const newList = [...orderList];
    newList[arrayIndex] = newOrder;
    setOrderList(newList);
  };
  const addOrder = (order: Order) => setOrderList([...orderList, order]);
  const mappedOrderList = orderList.map((order: Order) => {
    return (
      <Grid item xs={4}>
        <CardActionArea
          onClick={() => {
            editHandler(order);
          }}
        >
          <ArticleCard
            title={order.article.name}
            description={order.article.note}
            amount={order.amount}
            route={"/shopping"}
          ></ArticleCard>
        </CardActionArea>
      </Grid>
    );
  });
  return (
    <>
      <FlexBox>
        <Grid container alignItems="flex-start" spacing={{ xs: 2 }}>
          <Grid item xs={4}>
            <AddArticleDialog addOrder={addOrder}></AddArticleDialog>
          </Grid>
          {mappedOrderList}
          {isEditOpen ? (
            <EditArticleDialog
              order={singleOrder}
              handleClose={handleClose}
              editOrder={editOrder}
            ></EditArticleDialog>
          ) : (
            <></>
          )}
        </Grid>
      </FlexBox>
    </>
  );
};

export default ShoppingPage;
