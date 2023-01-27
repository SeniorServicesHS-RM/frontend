import { Card, CardActionArea, Grid, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent/CardContent";
import { useState } from "react";
import Article from "../data/Article";
import Order from "../data/Order";
import ShowArticles from "./ShowArticles";
import ShowUserOverview from "./ShowUserOverview";

interface Props {
  senior: string;
  orderList: Order[];
  selectedMart: string;
  showSorted: boolean;
}

const ShowOrdersBySeniors = (props: Props) => {
  const [showSeniorOverview, setShowSeniorOverview] = useState(false);

  const openSeniorOverview = () => {
    setShowSeniorOverview(true);
  };
  const closeSeniorOverview = () => {
    setShowSeniorOverview(false);
  };

  const getEmpArticlesBySeniorAndMart = () => {
    const newList = [] as Article[];
    props.orderList.map((order) => {
      order.articleList.map((article) => {
        if (
          order.seniorId === props.senior &&
          article.mart === props.selectedMart
        ) {
          newList.push(article);
        }
      });
    });

    return newList;
  };
  const getEmpOrdersBySenior = () => {
    return props.orderList.filter((order) => {
      return order.seniorId === props.senior;
    });
  };

  return (
    <Grid container xs={12}>
      {props.showSorted ? (
        <Grid item xs={12}>
          <Card variant="outlined" sx={{ width: "100%" }}>
            <CardContent>
              <CardActionArea
                onClick={openSeniorOverview}
                sx={{ bgcolor: "primary.main", borderRadius: 3, p: 1 }}
              >
                <Typography
                  variant="h3"
                  sx={{ p: 1, fontSize: 22, fontWeight: "bold" }}
                  color="text.secondary"
                  gutterBottom
                >
                  {props.senior}
                </Typography>
              </CardActionArea>

              <ShowUserOverview
                abort={closeSeniorOverview}
                open={showSeniorOverview}
                seniorId={props.senior}
                orderList={getEmpOrdersBySenior()}
              />
              <ShowArticles
                articles={getEmpArticlesBySeniorAndMart()}
              ></ShowArticles>
            </CardContent>
          </Card>
        </Grid>
      ) : (
        <ShowArticles articles={getEmpArticlesBySeniorAndMart()} />
      )}
    </Grid>
  );
};

export default ShowOrdersBySeniors;
