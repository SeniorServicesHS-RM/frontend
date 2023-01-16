import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { deleteOrder } from "../data/DatabaseFunctions";
import Order from "../data/Order";
import ShowArticles from "./ShowArticles";

interface Props {
  order: Order;
}

const OrderCard = (props: Props) => {
  const [showArticles, setShowArticles] = useState(false);
  const order = props.order;
  const showArticlesHandler = () => {
    setShowArticles(!showArticles);
  };
  return (
    <>
      <Card variant="outlined" sx={{ backgroundColor: "primary.light" }}>
        <CardContent>
          <Typography
            variant="h3"
            sx={{ p: 1, fontSize: 22, fontWeight: "bold" }}
            color="text.secondary"
            gutterBottom
          >
            {order.id}
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography sx={{ p: 1, mb: 1.5 }} color="text.secondary">
            {"Artikelanzahl: " + order.articleList.length}
          </Typography>
          <Typography sx={{ p: 1, mb: 1.5 }} color="text.secondary">
            Zusatzleistungen:{" "}
            {order.additionalServices ? order.additionalServices : "keine"}
          </Typography>
          <Typography sx={{ p: 1, mb: 1.5 }} color="text.secondary">
            Erledigt: {order.orderDone ? "ja" : "nein"}
          </Typography>
        </CardContent>
        <CardActionArea>
          <Button onClick={showArticlesHandler}>
            {showArticles ? "Weniger Anzeigen" : "Mehr Anzeigen"}
          </Button>
          <Button onClick={() => deleteOrder(order)}>Loeschen</Button>
        </CardActionArea>
      </Card>
      {showArticles ? (
        <ShowArticles articles={order.articleList}></ShowArticles>
      ) : (
        <></>
      )}
    </>
  );
};
export default OrderCard;
