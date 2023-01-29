import { Button, Box } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { UserContext } from "../store/UserContext";
import landingImg from "../assets/images/sharing-plate.jpeg";
import { ThemeProvider } from "@mui/material/styles";
import seniorTheme from "../theme";

const LandingPage = () => {
  const { user, role } = useContext(UserContext);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/login";
    navigate(path);
  };

  return (
    <ThemeProvider theme={seniorTheme}>
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
          <Typography variant="h2" component="h3">
            Guten Tag {user.firstName} {user.lastName}
          </Typography>
        )}
      </Box>
    </ThemeProvider>
  );
};

export default LandingPage;
