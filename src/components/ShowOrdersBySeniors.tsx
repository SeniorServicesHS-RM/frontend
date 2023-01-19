import { Grid, TextField, Typography } from "@mui/material";
import Article from "../data/Article";
import Order from "../data/Order";
import FlexBox from "./FlexBox";
import ShowArticles from "./ShowArticles";

interface Props {
  senior: string;
  orderList: Order[];
}

const ShowOrdersBySeniors = (props: Props) => {
  const getUserOrdersByEmp = () => {
    return props.orderList
      ? props.orderList.filter((order) => {
          return order.seniorId === props.senior;
        })
      : [];
  };
  const getAllArticles = () => {
    const newList = [] as Article[];
    userOrders.map((order) => {
      return [...newList, ...order.articleList];
    });
    return newList;
  };
  const userOrders = getUserOrdersByEmp();
  return (
    <>
      <Typography
        variant="h3"
        sx={{ p: 1, fontSize: 22, fontWeight: "bold" }}
        color="text.secondary"
        gutterBottom
      >
        {props.senior}
      </Typography>
      <ShowArticles articles={getAllArticles()}></ShowArticles>
    </>
  );
};

export default ShowOrdersBySeniors;
