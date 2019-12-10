import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function NestedList() {
  const classes = useStyles();
  const items = [
    "Respect the order in a line",
    "Cover your mouth with your hand to sneeze",
    "Wait for all family to start"
  ];

  const returnItems = () => {
    return (
      <React.Fragment>
        {items.map(txt => (
          <React.Fragment key={txt}>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary={txt} />
            </ListItem>
            <Divider variant="middle" component="li" />
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  };
  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Find your Social Story or create a new one!
        </ListSubheader>
      }
      className={classes.root}
    >
      {returnItems()}
    </List>
  );
}
