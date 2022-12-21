import { Button } from "@mui/material";
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
      <p>Hier können Sie sich einloggen UwU:</p>
      <Button variant="contained" onClick={routeChange}>
        Login
      </Button>
    </FlexBox>
  );
};

export default LandingPage;
