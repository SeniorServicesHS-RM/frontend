import { Button } from "@mui/material";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import { useContext, useState } from "react";
import ArticleCard from "../components/cards/ArticleCard";
import AddArticleDialog from "../components/dialogs/AddArticleDialog";
import AdditionalServicesDialog from "../components/dialogs/AdditionalServicesDialog";
import EditArticleDialog from "../components/dialogs/EditArticleDialog";
import FlexBox from "../components/FlexBox";
import Article from "../data/Article";
import Order from "../data/Order";
import { UserContext } from "../store/UserContext";

interface Props {
  abort: () => void;
}

const ShoppingPage = (props: Props) => {
  const { user } = useContext(UserContext);
  const seniorId = user.seniorId;

  //const seniorId = "s001"; //gemockte SeniorId! Richtige muss aus authcontext kommen
  const [isEditOpen, setEditOpen] = useState(false);
  const [myOrder] = useState<Order | null>(
    new Order(Date.now().toString(), seniorId, [], new Date(Date.now()))
  );
  const [orderList, setOrderList] = useState<Article[] | null>(
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
        return article.id !== articleToDelete.id;
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
              orderToPush={myOrder}
            ></AdditionalServicesDialog>
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
