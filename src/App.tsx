import { BrowserRouter } from "react-router-dom";
import React from "react";
import MainPage from "./pages/MainPage";
import { DataBaseProvider } from "./store/DataBaseContext";
import { ThemeProvider } from "@mui/material/styles";
import AuthContext from "./store/AuthContext";
import { UserProvider } from "./store/UserContext";
import plannerTheme from "./themes/planningTheme";

function App() {
  return (
    <div>
      <UserProvider>
        <DataBaseProvider>
          <BrowserRouter>
            <MainPage></MainPage>
          </BrowserRouter>
        </DataBaseProvider>
      </UserProvider>
    </div>
  );
}

export default App;
