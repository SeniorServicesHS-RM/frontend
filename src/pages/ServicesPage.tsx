import { Box, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import ContentCard from "../components/cards/ContentCard";
import FlexBox from "../components/FlexBox";
import ServiceData from "../data/ServiceData";

const ServicesPage = () => {
  return (
    <>
      <FlexBox>
        <Grid container spacing={2}>
          {ServiceData.map((item) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <ContentCard
                  title={item.title}
                  description={item.description}
                  route={item.route}
                  picture={item.picture}
                ></ContentCard>
              </Grid>
            );
          })}
        </Grid>
      </FlexBox>
    </>
  );
};

export default ServicesPage;
