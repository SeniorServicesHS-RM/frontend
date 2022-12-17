import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import AddArticleDialog from "../components/AddArticleDialog";
import ArticleCard from "../components/ArticleCard";
import EditArticleDialog from "../components/EditArticleDialog";
import FlexBox from "../components/FlexBox";
import Article from "../data/Article";
import { OrderArray } from "../data/ArticleTestData";
import Order from "../data/Order";

const ShoppingPage = () => {
  const [isEditOpen, setEditOpen] = useState(false);
  const [orderList, setOrderList] = useState<Order[] | null>(OrderArray);
  const editHandler = () => {
    setEditOpen(!isEditOpen);
  };
  const editOpenHandler = () => {
    setEditOpen(true);
  };
  const editCloseHandler = () => {
    setEditOpen(false);
  };
  const editOrder = (order: Order) => setOrderList([...orderList, order]);
  const addOrder = (order: Order) => setOrderList([...orderList, order]);
  const mappedOrderList = orderList.map((order: Order) => {
    return (
      <Grid item xs={4}>
        <CardActionArea onClick={editHandler}>
          {isEditOpen ? (
            <EditArticleDialog
              //editArticle={editArticle}
              order={order}
              //editCloseHandler={editCloseHandler}
            ></EditArticleDialog>
          ) : (
            <></>
          )}
          <ArticleCard
            // singleOrder={order}
            // isEditOpen={isEditOpen}
            // setEditOpen={setEditOpen}
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
        </Grid>
      </FlexBox>
    </>
  );
};

export default ShoppingPage;
