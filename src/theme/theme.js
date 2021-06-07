import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      contrastText: "#000",
      dark: "#b68900",
      light: "#ffea59",
      main: "#edb820",
    },
    secondary: {
      contrastText: "#fff",
      dark: "#000000",
      light: "#484848",
      main: "#212121",
    },
    tertiary: {
      contrastText: "#000",
      dark: "#b44600",
      light: "#ffa551",
      main: "#ed7520",
    },
  },
});
