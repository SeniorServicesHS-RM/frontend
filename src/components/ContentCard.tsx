import React, { ReactNode } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  description: string;
  picture?: ReactNode;
  route: string;
}

const ContentCard = (props: Props) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.description}
        </Typography>
        {props.picture !== undefined ? <></> : props.picture}
      </CardContent>
      <CardActions>
        <NavLink to={props.route}>
          <Button size="small">Enter</Button>
        </NavLink>
      </CardActions>
    </Card>
  );
};

export default ContentCard;
