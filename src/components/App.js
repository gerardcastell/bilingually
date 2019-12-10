import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import { flexbox } from "@material-ui/system";

import TopTabs from "../views/mainView/components/TopTabs";
import TopBar from "./TopBar";
import NestedList from "../views/mainView/components/NestedList";
import SocialStoryCard from "./SocialStoryCard";
import globalTheme from "../themes/globalTheme";
import MainView from "../views/mainView/MainView.js";

const AppStyle = {
  position: "absolute",
  bottom: 0,
  top: 0,
  right: 0,
  left: 0
};

function App() {
  return (
    <ThemeProvider theme={globalTheme}>
      <div style={AppStyle}>
        <MainView />
        {/* <TopBar /> */}
        {/* <TopTabs />
        <SocialStoryCard /> */}
        {/* <NestedList /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
