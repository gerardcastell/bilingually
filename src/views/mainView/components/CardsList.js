import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

import SocialStoryCard from "components/SocialStoryCard";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    height: "100%",
    overflow: "auto",
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List disablePadding>
        <ListItem disableGutters>
          <SocialStoryCard />
        </ListItem>
        <ListItem disableGutters>
          <SocialStoryCard />
        </ListItem>
        <ListItem disableGutters>
          <SocialStoryCard />
        </ListItem>
        <ListItem disableGutters>
          <SocialStoryCard />
        </ListItem>
        <ListItem disableGutters>
          <SocialStoryCard />
        </ListItem>
      </List>
    </div>
  );
}
