import { createTheme } from "@mui/material";

const theme = createTheme({
  direction: "rtl",
  typography: {
    allVariants: {
      fontFamily: "IranSanseDN",
      textTransform: "none",
    },
    subtitle1: {
      fontSize: "1.1rem",
    },
  },
  palette: {
    neutral: {
      400: "#9CA3AF",
      900: "#111827",
    },
    light: {
      // سفید کم رنگ
      light: "rgba(255, 255, 255, 0.7)",
      main: "rgba(255, 255, 255, 0.9)",
      dark: "#28242D",
      contrastText: "rgba(255, 255, 255, 0.7)",
    },
    dark: {
      light: "rgba(0, 0, 0, 0.6)",
      main: "rgba(0, 0, 0, 0.8)",
      dark: "#28242D",
      contrastText: "#000",
    },
    // p

    // inherit: {
    //   main: "#D39B22",
    // },
    warning: {
      main: "#D39B22",
    },
    teal: {
      // name grouping
      main: "rgba(255, 255, 255, 0.6)",
      // cart name
      light: "rgba(255, 255, 255, 0.5)",
    },
    secondary: {
      main: "#D39B22",
    },
    red: {
      main: "#b71c1c",
    },

    primary: {
      main: "#0B7EC8",
    },
    yellow: {
      main: "#50D300",
    },
    white: {
      main: "rgba(255, 255, 255, 0.7)",
    },
    divider: "rgba(255, 255, 255, 0.03)",
  },
});

export default theme;
