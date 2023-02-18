import { Box, Button, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import landingImg from "../assets/images/sharing-plate.jpeg";
import { UserContext } from "../store/UserContext";
import { CustomThemeContext } from "../themes/themeContext";

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
          <Typography variant="h5" component="h3" color={"white"}>
            Guten Tag {getFullName()}
          </Typography>
        )}
      </Box>
    </Paper>
  );
};

export default LandingPage;
