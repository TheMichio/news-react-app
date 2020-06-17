import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppNav from "../Components/AppNav";
import HeroSection from "../Components/HeroSection";
import { Grid } from "@material-ui/core";

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
      <HeroSection />
    </Grid>
  );
};

export default Layout;
