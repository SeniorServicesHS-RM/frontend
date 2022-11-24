import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import ShoppingPage from "./ShoppingPage";

const NavigationPage = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default NavigationPage;
