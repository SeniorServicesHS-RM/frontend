import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { ReactNode } from "react";

import { CardMedia, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import logosArr from "../data/LogosArr";
import Article from "../data/Article";
interface Props {
  article: Article;
}

const ArticleCard = (props: Props) => {
  const showLogo = () => {
    let index = logosArr.findIndex((element) => {
      return props.article.mart === element.name;
    });
    if (logosArr[index]) {
      return (
        <Grid>
          <CardMedia
            component={"img"}
            image={logosArr[index].url}
            alt={logosArr[index].name}
            height={50}
          />
        </Grid>
      );
    } else {
      return (
        <Typography
          color="primary.light"
          borderRadius={1.5}
          bgcolor={"primary.main"}
          p={1}
          m={1}
          width="6rem"
          textAlign={"center"}
        >
          {props.article.mart}
        </Typography>
      );
    }
  };
  return (
    <Card
      variant="outlined"
      sx={{
        maxHeight: 200,
        height: 200,
        backgroundColor: props.article.done ? "primary.light" : "primary.dark",
      }}
    >
      <CardContent>
        <Typography
          variant="h3"
          sx={{ p: 1, fontSize: 22, fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
        >
          {props.article.name}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ p: 1, mb: 1.5 }} color="text.secondary">
          {props.article.note}
        </Typography>
        <Grid
          display={"flex"}
          alignItems={"center"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          {showLogo()}
          <Typography
            color="primary.light"
            borderRadius={1.5}
            bgcolor={"primary.main"}
            p={1}
            m={1}
            width="6rem"
            textAlign={"center"}
          >
            Menge {props.article.amount}
          </Typography>
        </Grid>
        {props.article.picture !== undefined ? <></> : props.article.picture}
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
