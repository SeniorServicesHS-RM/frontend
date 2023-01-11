import { BrowserRouter } from "react-router-dom";
import { blue, indigo, green, deepOrange, grey } from "@mui/material/colors";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainPage from "./pages/MainPage";
import { DataBaseProvider } from "./store/DataBaseContext";

const theme = createTheme({
  palette: {
    primary: {
      dark: blue[900],
      main: blue[500],
      light: blue[100],
      contrastText: "#fff",
    },
    secondary: {
      dark: indigo[900],
      main: indigo[500],
      light: indigo[100],
      contrastText: "#fff",
    },
    success: {
      dark: green["A700"],
      main: green["A400"],
      light: green["A100"],
      contrastText: "#fff",
    },
    error: {
      dark: deepOrange["A700"],
      main: deepOrange["A400"],
      light: deepOrange["A100"],
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
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
