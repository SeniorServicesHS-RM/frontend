import { Button, Grid } from "@mui/material";
import React, { useContext } from "react";
import FlexBox from "../components/FlexBox";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/login";
    navigate(path);
  };

  return (
    <FlexBox>
      <Grid display={"flex"} flexDirection={"column"}>
        <p>Hier können Sie sich einloggen :</p>
        <Button variant="contained" onClick={routeChange}>
          Einloggen
        </Button>
      </Grid>
    </FlexBox>
  );
};

export default LandingPage;
