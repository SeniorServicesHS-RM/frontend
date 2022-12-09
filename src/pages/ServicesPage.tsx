import { Box, Grid } from "@mui/material";
import React from "react";
import ContentCard from "../components/ContentCard";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FlexBox from "../components/FlexBox";

const ServicesPage = () => {
  return (
    <>
      <FlexBox>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <ContentCard
              title={"Shopping"}
              description={"Toller Shopping Kram fuer alte Saecke"}
              route={"/shopping"}
              picture={<AddShoppingCartIcon />}
            ></ContentCard>
          </Grid>
          <Grid item xs={2}>
            <p>poopoo</p>
          </Grid>
          <Grid item xs={2}>
            <p>poopoo</p>
          </Grid>
          <Grid item xs={2}>
            <p>poopoo</p>

            <p>poopoo</p>

            <p>poopoo</p>

            <p>poopoo</p>

            <p>poopoo</p>
          </Grid>
        </Grid>
      </FlexBox>
    </>
  );
};

export default ServicesPage;
