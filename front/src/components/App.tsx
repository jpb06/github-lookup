import React from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./public/login/Login";
import theme from "../logic/create.theme";
import AppSnackbar from "./generic/snackbar/AppSnackbar";
import LoggedInContainer from "./logged-in/LoggedInContainer";
import Home from "./logged-in/home/Home";
import LoginCallback from "./public/login-callback/LoginCallback";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Route path="/" exact component={Login} />
        <Route path="/logincallback" exact component={LoginCallback} />
        <Route
          path="/home"
          render={(props) => <LoggedInContainer Component={Home} {...props} />}
        />
      </Router>
      <AppSnackbar />
    </MuiThemeProvider>
  );
};

export default App;
