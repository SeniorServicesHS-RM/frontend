import { createTheme } from "@mui/material/styles";
const ekhTheme = createTheme({
  palette: {
    primary: {
      main: "#DE5454",
      dark: "#00838f",
      light: "#EFA9A9",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: "#DE5454",
          color: "#ffffff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: "#DE5454",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#EFA9A9",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        colorDefault: {
          backgroundColor: "#DE5454",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#EFA9A9",
          },
        },
      },
    },
  },
});

export default ekhTheme;
