import { Button, Box, Paper } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { UserContext } from "../store/UserContext";
import { CustomThemeContext } from "../themes/themeContext";
import landingImg from "../assets/images/sharing-plate.jpeg";
import { Stack } from "@mui/system";
import Grid from "@mui/material/Grid";

const LandingPage = () => {
  const { user, role } = useContext(UserContext);
  const { setTheme } = useContext(CustomThemeContext);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/login";
    navigate(path);
  };
  const switchTheme = () => {
    switch (user.role) {
      case 1:
        return setTheme("planningTheme");
      case 2:
        return setTheme("ekhTheme");
      case 3:
        return setTheme("seniorTheme");
      default:
        return setTheme("");
    }
  };
  const getFullName = () => {
    switchTheme();
    return user.firstName + " " + user.lastName;
  };
  return (
    <Paper component={Stack} direction="column" justifyContent="center">
      <Box
        style={{
          backgroundImage: `url(${landingImg})`,
          opacity: "0.9",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100vw",
          minHeight: "100vh",
        }}
      >
        <Grid item xs={2}>
          <Grid item xs={2} display="flex" justifyContent="center">
            <Typography align="center" variant="h3" component="h1">
              WELCOME TO OUR SMARTSERVICES VISION
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {role === 0 ? (
              <Button
                style={{ padding: "30px" }}
                variant="contained"
                onClick={routeChange}
              >
                Zum Login
              </Button>
            ) : (
              <Typography
                align="center"
                variant="h5"
                component="h3"
                color={"white"}
              >
                Guten Tag {getFullName()}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default LandingPage;
