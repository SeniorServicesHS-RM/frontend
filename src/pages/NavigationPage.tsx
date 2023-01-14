import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import ServicesPage from "./ServicesPage";
import ShoppingPage from "./ShoppingPage";
import SignIn from "./SignIn";
import DataBaseTestPage from "./DatabaseTestPage";
import PlanningPage from "./PlanningPage";
import LoginPage from "./LoginPage";
const NavigationPage = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dbtest" element={<DataBaseTestPage />} />
        <Route path="/planning" element={<PlanningPage />} />
      </Routes>
    </React.Fragment>
  );
};

export default NavigationPage;
