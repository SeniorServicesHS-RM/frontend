import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Article from "../data/Article";
import { updateActualPriceOfOrderInDB } from "../data/DatabaseFunctions";
import Order from "../data/Order";
import User from "../data/User";

interface Props {
  senior: User;
  employee: string;
  empOrdersBySenior: Order[];
}
const ReceiptCard = (props: Props) => {
  const showSum = (senior: User) => {
    let summe = 0;
    props.empOrdersBySenior.forEach((order: Order) => {
      let subsum = 0;
      order.articleList.forEach((article: Article) => {
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
    <Card>
      <CardContent>
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
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pb: 1,
            mb: 2,
          }}
        >
          Datum:{" "}
          <span style={{ color: "primary", fontWeight: 700 }}>
            {new Date().toDateString()}
          </span>
        </Typography>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "space-between",
            pb: 1,
            mb: 2,
          }}
          color="text.secondary"
        >
          Gesamt:{" "}
          <span style={{ color: "primary", fontWeight: 700 }}>
            {showSum(props.senior)} €
          </span>
        </Typography>
      </CardContent>
    </Card>
  );
};
export default ReceiptCard;
