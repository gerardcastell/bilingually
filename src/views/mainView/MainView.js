import React from "react";

import Tabs from "./components/Tabs";
import TopBar from "components/TopBar";
import CreateButton from "components/CreateButton";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "100%",
    overflow: "hidden"
  },
  topBar: {
    zIndex: 1
  },
  tabs: {
    zIndex: 0
  },
  createButton: {
    zIndex: 2,
    potision: "absolute"
  }
}));

const MainView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopBar classeName={classes.topBar} />
      <Tabs classeName={classes.tabs} />
      <CreateButton classeName={classes.createButton} />
    </div>
  );
};

export default MainView;
