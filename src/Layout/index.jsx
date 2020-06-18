import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Home from "../Views/Home";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Home />
    </Grid>
  );
};

export default Layout;
