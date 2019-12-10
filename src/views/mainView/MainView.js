import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";
import { flexbox } from "@material-ui/system";

import TopTabs from "./components/TopTabs";
import TopBar from "components/TopBar";
import NestedList from "./components/NestedList";
import SocialStoryCard from "components/SocialStoryCard";

function App() {
  return (
    <div>
      <TopBar />
      <TopTabs />
      <SocialStoryCard />
      {/* <NestedList /> */}
    </div>
  );
}

export default App;
