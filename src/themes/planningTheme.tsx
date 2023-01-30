import { createTheme } from "@mui/material/styles";

const planningTheme = createTheme({
  palette: {
    primary: {
      main: "#72D58E",
      dark: "#0D3017",
      light: "#C0EDCC",
    },
  },
  typography: {
    h3: {
      fontWeight: "bold",
      color: "white",
      fontfamily: "GrandView",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: "#72D58E",
          color: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: "#72D58E",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#C0EDCC",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: "#72D58E",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#C0EDCC",
          },
        },
      },
    },
  },
});

export default planningTheme;
