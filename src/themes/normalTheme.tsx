import { createTheme } from "@mui/material/styles";

const normalTheme = createTheme({
  palette: {
    primary: {
      main: "#3392FF",
      dark: "#00838f",
      light: "#ADD3FF",
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

export default normalTheme;
