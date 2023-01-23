import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./LandingPage";
import ServicesPage from "./ServicesPage";
import PlanningPage from "./PlanningPage";
import LoginPage from "./LoginPage";
import ShoppingPageSelection from "./ShoppingPageSelection";
import AssistantPage from "./AssistantPage";
import ProfilePage from "./ProfilePage";
import AuthContext from "../store/AuthContext";
<Route path="/assistant" element={<AssistantPage />} />;

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
          path="/assistant"
          element={
            <AuthContext>
              {" "}
              <AssistantPage />{" "}
            </AuthContext>
          }
        />
      </Routes>
    </React.Fragment>
  );
};

export default NavigationPage;
