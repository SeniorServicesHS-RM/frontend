import { Button } from "@mui/material";
import React, { useContext } from "react";
import { DataBaseContext } from "../store/DataBaseContext";

const LandingPage = () => {
  const { article, changeArticle } = useContext(DataBaseContext);

  return (
    <>
      <p>{article}</p>
      <Button onClick={changeArticle}> Random Button</Button>
    </>
  );
};

export default LandingPage;
