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
          <ArticleCard
            title={article.name}
            description={article.note && article.note}
            amount={article.amount}
            mart={article.mart}
            picture={article.picture && article.picture}
            route="wofuer ist das da?!"
          />
        );
      })}
    </>
  );
};

export default ShowArticles;
