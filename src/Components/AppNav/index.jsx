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
}));

const AppNav = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Container>
            <Grid
              container
              justify="center"
              alignItems="center"
              direction="row"
            >
              <Typography component="h1">News App</Typography>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppNav;
