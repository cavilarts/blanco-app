import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      black: "rgba(11, 12, 16, 1)",
      white: "#fff",
    },
    background: {
      paper: "rgba(243, 244, 247, 1)",
      default: "rgba(255, 255, 255, 1)",
    },
    primary: {
      light: "rgba(74, 81, 109, 1)",
      main: "rgba(11, 12, 16, 1)",
      dark: "rgba(32, 40, 51, 1)",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(255, 235, 236, 1)",
      main: "rgba(255, 71, 84, 1)",
      dark: "rgba(255, 133, 141, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "rgba(255, 133, 141, 1)",
      main: "rgba(255, 71, 84, 1)",
      dark: "rgba(255, 71, 84, 1)",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(11, 12, 16, 1)",
      secondary: "rgba(32, 40, 51, 1)",
      disabled: "rgba(197, 198, 200, 1)",
      hint: "rgba(102, 252, 241, 1)",
    },
  },
  typography: {
    fontFamily: ["Tenor Sans", "Hind", "Dancing Script", "ui-sans-serif", "-apple-system"].join(
      ","
    ),
    h1: {
      fontFamily: "Hind",
      fontWeight: 500,
    },
  },
});

export default responsiveFontSizes(theme);
