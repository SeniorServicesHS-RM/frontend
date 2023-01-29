import { createTheme } from "@mui/material/styles";

const seniorTheme = createTheme({
  typography: {
    h2: {
      color: "#ffffff",
      background: "#ABC1C4",
      textAlign: "center",
    },
  },
  palette: {
    primary: {
      main: "#00bcd4",
      dark: "#00838f",
      light: "#e0f7fa",
    },
    background: {
      default: "#fff7c6",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: "#00bcd4",
          color: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          background: "#00bcd4",
          color: "#ffffff",
          "&:hover": {
            background: "#006c7a",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: "#00bcd4",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#42d5e5",
          },
        },
      },
    },
  },
});
export default seniorTheme;
