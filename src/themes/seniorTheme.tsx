import { createTheme } from "@mui/material/styles";

const seniorTheme = createTheme({
  palette: {
    primary: {
      main: "#3392FF",
      dark: "#00838f",
      light: "#ADD3FF",
    },
    error: {
      main: "#ef5350",
    },
    success: {
      main: "#69f0ae",
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
