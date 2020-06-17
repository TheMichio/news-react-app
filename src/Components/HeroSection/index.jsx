import React from "react";

import { makeStyles, fade } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  InputBase,
  Button,
} from "@material-ui/core";
// imports
import SearchIcon from "@material-ui/icons/Search";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "white",
    height: "100vh",
    background: `url(
      "https://source.unsplash.com/ALM7RNZuDH8/1280*720"
    )`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  },
  fullHeight: {
    paddingTop: theme.spacing(18),
  },
  bigTitle: {
    fontWeight: "bold",
    fontFamily: `'Lobster', cursive`,
    padding: theme.spacing(3),
    paddingLeft: 0,
    paddingRight: 0,
    textAlign: "center",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius * 10,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    // margin: "0 auto",
    width: "100%",
    marginTop: theme.spacing(6),
    padding: theme.spacing(2),
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  searchButtonContainer: {
    marginTop: theme.spacing(8),
  },
  searchButton: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    borderRadius: theme.shape.borderRadius * 20,
  },
}));

const HeroSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="row"
          className={classes.fullHeight}
        >
          <Grid container item xs={12} justify="center" alignItems="center">
            <Typography variant="h3" className={classes.bigTitle}>
              Search About An Event
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={12}
            justify="space-between"
            alignContent="center"
          >
            <Grid item xs={12}>
              <div className={classes.search}>
                <InputBase
                  placeholder="Search News..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ "aria-label": "search" }}
                />
              </div>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={4}
            lg={4}
            justify="center"
            alignItems="center"
            className={classes.searchButtonContainer}
          >
            <Button
              variant="contained"
              color="primary"
              fullWidth
              className={classes.searchButton}
            >
              Find News
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HeroSection;
