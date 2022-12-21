import React, { ReactNode, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import EditArticleDialog from "../components/EditArticleDialog";
import Article from "../data/Article";
import Typography from "@mui/material/Typography";
import ShoppingPage from "../pages/ShoppingPage";
import Order from "../data/Order";

interface Props {
  // singleOrder: Order;
  // isEditOpen: boolean;
  // setEditOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description?: string;
  amount: number;
  picture?: ReactNode;
  route: string;
}

const ArticleCard = (props: Props) => {
  // const editHandler = () => {
  //   props.setEditOpen(true);
  //   console.log(props.singleOrder);
  // };
  return (
    <Card sx={{ minWidth: 275 }}>
      {/* <CardActionArea onClick={editHandler}>
        {props.isEditOpen ? (
          <EditArticleDialog
            order={props.singleOrder}
            //editCloseHandler={editCloseHandler}
          ></EditArticleDialog>
        ) : (
          <></>
        )} */}
      <CardContent>
        <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.description}
        </Typography>
        <Typography color="text.secondary">Menge {props.amount}</Typography>
        {props.picture !== undefined ? <></> : props.picture}
      </CardContent>
      {/* </CardActionArea> */}
    </Card>
  );
};

export default ArticleCard;