import { Button, Grid } from "@mui/material";
import FlexBox from "../components/FlexBox";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { UserContext } from "../store/UserContext";

const LandingPage = () => {
  const { user, role } = useContext(UserContext);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/login";
    navigate(path);
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
            Guten Tag {user.firstName} {user.lastName}
          </Typography>
        )}
      </FlexBox>
    </Paper>
  );
};

export default LandingPage;
