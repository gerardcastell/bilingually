import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import grey from "@material-ui/core/colors/grey";
import { typography } from "@material-ui/system";

let theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: grey
  },
  status: {
    danger: "orange"
  }
  // typography: {
  //   fontFamily: ["Roboto"]
  //   fontSize: 12
  // }
});

theme = responsiveFontSizes(theme);
export default theme;
