import { createTheme } from "@mui/material";

const seniorTheme = createTheme({
  palette: {
    primary: {
      main: "#3392FF",
      dark: "#D3D3D3",
      light: "#ADD3FF",
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
          backgroundColor: "#3392FF",
          color: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: "#3392FF",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#ADD3FF",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: "#3392FF",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#ADD3FF",
          },
        },
      },
    },
  },
});

export default seniorTheme;
