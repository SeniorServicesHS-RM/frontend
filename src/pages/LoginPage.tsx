import React from "react";
import Login from "../components/Login";
import ContentCard from "../components/ContentCard";
import FlexBox from "../components/FlexBox";

const LoginPage = () => {
  return (
    <React.Fragment>
      <FlexBox>
        <Login />
      </FlexBox>
    </React.Fragment>
  );};

export default LoginPage;