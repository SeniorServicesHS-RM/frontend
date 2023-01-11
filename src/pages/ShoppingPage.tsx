import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import AddArticleDialog from "../components/AddArticleDialog";
import ArticleCard from "../components/ArticleCard";
import EditArticleDialog from "../components/EditArticleDialog";
import FlexBox from "../components/FlexBox";
import Order from "../data/Order";
import React, { useEffect, useState, useContext } from "react";
import { DataBaseContext, DataBaseProvider } from "../store/DataBaseContext";
import Article from "../data/Article";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup/FormGroup";
import Checkbox from "@mui/material/Checkbox/Checkbox";
import AdditionalServicesDialog from "../components/AdditionalServicesDialog";

const ShoppingPage = () => {
  const [isEditOpen, setEditOpen] = useState(false);
  const { articles, changeArticles, openOrders } = useContext(DataBaseContext);
  const [myOrder, setMyOrder] = useState<Order | null>(
    openOrders[openOrders.length - 1]
  );
  const [orderList, setOrderList] = useState<Article[] | null>(
    myOrder.articleList
  );
  const [singleOrder, setSingleOrder] = useState<Article | null>(null);
  const editHandler = (order: Article) => {
    setSingleOrder(order);
    setEditOpen(!isEditOpen);
  };
  const handleClose = () => {
    setEditOpen(false);
  };
  const editOrder = (newOrder: Article, oldOrder: Article) => {
    const arrayIndex = orderList.findIndex((aryOrder) => {
      return aryOrder === oldOrder;
    });
    const newList = [...orderList];
    newList[arrayIndex] = newOrder;
    setOrderList(newList);
    myOrder.articleList = orderList;
  };
  const addArticle = (article: Article) =>
    setOrderList([...orderList, article]);
  myOrder.articleList = orderList;
  const mappedOrderList = orderList.map((article: Article) => {
    return (
      <Grid item lg={3} md={4} sm={6} xs={12}>
        <CardActionArea
          onClick={() => {
            editHandler(article);
          }}
        >
          <ArticleCard
            title={article.name}
            description={article.note}
            amount={article.amount}
            mart={article.mart}
            route={"/shopping"}
          ></ArticleCard>
        </CardActionArea>
      </Grid>
    );
  });
  return (
    <>
      <FlexBox>
        <Grid container spacing={{ xs: 2 }}>
          <Grid item xs={12} alignContent={"center"} alignItems={"center"} flexDirection={"column"} justifyContent={"center"} sx={{width:2}}>
            <AddArticleDialog  addOrder={addArticle} ></AddArticleDialog>
            <AdditionalServicesDialog
              orderToPush={myOrder}
            ></AdditionalServicesDialog>
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
