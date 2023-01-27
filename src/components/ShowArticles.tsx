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
  const [showEmpDone, setShowEmpDone] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const closeEmpDone = () => {
    setShowEmpDone(false);
  };
  return (
    <>
      {articles &&
        articles.length > 0 &&
        articles.map((article) => {
          return (
            <>
              <Grid item xs={12}>
                <CardActionArea
                  onClick={() => {
                    setSelectedArticle(article);
                    setShowEmpDone(true);
                  }}
                >
                  <OrdersListAssistant
                    title={article.name}
                    description={article.note && article.note}
                    amount={article.amount}
                    mart={article.mart}
                  />
                </CardActionArea>
                {selectedArticle ? (
                  <ShowEmpDoneDialog
                    abort={closeEmpDone}
                    open={showEmpDone}
                    article={selectedArticle}
                  />
                ) : (
                  <></>
                )}
              </Grid>
            </>
          );
        })}
    </>
  );
};

export default ShowArticles;
