import { createTheme } from "@mui/material/styles";

const seniorTheme = createTheme({
  palette: {
    primary: {
      main: "#00bcd4",
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
