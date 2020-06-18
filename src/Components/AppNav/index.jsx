import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Container,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    boxShadow: "none",
    backgroundColor: `rgba(151, 163, 184 , 0.3)`,
    padding: theme.spacing(2),
  },
  appbarTitle: {
    color: "black",
    fontFamily: `'Lobster', cursive`,
  },
  simpleLink: {
    textDecoration: "none",
    "&:hover , &:focus": {
      textDecoration: "none",
    },
  },
}));

const AppNav = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar} position="fixed">
      <Toolbar>
        <Container maxWidth="md">
          <Grid container justify="center" alignItems="center" direction="row">
            <Grid item zeroMinWidth>
              <Typography
                component="h4"
                variant="h4"
                className={classes.appbarTitle}
                noWrap
              >
                . . News App . .
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default AppNav;
