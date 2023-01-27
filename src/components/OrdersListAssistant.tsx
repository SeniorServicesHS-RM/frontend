import { List, Grid } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import logosArr from "../data/LogosArr";
interface Props {
  title: string;
  description?: string;
  amount: number;
  mart: String;
}
export default function OrdersListAssistant(props: Props) {
  return (
    <List sx={{ width: "100%", bgcolor: "primay.light" }}>
      <ListItem
        sx={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <ListItemAvatar>
          {logosArr.some((ele) => {
            if (props.mart === ele.name) return ele.name;
          }) ? (
            logosArr.map((item) => {
              if (item.name === props.mart) {
                return (
                  <Avatar
                    alt={item.name}
                    src={item.url}
                    sx={{ width: 50, height: 50, mr: 2, borderRadius: "0" }}
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
              {props.mart}
            </Typography>
          )}
        </ListItemAvatar>
        <Grid xs={12}>
          <Typography
            sx={{ textAlign: "left", width: "100%", fontWeight: "bold" }}
            component="p"
            color="text.primary"
          >
            {props.title}
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
            {props.description}
          </Typography>
        </Grid>
        <Grid sx={{ display: "flex" }}>
          <Typography
            sx={{ p: 2 }}
            component="span"
            color="primary.dark"
            bgcolor={"primary.light"}
          >
            Menge
          </Typography>
          <Typography
            sx={{ p: 2, fontWeight: "bold" }}
            component="span"
            color="primary.dark"
            bgcolor={"primary.light"}
          >
            {props.amount}
          </Typography>
        </Grid>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
