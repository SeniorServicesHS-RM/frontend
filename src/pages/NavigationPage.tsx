import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthContext from "../store/AuthContext";
import EmployeePage from "./EmployeePage";
import LandingPage from "./LandingPage";
import LoginPage from "./LoginPage";
import PlanningPage from "./PlanningPage";
import PlanningPageClosedOrders from "./PlanningPageClosedOrders";
import PlanningPageOpenOrders from "./PlanningPageOpenOrders";
import ProfilePage from "./ProfilePage";
import ServicesPage from "./ServicesPage";
import ShoppingPageSelection from "./ShoppingPageSelection";

const NavigationPage = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/shopping"
          element={
            <AuthContext>
              {" "}
              <ShoppingPageSelection />{" "}
            </AuthContext>
          }
        />
        <Route
          path="/services"
          element={
            <AuthContext>
              {" "}
              <ServicesPage />{" "}
            </AuthContext>
          }
        />
        <Route
          path="/planning"
          element={
            <AuthContext>
              {" "}
              <PlanningPage />{" "}
            </AuthContext>
          }
        />
        <Route
          path="/profile"
          element={
            <AuthContext>
              {" "}
              <ProfilePage />{" "}
            </AuthContext>
          }
        />
        <Route
          path="/planning/openorders"
          element={
            <AuthContext>
              {" "}
              <PlanningPageOpenOrders />{" "}
            </AuthContext>
          }
        />
        <Route
          path="/planning/closedorders"
          element={
            <AuthContext>
              {" "}
              <PlanningPageClosedOrders />{" "}
            </AuthContext>
          }
        />
        <Route
          path="/assistant"
          element={
            <AuthContext>
              {" "}
              <EmployeePage />{" "}
            </AuthContext>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default NavigationPage;
