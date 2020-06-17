import React from "react";
import ReactDOM from "react-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
// import App from "./App";
import Layout from "./Layout";
import theme from "./theme";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import Store from "./Store";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <Router>
      <Provider store={Store}>
        <CssBaseline />
        <Layout />
      </Provider>
    </Router>
    {/* <App /> */}
  </ThemeProvider>,
  document.querySelector("#root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
