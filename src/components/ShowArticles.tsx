import { CardActionArea, Grid } from "@mui/material";
import { useContext, useState } from "react";
import Article from "../data/Article";
import {
  updateArticleInDB,
  updateArticleListToDatabase,
  updateEditableOrderInDB,
} from "../data/DatabaseFunctions";
import Order from "../data/Order";
import { UserContext } from "../store/UserContext";
import ArticleCard from "./cards/ArticleCard";
import EditArticleDialog from "./dialogs/EditArticleDialog";
import EmployeeDoneDialog from "./dialogs/EmployeeDoneDialog";
interface Props {
  articles: Article[];
  order?: Order;
}
const ShowArticles = (props: Props) => {
  const articles = props.articles;
  const [showEmpDone, setShowEmpDone] = useState(false);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const { user } = useContext(UserContext);

  const closeEmpDone = () => {
    setShowEmpDone(false);
  };
  const closeEditDialog = () => {
    setShowEditDialog(false);
  };
  const editOrder = (newArticle: Article, oldArticle: Article) => {
    articles[
      articles.findIndex((localArticle) => {
        return localArticle === oldArticle;
      })
    ] = newArticle;
    updateArticleInDB(newArticle);
    closeEditDialog();
  };
  const deleteArticle = (articleToDelete: Article) => {
    const newList: string[] = [];
    articles.forEach((article) => {
      if (article.id !== articleToDelete.id) {
        newList.push(article.id);
      }
    });
    updateArticleListToDatabase(props.order, newList);
    closeEditDialog();
  };
  const checkEdit = () => {
    // console.log(props.order);
    if (props.order.editable) {
      if (new Date().getTime() < props.order.planDate.getTime()) {
        return true;
      } else {
        updateEditableOrderInDB(props.order, false);
        return false;
      }
    } else {
      return false;
    }
  };

  return (
    <>
      {articles &&
        articles.length > 0 &&
        articles.map((article) => {
          return (
            <>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <CardActionArea
                  onClick={() => {
                    setSelectedArticle(article);
                    user.role === 2
                      ? setShowEmpDone(true)
                      : setShowEditDialog(true);
                  }}
                >
                  <ArticleCard
                    title={article.name}
                    description={article.note && article.note}
                    amount={article.amount}
                    mart={article.mart}
                    picture={article.picture && article.picture}
                  />
                </CardActionArea>
                {selectedArticle ? (
                  <EmployeeDoneDialog
                    abort={closeEmpDone}
                    open={showEmpDone}
                    article={selectedArticle}
                  />
                ) : (
                  <></>
                )}
                {selectedArticle && showEditDialog && checkEdit() ? (
                  <EditArticleDialog
                    article={selectedArticle}
                    handleClose={closeEditDialog}
                    editOrder={editOrder}
                    deleteArticle={deleteArticle}
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
