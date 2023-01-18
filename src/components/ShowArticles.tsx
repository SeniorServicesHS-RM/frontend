import { Grid } from "@mui/material";
import Article from "../data/Article";
import ArticleCard from "./ArticleCard";
interface Props {
  articles: Article[];
}
const ShowArticles = (props: Props) => {
  const articles = props.articles;
  return (
    <>
      {articles.map((article) => {
        return (
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <ArticleCard
              title={article.name}
              description={article.note && article.note}
              amount={article.amount}
              mart={article.mart}
              picture={article.picture && article.picture}
            />
          </Grid>
        );
      })}
    </>
  );
};

export default ShowArticles;
