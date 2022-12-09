import { Box, Grid } from "@mui/material";
import React from "react";
import ContentCard from "../components/ContentCard";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ServicesPage = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} marginLeft="5rem" marginTop="1rem">
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
      </Box>
    </>
  );
};

export default ServicesPage;
