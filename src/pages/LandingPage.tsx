import { Button, Grid } from "@mui/material";
import FlexBox from "../components/FlexBox";
import { useNavigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

const LandingPage = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/login";
    navigate(path);
  };

  return (
    <Paper component={Stack} direction="column" justifyContent="center">
      <FlexBox>
        <Typography variant="h5" component="h3">
          H.G. Buddne
        </Typography> 
      </FlexBox>
      <FlexBox>
        <p>Hier können Sie sich einloggen UwU:</p>
      </FlexBox>
      <FlexBox>
        <Button variant="contained" onClick={routeChange}>
            Login
        </Button>
      </FlexBox>
    </Paper>


  );
};

export default LandingPage;
