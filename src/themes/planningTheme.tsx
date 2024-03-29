import { createTheme } from "@mui/material/styles";

const planningTheme = createTheme({
  palette: {
    primary: {
      main: "#72D58E",
      dark: "#D3D3D3",
      light: "#C0EDCC",
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
