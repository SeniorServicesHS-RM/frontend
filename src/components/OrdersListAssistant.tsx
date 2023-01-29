import {
  List,
  Grid,
  FormControlLabel,
  Checkbox,
  TextField,
} from "@mui/material";
import { ChangeEvent, useReducer, useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import logosArr from "../data/LogosArr";
import Article from "../data/Article";
import {
  updateArticleDoneInDB,
  updateArticlePriceInDB,
} from "../data/DatabaseFunctions";
interface Props {
  article: Article;
}
export default function OrdersListAssistant(props: Props) {
  const [valuePrice, setValuePrice] = useState<number>(props.article.price);
  const [valueDone, setValueDone] = useState<boolean>(props.article.done);
  props.article.price = valuePrice;
  props.article.done = valueDone;

  const hanldeValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValuePrice(event.target.valueAsNumber);
    props.article.price = event.target.valueAsNumber;
    updateArticlePriceInDB(props.article);
  };
  const handleDoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueDone(!valueDone);
    props.article.done = Boolean(event.target.checked);
    updateArticleDoneInDB(props.article);
  };
  return (
    <List sx={{ width: "100%" }}>
      <ListItem
        sx={{
          display: "flex",
          flexDirection: "row",
          borderRadius: 3,
          bgcolor: "primary.light",
          borderRight: valueDone ? "5px solid green" : "5px solid gray",
        }}
      >
        <ListItemAvatar>
          {logosArr.some((ele) => {
            if (props.article.mart === ele.name) return ele.name;
          }) ? (
            logosArr.map((item) => {
              if (item.name === props.article.mart) {
                return (
                  <Avatar
                    alt={item.name}
                    src={item.url}
                    sx={{
                      width: 50,
                      height: 50,
                      mr: 2,
                      borderRadius: "5px",
                    }}
                  />
                );
              }
            })
          ) : (
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
          )}
        </ListItemAvatar>

        <Grid item xs={6}>
          <Typography
            sx={{ textAlign: "left", width: "100%", fontWeight: "bold" }}
            component="p"
            color="text.primary"
          >
            {props.article.name}
          </Typography>
          <Typography
            sx={{
              textAlign: "left",
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
            }}
            component="p"
            color="text.primary"
          >
            {props.article.note}
          </Typography>
        </Grid>

        <Grid item sx={{ display: "flex" }} xs={4}>
          <Typography
            sx={{
              p: 2,
              bgcolor: "primary.light",
            }}
            component="span"
            color="primary.dark"
          >
            Menge
          </Typography>
          <Typography
            sx={{
              p: 2,
              borderRadius: "5px",
              fontWeight: "bold",
            }}
            component="span"
            color="primary.dark"
          >
            {props.article.amount}
          </Typography>
        </Grid>
        <Grid xs={5}>
          <TextField
            label="Artikel eingekauft"
            type="number"
            inputProps={{ step: 0.01 }}
            value={props.article.price}
            onChange={hanldeValueChange}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.article.done}
                onChange={handleDoneChange}
                name="eingekauft?"
              />
            }
            label="eingekauft?"
          />
        </Grid>
      </ListItem>
    </List>
  );
}
