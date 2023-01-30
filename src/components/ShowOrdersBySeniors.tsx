import {
  Card,
  CardActionArea,
  Dialog,
  DialogActions,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import CardContent from "@mui/material/CardContent/CardContent";
import { useState } from "react";
import Article from "../data/Article";
import Order from "../data/Order";
import FlexBox from "./FlexBox";
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

    return newList.sort((a, b) => a.name.localeCompare(b.name));
  };
  const getEmpOrdersBySenior = () => {
    return props.orderList.filter((order) => {
      return order.seniorId === props.senior;
    });
  };

  return (
    <>
      {props.showSorted ? (
        <>
          <Card variant="outlined">
            <CardContent>
              <CardActionArea onClick={openSeniorOverview}>
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
        </>
      ) : (
        <ShowArticles articles={getEmpArticlesBySeniorAndMart()} />
      )}
    </>
  );
};

export default ShowOrdersBySeniors;
