import React, { ReactNode, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { Grid, CardMedia } from "@mui/material";
import logosArr from "../data/LogosArr";
interface Props {
  title: string;
  description?: string;
  amount: number;
  mart: String;
  picture?: ReactNode;
  route: string;
}

const ArticleCard = (props: Props) => {
  return (
    <Card
      variant="outlined"
      sx={{ maxHeight: 200, height: 200, backgroundColor: "primary.light" }}
    >
      <CardContent>
        <Typography
          variant="h3"
          sx={{ p: 1, fontSize: 22, fontWeight: "bold" }}
          color="text.secondary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography variant="h5" component="div"></Typography>
        <Typography sx={{ p: 1, mb: 1.5 }} color="text.secondary">
          {props.description}
        </Typography>
        <Grid
          display={"flex"}
          alignItems={"center"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          {logosArr.map((item) => {
            if (props.mart === item.name)
              return (
                <Grid>
                  <CardMedia component={"img"} image={item.url} height={50} />
                </Grid>
              );
            <Typography
              color="white"
              borderRadius={1.5}
              bgcolor={"primary.main"}
              width="6rem"
              textAlign={"center"}
              p={1}
              m={1}
            >
              {props.mart}
            </Typography>;
          })}

          <Typography
            color="primary.light"
            borderRadius={1.5}
            bgcolor={"primary.main"}
            p={1}
            m={1}
            width="6rem"
            textAlign={"center"}
          >
            Menge {props.amount}
          </Typography>
        </Grid>
        {props.picture !== undefined ? <></> : props.picture}
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
