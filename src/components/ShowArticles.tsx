import { Button, CardActionArea, Grid } from "@mui/material";
import { useState } from "react";
import Article from "../data/Article";
import ArticleCard from "./ArticleCard";
import ShowEmpDoneDialog from "./ShowEmpDoneDialog";
interface Props {
  articles: Article[];
}
const ShowArticles = (props: Props) => {
  const articles = props.articles;
  const [showEmpDone, setShowEmpDone] = useState(false);

  const openEmpDone = () => {
    setShowEmpDone(true);
  };
  const closeEmpDone = () => {
    setShowEmpDone(false);
  };
  return (
    <>
      {articles.map((article) => {
        return (
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <CardActionArea onClick={openEmpDone}>
              <ArticleCard
                title={article.name}
                description={article.note && article.note}
                amount={article.amount}
                mart={article.mart}
                picture={article.picture && article.picture}
              />
            </CardActionArea>
            <ShowEmpDoneDialog
              abort={closeEmpDone}
              open={showEmpDone}
              article={article}
            />
          </Grid>
        );
      })}
    </>
  );
};

export default ShowArticles;
