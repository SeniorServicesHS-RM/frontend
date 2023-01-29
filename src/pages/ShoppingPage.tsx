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
import AdditionalServicesDialog from "../components/AdditionalServicesDialog";
import { Button } from "@mui/material";
import { UserContext } from "../store/UserContext";

interface Props {
  abort: () => void;
}

const ShoppingPage = (props: Props) => {
  const { user } = useContext(UserContext);
  const seniorId = user.seniorId;

  //const seniorId = "s001"; //gemockte SeniorId! Richtige muss aus authcontext kommen
  const [isEditOpen, setEditOpen] = useState(false);
  const { openOrders } = useContext(DataBaseContext);
  const [myOrder, setMyOrder] = useState<Order | null>(
    new Order(Date.now().toString(), seniorId, [], new Date(Date.now()))
    new Order(Date.now().toString(), seniorId, [], new Date(Date.now()))
  );
  const [orderList, setOrderList] = useState<Article[] | null>(
    myOrder.articleList ? myOrder.articleList : null
    myOrder.articleList ? myOrder.articleList : null
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
  const deleteOrder = (articleToDelete: Article) => {
    setOrderList(
      orderList.filter((article) => {
        return article.id != articleToDelete.id;
      })
    );
  };

  const addArticle = (article: Article) =>
    setOrderList([...orderList, article]);
  myOrder.articleList = orderList;

  const mappedOrderList =
    orderList &&
    orderList.length > 0 &&
    orderList.map((article: Article) => {
      return (
        <Grid item lg={3} md={4} sm={6} xs={12}>
          <CardActionArea
            onClick={() => {
              editHandler(article);
            }}
          >
            <ArticleCard
              key={article.id}
              title={article.name}
              description={article.note}
              amount={article.amount}
              mart={article.mart}
            ></ArticleCard>
          </CardActionArea>
        </Grid>
      );
    });
  return (
    <>
      <FlexBox>
        <Grid container spacing={{ xs: 2 }}>
          <Grid
            item
            xs={12}
            alignContent={"center"}
            alignItems={"center"}
            flexDirection={"column"}
            justifyContent={"center"}
            sx={{ width: 2 }}
          >
            <AddArticleDialog addOrder={addArticle}></AddArticleDialog>
            <AdditionalServicesDialog
              abort={props.abort}
              abort={props.abort}
              orderToPush={myOrder}
            ></AdditionalServicesDialog>
            <Button onClick={props.abort}>Abbrechen</Button>
            <Button onClick={props.abort}>Abbrechen</Button>
          </Grid>
          {mappedOrderList}
          {isEditOpen ? (
            <EditArticleDialog
              article={singleOrder}
              handleClose={handleClose}
              editOrder={editOrder}
              deleteArticle={deleteOrder}
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
