import { BrowserRouter } from "react-router-dom";
import { blue, indigo, green, deepOrange, grey } from "@mui/material/colors";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import MainPage from "./pages/MainPage";
import { DataBaseProvider } from "./store/DataBaseContext";

import seniorTheme from "./theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={seniorTheme}>
        <DataBaseProvider>
          <BrowserRouter>
            <MainPage></MainPage>
          </BrowserRouter>
        </DataBaseProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
