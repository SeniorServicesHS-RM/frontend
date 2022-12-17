import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import AddArticleDialog from "../components/AddArticleDialog";
import ArticleCard from "../components/ArticleCard";
import EditArticleDialog from "../components/EditArticleDialog";
import FlexBox from "../components/FlexBox";
import Article from "../data/Article";
import { ArticleArray } from "../data/ArticleTestData";

const ShoppingPage = () => {
  const [isEditOpen, setEditOpen] = useState(false);
  const [articleList, setArticleList] = useState<Article[] | null>(
    ArticleArray
  );
  const editHandler = () => {
    setEditOpen(!isEditOpen);
  };
  const editOpenHandler = () => {
    setEditOpen(true);
  };
  const editCloseHandler = () => {
    setEditOpen(false);
  };
  const editArticle = (article: Article) =>
    setArticleList([...articleList, article]);
  const addArticle = (article: Article) =>
    setArticleList([...articleList, article]);
  const mappedArticleList = articleList.map((article: Article) => {
    return (
      <Grid item xs={4}>
        <CardActionArea onClick={editHandler}>
          {isEditOpen ? (
            <EditArticleDialog
              //editArticle={editArticle}
              article={article}
              //editCloseHandler={editCloseHandler}
            ></EditArticleDialog>
          ) : (
            <></>
          )}
          <ArticleCard
            title={article.name}
            description={article.note}
            route={"/shopping"}
          ></ArticleCard>
        </CardActionArea>
      </Grid>
    );
  });
  return (
    <>
      <FlexBox>
        <Grid container alignItems="flex-start" spacing={{ xs: 2 }}>
          <Grid item xs={4}>
            <AddArticleDialog addArticle={addArticle}></AddArticleDialog>
          </Grid>
          {mappedArticleList}
        </Grid>
      </FlexBox>
    </>
  );
};

export default ShoppingPage;
