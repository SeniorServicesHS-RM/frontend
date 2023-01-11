import React, { ReactNode, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import CardActionArea from "@mui/material/CardActionArea";
import EditArticleDialog from "../components/EditArticleDialog";
import Article from "../data/Article";
import Typography from "@mui/material/Typography";
import ShoppingPage from "../pages/ShoppingPage";
import Order from "../data/Order";
import { Grid } from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import DeleteIcon from "@mui/icons-material/Delete";
import Tooltip from "@mui/material/Tooltip";
interface Props {
  title: string;
  description?: string;
  amount: number;
  mart: String;
  picture?: ReactNode;
  route: string;
}

const ArticleCard = (props: Props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          variant="h3"
          sx={{ p: 1, fontSize: 22, fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ p: 1, mb: 1.5 }} color="text.secondary">
          {props.description}
        </Typography>
        <Typography color="text.secondary">{props.mart}</Typography>
        <Typography color="text.secondary">Menge {props.amount}</Typography>
        {props.picture !== undefined ? <></> : props.picture}
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
