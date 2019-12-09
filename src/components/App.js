import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import { flexbox } from "@material-ui/system";

import TopTabs from "./TopTabs";
import TopBar from "./TopBar";
import NestedList from "./NestedList";
import SocialStoryCard from "./SocialStoryCard";
import globalTheme from "../themes/globalTheme";
import Typography from "@material-ui/core/Typography";

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
        <TopBar />
        <TopTabs />
        <SocialStoryCard />
        {/* <NestedList /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
