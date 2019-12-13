import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import SocialStoryCard from "components/SocialStoryCard";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper
  },
  listItemRoot: {
    justifyContent: "center"
  }
}));

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List disablePadding>
        <ListItem disableGutters className={classes.listItemRoot}>
          <SocialStoryCard />
        </ListItem>
        <ListItem disableGutters className={classes.listItemRoot}>
          <SocialStoryCard />
        </ListItem>
        <ListItem disableGutters className={classes.listItemRoot}>
          <SocialStoryCard />
        </ListItem>
        <ListItem disableGutters className={classes.listItemRoot}>
          <SocialStoryCard />
        </ListItem>
        <ListItem disableGutters className={classes.listItemRoot}>
          <SocialStoryCard />
        </ListItem>
      </List>
    </div>
  );
}
