import React, { useState } from "react";

import { makeStyles, fade } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Typography,
  InputBase,
  Button,
} from "@material-ui/core";

import { getKeywordNews } from "../../../../Actions";
import { useDispatch } from "react-redux";

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
    transition: theme.transitions.create("width"),
    margin: "0 auto",
    textAlign: "center",
    color: "black",
    fontSize: "1.4rem",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  searchButtonContainer: {
    marginTop: theme.spacing(8),
  },
  searchButton: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    borderRadius: theme.shape.borderRadius * 20,
  },
}));

const HeroSection = () => {
  const classes = useStyles();
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();

  const onSearchInputChange = ({ target }) => {
    console.log(target.value);
    setKeyword(target.value);
  };
  const onSearchClick = () => {
    dispatch(getKeywordNews(keyword));
    setKeyword("");
  };
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
                  placeholder="Search Keyword..."
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  value={keyword}
                  inputProps={{ "aria-label": "search" }}
                  onChange={onSearchInputChange}
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
              onClick={onSearchClick}
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
