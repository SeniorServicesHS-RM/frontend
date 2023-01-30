import { Button, Box } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { UserContext } from "../store/UserContext";
import { CustomThemeContext } from "../themes/themeContext";
import landingImg from "../assets/images/sharing-plate.jpeg";

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
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
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
          <Typography variant="h5" component="h3">
            Guten Tag {getFullName()}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default LandingPage;
