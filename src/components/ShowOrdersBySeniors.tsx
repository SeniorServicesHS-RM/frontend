import { Grid } from "@mui/material";
import Article from "../data/Article";
import Order from "../data/Order";
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
      [...newList, ...order.articleList];
    });
    return newList;
  };
  const userOrders = getUserOrdersByEmp();
  return <ShowArticles articles={getAllArticles()}></ShowArticles>;
};

export default ShowOrdersBySeniors;
