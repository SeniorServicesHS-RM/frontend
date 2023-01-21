import { Grid } from "@mui/material";
import FlexBox from "../components/FlexBox";
import TimeAndDate from "../components/TimeAndDate";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AccessibleIcon from "@mui/icons-material/Accessible";
import HomeCard from "../components/HomeCard";

const homeCardArr = [
  {
    title: "Shopping",
    route: "/shopping",
    icon: <AddShoppingCartIcon fontSize="large" color="primary" />,
  },

  {
    title: "Services",
    route: "/services",
    icon: <AccessibleIcon fontSize="large" color="primary" />,
  },
];

const LandingPage = () => {
  return (
    <FlexBox>
      <Grid container>
        <Grid container md={10} sm={8} xs={12}>
          <Grid container xs={12}>
            {homeCardArr.map((item) => {
              return (
                <HomeCard
                  title={item.title}
                  icon={item.icon}
                  route={item.route}
                />
              );
            })}
          </Grid>
        </Grid>
        <Grid item md={2} sm={4} xs={12}>
          <TimeAndDate />
        </Grid>
      </Grid>
    </FlexBox>
  );
};

export default LandingPage;
