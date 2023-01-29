import { CardActionArea, Grid } from "@mui/material";
import { useState } from "react";
import Article from "../data/Article";

import OrdersListAssistant from "./OrdersListAssistant";
import ShowEmpDoneDialog from "./ShowEmpDoneDialog";
interface Props {
  articles: Article[];
}
const ShowArticles = (props: Props) => {
  const articles = props.articles;

  return (
    <>
      {articles &&
        articles.length > 0 &&
        articles.map((article) => {
          return (
            <Grid container>
              <Grid item xs={12}>
                <OrdersListAssistant article={article} />
              </Grid>
            </Grid>
          );
        })}
    </>
  );
};

export default ShowArticles;
