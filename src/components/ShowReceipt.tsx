import { Typography } from "@mui/material";
import Article from "../data/Article";
import { updateActualPriceOfOrderInDB } from "../data/DatabaseFunctions";
import Order from "../data/Order";
import User from "../data/User";

interface Props {
  senior: User;
  employee: string;
  empOrdersBySenior: Order[];
}
const ShowReceipt = (props: Props) => {
  const showSum = (senior: User) => {
    let summe = 0;
    props.empOrdersBySenior.map((order: Order) => {
      let subsum = 0;
      order.articleList.map((article: Article) => {
        subsum = subsum + article.price;
      });
      if (order.aktualPrice !== subsum) {
        updateActualPriceOfOrderInDB(order, subsum);
        console.log(order.id);
      }
      summe = summe + subsum;
    });
    return summe;
  };
  return (
    <>
      <Typography
        variant="h3"
        sx={{ p: 1, fontSize: 22, fontWeight: "bold" }}
        color="text.secondary"
        gutterBottom
      >
        {props.senior.seniorId +
          ": " +
          props.senior.firstName +
          " " +
          props.senior.lastName}
      </Typography>
      <Typography>Datum: {new Date().toDateString()}</Typography>
      <Typography sx={{ p: 1, mb: 1.5 }} color="text.secondary">
        Gesammt: {showSum(props.senior)}€
      </Typography>
    </>
  );
};
export default ShowReceipt;
