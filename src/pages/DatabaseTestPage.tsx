import React, { useContext } from "react";
import { DataBaseContext } from "../store/DataBaseContext";
import {
  addArticleToDatabase,
  addOrderToDatabase,
} from "../data/DatabaseFunctions";
import FlexBox from "../components/FlexBox";
import { Button } from "@mui/material";
import Article from "../data/Article";
import Order from "../data/Order";

const DataBaseTestPage = () => {
  const { articles, changeArticles, openOrders } = useContext(DataBaseContext);

  const addTestArticleToDB = () => {
    const articleToAdd = new Article(
      "0000",
      "Essen",
      "Vom Metzger. Schoen das Schnitzelbroetchen :>"
    );
    addArticleToDatabase(articleToAdd);
  };

  const addTestOrderToDB = () => {
    const date = new Date();

    const article = new Article(
      "9999",
      "Kaes",
      "Hallo Mama, ich bin in der Datenbank!"
    );
    const order = new Order("01", "LEL GIBTS NOCH NICHT", article, 12, date);
    addOrderToDatabase(order);
  };

  return (
    <FlexBox>
      {articles &&
        articles.map((art) => {
          return (
            <p>
              {art.id} und {art.name}
            </p>
          );
        })}
      <Button onClick={addTestArticleToDB}>Add Test Article</Button>

      <p>OrderTest</p>
      {openOrders &&
        openOrders.map((order) => {
          return (
            <p>
              id: {order.id} - name: {order.article && order.article.name}{" "}
              amount: {order.amount} unit: {order.unit}
            </p>
          );
        })}
      <Button onClick={addTestOrderToDB}>Add Test Order</Button>
    </FlexBox>
  );
};

export default DataBaseTestPage;
