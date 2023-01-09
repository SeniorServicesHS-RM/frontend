import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";

import { createTheme } from "@mui/system";
import React, { useEffect } from "react";

import MainPage from "./pages/MainPage";
import { DataBaseProvider } from "./store/DataBaseContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "salmon",
    },
  },
});

function App() {
  return (
    <div>
      <DataBaseProvider>
        <BrowserRouter>
          <MainPage></MainPage>
        </BrowserRouter>
      </DataBaseProvider>
    </div>
  );
}

export default App;
