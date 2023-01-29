import { createTheme } from "@mui/material";

const seniorTheme = createTheme({
  palette: {
    primary: {
      main: "#00bcd4",
      dark: "#00838f",
      light: "#e0f7fa",
    },
    secondary: {
      main: "#00e676",
      dark: "#00a152",
      light: "#33eb91",
    },
    background: {
      default: "#ffffff",
    },
    grey: {
      "500": "rgb(99, 115, 129)",
      "200": "rgb(223, 223, 223)",
      "100": "rgb(244, 246, 248)",
    },
    warning: {
      main: "#ffcf33",
    },
    success: {
      "500": "#00a152",
      "200": "#00e676",
      "100": "#33eb91",
    },
    error: {
      "500": "#b2102f",
      "200": "#ff1744",
      "100": "#ff4569",
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
        containedPrimary: {
          backgroundColor: "#00bcd4",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#42d5e5",
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
