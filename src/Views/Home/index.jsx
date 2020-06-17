import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeroSection from "./Components/HeroSection";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <HeroSection />
    </Grid>
  );
};

export default Home;
