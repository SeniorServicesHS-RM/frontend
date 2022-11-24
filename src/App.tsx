import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";

import { createTheme } from "@mui/system";
import React from "react";

import MainPage from "./pages/MainPage";

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
      <BrowserRouter>
        <MainPage></MainPage>
      </BrowserRouter>
    </div>
  );
}

export default App;
