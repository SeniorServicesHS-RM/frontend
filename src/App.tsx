import { BrowserRouter } from "react-router-dom";
import { blue, indigo, green, deepOrange, grey } from "@mui/material/colors";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import MainPage from "./pages/MainPage";
import { DataBaseProvider } from "./store/DataBaseContext";
import seniorTheme from "./theme";
import plannerTheme from "./theme";
import ekhTheme from "./theme";
import AuthContext from "./store/AuthContext";
import { UserProvider } from "./store/UserContext";

function App() {
  return (
    <div>
      <UserProvider>
        <ThemeProvider theme={ekhTheme}>
          <DataBaseProvider>
            <BrowserRouter>
              <MainPage></MainPage>
            </BrowserRouter>
          </DataBaseProvider>
        </ThemeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
//<ThemeProvider theme={plannerTheme}>
//      <ThemeProvider theme={ekhTheme}>
