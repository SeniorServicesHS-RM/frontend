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
import { deleteOrder } from "../data/DatabaseFunctions";
import Order from "../data/Order";
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
              lg={2}
              md={2}
              sm={6}
              xs={6}
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
                {order.id}
              </Typography>
            </Grid>
            <Grid item lg={2} md={2} sm={6} xs={6}>
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
              lg={3}
              md={3}
              sm={6}
              xs={6}
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
            <Grid item lg={2} md={2} sm={6} xs={6}>
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
            <Grid
              item
              lg={3}
              md={3}
              sm={12}
              xs={12}
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
        <ShowArticles articles={order.articleList} order={order}></ShowArticles>
      ) : (
        <></>
      )}
    </>
  );
};
export default OrderCard;
