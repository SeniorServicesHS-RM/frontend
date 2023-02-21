import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { deleteOrder, updateOrderDoneInDB } from "../data/DatabaseFunctions";
import Order from "../data/Order";
import FlexBox from "./FlexBox";
import ShowArticles from "./ShowArticles";

interface Props {
  order: Order;
}

const OrderCard = (props: Props) => {
  const [showArticles, setShowArticles] = useState(false);
  const order = props.order;
  const showArticlesHandler = () => {
    setShowArticles(!showArticles);
  };
  const checkDone = () => {
    let done = true;
    props.order.articleList.some((article) => {
      if (article.done === false) {
        done = false;
        return;
      }
    });
    console.log(done);
    console.log(props.order.orderDone);
    if (done !== props.order.orderDone) {
      updateOrderDoneInDB(props.order, done);
    }
  };
  checkDone();
  return (
    <>
      <Card
        variant="outlined"
        sx={{ backgroundColor: "primary.light", marginBottom: 1 }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          <Grid
            container
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              textAlign: "center",
            }}
          >
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h3"
                sx={{ p: 1, fontSize: 18, fontWeight: "bold" }}
                color="text.secondary"
                gutterBottom
              >
                Bestellnummer: {order.id}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                sx={{ p: 1.5, m: 1.5, fontSize: 18, fontWeight: "bold" }}
                color="text.secondary"
              >
                Anzahl
                <br />
                <Paper sx={{ padding: 1.5 }}>{order.articleList.length}</Paper>
              </Typography>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                justifyItems: "center",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  p: 1,
                  mb: 1.5,
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
                color="text.secondary"
              >
                Zusatzleistungen
                <br />
                {order.additionalServices.map((item) => {
                  return item ? (
                    <Paper sx={{ padding: 1.5, margin: 1 }}>{item}</Paper>
                  ) : (
                    "keine"
                  );
                })}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography
                sx={{
                  p: 1,
                  mb: 1.5,
                  textAlign: "center",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
                color="text.secondary"
              >
                Erledigt
                {order.orderDone ? (
                  <Typography
                    color="white"
                    borderRadius={1.5}
                    bgcolor={"success.main"}
                    textAlign={"center"}
                    p={1.5}
                    m={1.5}
                  >
                    JA
                  </Typography>
                ) : (
                  <Typography
                    color="white"
                    borderRadius={1.5}
                    bgcolor={"error.main"}
                    textAlign={"center"}
                    p={1.5}
                    m={1.5}
                  >
                    NEIN
                  </Typography>
                )}
              </Typography>
            </Grid>
            {order.orderDone ? (
              <Grid item lg={2} md={2} sm={2} xs={2}>
                <Typography
                  sx={{
                    p: 1,
                    mb: 1.5,
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "bold",
                  }}
                  color="text.secondary"
                >
                  Summe:
                  <Paper sx={{ padding: 1.5, margin: 1 }}>
                    {order.aktualPrice} €
                  </Paper>
                </Typography>
              </Grid>
            ) : (
              <></>
            )}
            <Grid
              item
              xs={2}
              sx={{
                display: "flex",
                alignContent: "center",
              }}
            >
              <CardActionArea sx={{ textAlign: "end" }}>
                <Button
                  onClick={showArticlesHandler}
                  sx={{ bgcolor: "primary.main", color: "#ffffff", margin: 1 }}
                >
                  {showArticles ? "Weniger Anzeigen" : "Mehr Anzeigen"}
                </Button>
                <Button
                  onClick={() => deleteOrder(order)}
                  sx={{ bgcolor: "error.main", color: "#ffffff" }}
                >
                  Loeschen
                </Button>
              </CardActionArea>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {showArticles ? (
        <FlexBox>
          <Grid container spacing={{ xs: 2 }}>
            <ShowArticles articles={order.articleList} order={order} />
          </Grid>
        </FlexBox>
      ) : (
        <></>
      )}
    </>
  );
};
export default OrderCard;
