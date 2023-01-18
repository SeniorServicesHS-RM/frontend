import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import ServicesPage from "./ServicesPage";
import PlanningPage from "./PlanningPage";
import LoginPage from "./LoginPage";
import ShoppingPageSelection from "./ShoppingPageSelection";
import AuthContext from '../store/AuthContext';

const NavigationPage = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shopping" element={<AuthContext> <ShoppingPageSelection /> </AuthContext>} />
        <Route path="/services" element={<AuthContext> <ServicesPage /> </AuthContext>} />
        <Route path="/planning" element={<AuthContext> <PlanningPage /> </AuthContext>} />
      </Routes>
    </React.Fragment>
  );
};

export default NavigationPage;
