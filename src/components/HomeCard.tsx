import { Card, CardActionArea, Typography } from "@mui/material";
import { ReactNode } from "react";

import { useNavigate } from "react-router-dom";
interface ParentCompProps {
  childComp?: React.ReactNode;
}

interface Props {
  title: string;
  icon?: ReactNode;
  route: string;
}
const HomeCard = (props: Props) => {
  let navigate = useNavigate();
  const routeChange = (path: string) => {
    navigate(path);
  };
  return (
    <Card variant="outlined" sx={{ margin: 2 }}>
      <CardActionArea
        onClick={() => {
          routeChange(props.route);
        }}
      >
        <Card
          variant="outlined"
          sx={{
            padding: 5,
            fontSize: 22,
            margin: 3,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "primary.light",
            minWidth: 150,
          }}
        >
          {props.icon}
          <Typography fontSize={22} p={3} fontWeight={"bold"} color="primary">
            {props.title}
          </Typography>
        </Card>
      </CardActionArea>
    </Card>
  );
};

export default HomeCard;
