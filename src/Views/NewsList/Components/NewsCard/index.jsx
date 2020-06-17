import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Link,
} from "@material-ui/core";
const useStyles = makeStyles({
  root: {
    height: "100%",
  },
  simpleLink: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
});

export default function NewsCard(props) {
  const classes = useStyles();
  const { item } = props;

  return (
    <Link
      href={item.url}
      target="_blank"
      rel="noopener"
      className={classes.simpleLink}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={item.title}
            height="360"
            image={item.urlToImage}
            title={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              {item.source.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.description}
            </Typography>
            <Typography variant="overline" color="textSecondary" component="p">
              {item.publishedAt}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
