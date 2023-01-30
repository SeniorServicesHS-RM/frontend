import { Button, Grid } from "@mui/material";
import FlexBox from "../components/FlexBox";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
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
      <FlexBox>
        {role === 0 ? (
          <Button variant="contained" onClick={routeChange}>
            Zum Login
          </Button>
        ) : (
          <Typography variant="h5" component="h3">
            Guten Tag {getFullName()}
          </Typography>
        )}
      </FlexBox>
    </Paper>
  );
};

export default LandingPage;
