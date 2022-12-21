import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import ServicesPage from "./ServicesPage";
import ShoppingPage from "./ShoppingPage";
import LoginPage from "./LoginPage";
import DataBaseTestPage from "./DatabaseTestPage";

const NavigationPage = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dbtest" element={<DataBaseTestPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default NavigationPage;
