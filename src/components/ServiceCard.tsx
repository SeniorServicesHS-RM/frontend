import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
interface Props {
  title: string;
  description: string;
  picture?: ReactNode;
  route: string;
}

const ServiceCard = (props: Props) => {
  return (
    <Card sx={{ minWidth: 275 }} variant="outlined">
      <CardContent>
        <Typography
          variant="h5"
          sx={{ fontSize: 20, fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ fontSize: 14 }}
        ></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.description}
        </Typography>
        <img src={`${props.picture}`} width={200} alt="Bild" />
        {props.picture !== undefined ? <></> : props.picture}
      </CardContent>
      <CardActions>
        <NavLink to={props.route} style={{ textDecoration: "none" }}>
          <Button
            color={"primary"}
            variant="contained"
            size="small"
            startIcon={<CheckCircleOutlineIcon />}
          >
            Enter
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default ServiceCard;
