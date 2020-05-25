import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    background: { paper: "darkslategray" },
    primary: {
      main: "#49a39f",
    },
    secondary: {
      main: "#0d3c59",
    },
  },
});

export default theme;
