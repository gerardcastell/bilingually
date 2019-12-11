import React from "react";

import Tabs from "./components/Tabs";
import TopBar from "components/TopBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "100%",
    overflow: "hidden"
  }
}));

const MainView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopBar />
      <Tabs />
    </div>
  );
};

export default MainView;
