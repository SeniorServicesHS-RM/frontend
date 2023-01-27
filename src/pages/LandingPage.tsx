import { Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { UserContext } from "../store/UserContext";
import bg from "../assets/images/einkaufshilfe.jpeg";
const LandingPage = () => {
  const { user, role } = useContext(UserContext);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/login";
    navigate(path);
  };

  return (
    <Grid container xs={12}>
      <Grid
        item
        xs={12}
        sx={{
          p: 3,
          display: "flex",
          justifyContent: "center",
          alignItem: "center",
          mt: 2,
        }}
      >
        {role === 0 ? (
          <Button variant="contained" onClick={routeChange}>
            Zum Login
          </Button>
        ) : (
          <Typography variant="h5" component="h3">
            Guten Tag {user.firstName} {user.lastName}
          </Typography>
        )}
      </Grid>
      <Grid
        item
        xs={12}
        sx={{
          minHeight: "600px",
          backgroundImage: "url(" + `${bg}` + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          mt: 3,
        }}
      >
        {" "}
      </Grid>
    </Grid>
  );
};

export default LandingPage;
