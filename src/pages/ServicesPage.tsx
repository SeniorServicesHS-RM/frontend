import { Grid } from "@mui/material";
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
