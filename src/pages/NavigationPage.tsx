import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import ServicesPage from "./ServicesPage";
import SignIn from "./SignIn";
import DataBaseTestPage from "./DatabaseTestPage";
import PlanningPage from "./PlanningPage";
import LoginPage from "./LoginPage";
import ShoppingPageSelection from "./ShoppingPageSelection";
import EkhPage from "./EkhPage";

const NavigationPage = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shopping" element={<ShoppingPageSelection />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/ekh" element={<EkhPage />} />
        <Route path="/dbtest" element={<DataBaseTestPage />} />
        <Route path="/planning" element={<PlanningPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default NavigationPage;
