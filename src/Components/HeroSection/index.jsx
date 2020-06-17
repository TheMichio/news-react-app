import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    background: `url(
      "https://source.unsplash.com/KRELIShKxTM/1600x900"
    )`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
}));

const HeroSection = () => {
  const classes = useStyles();
  return <div className={classes.root}>testing</div>;
};

export default HeroSection;
