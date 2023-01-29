import { createTheme } from "@mui/material/styles";

const seniorTheme = createTheme({
  palette: {
    primary: {
      main: "#3392FF",
      dark: "#00838f",
      light: "#ADD3FF",
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
const plannerTheme = createTheme({
  palette: {
    primary: {
      main: "#72D58E",
      dark: "#0D3017",
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
export default ekhTheme;
