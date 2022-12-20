import { Button } from "@mui/material";
import React, { useContext } from "react";
import { DataBaseContext } from "../store/DataBaseContext";
import FlexBox from "../components/FlexBox";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const { article, changeArticle } = useContext(DataBaseContext);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/login";
    navigate(path);
  };
  return (
    <FlexBox>
      {article &&
        article.map((art) => {
          return (
            <p>
              {art.id} und {art.title}
            </p>
          );
        })}
      <Button onClick={changeArticle}> Random Button</Button>
      <p>Hier können Sie sich einloggen UwU:</p>
      <Button variant="contained" onClick={routeChange}>
        Login
      </Button>
    </FlexBox>
  );
};

export default LandingPage;
