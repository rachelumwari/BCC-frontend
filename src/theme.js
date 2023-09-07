import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#8b2923",
    },
    tertiary: {
      main: "#010869",
    },
    fentColor: {
      main: "#667085",
    },
  },
  typography: {
    fontFamily: "Open Sans,sans-serif",
    sideBarVariant: {
      font: "16px Inter,sans-serif;",
      color: "#000000DE",
      fontSize: "1rem",
      fontWeight: 500,
    },
  },
});


export default theme