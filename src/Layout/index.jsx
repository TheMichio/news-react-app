import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import AppNav from "../Components/AppNav";
import { Grid } from "@material-ui/core";
import Home from "../Views/Home";
import NewsList from "../Views/NewsList";
import { Switch, Route } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      {/* <AppNav /> */}
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/list" component={NewsList} />
      </Switch>
    </Grid>
  );
};

export default Layout;
