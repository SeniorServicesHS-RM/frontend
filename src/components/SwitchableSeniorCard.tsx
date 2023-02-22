import { Card, CardActionArea, Grid, Typography } from "@mui/material";
import CardContent from "@mui/material/CardContent/CardContent";
import { useState } from "react";
import Article from "../data/Article";
import Order from "../data/Order";
import FlexBox from "./FlexBox";
import SeniorSumServicesDialog from "./SeniorSumServicesDialog";
import ShowArticles from "./ShowArticles";

interface Props {
  senior: string;
  orderList: Order[];
  selectedMart: string;
  showSorted: boolean;
}

const SwitchableSeniorCard = (props: Props) => {
  const [showSeniorOverview, setShowSeniorOverview] = useState(false);

  const openSeniorOverview = () => {
    setShowSeniorOverview(true);
  };
  const closeSeniorOverview = () => {
    setShowSeniorOverview(false);
  };

  const getEmpArticlesBySeniorAndMart = () => {
    const newList = [] as Article[];
    props.orderList.forEach((order) => {
      order.articleList.forEach((article) => {
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
    <Grid container xs={12}>
      {props.showSorted ? (
        <Grid item xs={12}>
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

              <SeniorSumServicesDialog
                abort={closeSeniorOverview}
                open={showSeniorOverview}
                seniorId={props.senior}
                orderList={getEmpOrdersBySenior()}
              />
              <FlexBox>
                <Grid container spacing={{ xs: 2 }}>
                  <ShowArticles articles={getEmpArticlesBySeniorAndMart()} />
                </Grid>
              </FlexBox>
            </CardContent>
          </Card>
        </Grid>
      ) : (
        <FlexBox>
          <Grid container spacing={{ xs: 2 }}>
            <ShowArticles
              articles={getEmpArticlesBySeniorAndMart()}
            ></ShowArticles>
          </Grid>
        </FlexBox>
      )}
    </Grid>
  );
};

export default SwitchableSeniorCard;
