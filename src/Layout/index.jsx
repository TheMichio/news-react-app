import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppNav from "../Components/AppNav";
import HeroSection from "../Components/HeroSection";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
  },
}));

const Layout = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppNav />
      <HeroSection />
    </div>
  );
};

export default Layout;
