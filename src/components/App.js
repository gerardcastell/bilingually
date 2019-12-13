import React from "react";

import { ThemeProvider } from "@material-ui/core/styles";

import globalTheme from "themes/globalTheme";
import MainView from "views/mainView/MainView";

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
      </div>
    </ThemeProvider>
  );
}

export default App;
