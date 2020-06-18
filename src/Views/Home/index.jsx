import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeroSection from "./Components/HeroSection";
import { Grid } from "@material-ui/core";
import NewsList from "../NewsList";

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
      <NewsList />
    </Grid>
  );
};

export default Home;
