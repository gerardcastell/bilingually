import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ListIcon from "@material-ui/icons/List";
import FilterListIcon from "@material-ui/icons/FilterList";
import SearchIcon from "@material-ui/icons/Search";

import CardsList from "./CardsList";
import SearchBar from "components/SearchBar";
import SearchBarNew from "components/SearchBarNew";
import FilterBar from "components/FilterBar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: "100%",
    height: "100%"
  },
  label: {
    textTransform: "capitalize",
    minHeight: 0
  },

  tabsBar: {
    height: 60,
    position: "relative",
    zIndex: 2
  },
  tabRoot: {
    padding: 0
  }
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    window.scrollTo(0, 0);
    console.log("epaa");
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="default"
        classes={{ root: classes.tabsBar }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          centered
          classes={{ centered: classes.tabsBar }}
        >
          <Tab
            classes={{ root: classes.tabRoot, labelIcon: classes.label }}
            label="All"
            icon={<ListIcon />}
            {...a11yProps(0)}
          />
          <Tab
            classes={{ root: classes.tabRoot, labelIcon: classes.label }}
            label="Search"
            icon={<SearchIcon />}
            {...a11yProps(1)}
          />
          <Tab
            classes={{ root: classes.tabRoot, labelIcon: classes.label }}
            label="Filter"
            icon={<FilterListIcon />}
            {...a11yProps(2)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        style={{ height: "100%", width: "100%" }}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <CardsList />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          {/* <SearchBar /> */}
          <SearchBarNew />
          <CardsList />
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <FilterBar />
          <CardsList />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
