import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import AppNav from "../../Components/AppNav";
import NewsCard from "./Components/NewsCard";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  newsList: {
    marginTop: theme.spacing(16),
  },
  cardContainer: {
    margin: theme.spacing(4),
  },
}));

const NewsList = () => {
  const classes = useStyles();
  const { news } = useSelector((state) => state);
  return (
    <div className={classes.root}>
      <AppNav />
      <div className={classes.newsList}>
        <Grid container direction="row" justify="center">
          {news.map((item) => (
            <Grid
              item
              xs={12}
              md={3}
              className={classes.cardContainer}
              key={item.title}
            >
              <NewsCard item={item} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default NewsList;
