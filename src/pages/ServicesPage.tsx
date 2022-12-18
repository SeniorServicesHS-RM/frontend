import { Box, Grid } from "@mui/material";
import React from "react";
import ContentCard from "../components/ContentCard";
import FlexBox from "../components/FlexBox";
import ServiceData from "../data/ServiceData";

const ServicesPage = () => {
  return (
    <>
      <FlexBox>
        <Grid container spacing={2}>
          {ServiceData.map((item) => {
            return (
              <Grid item xs={2}>
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
