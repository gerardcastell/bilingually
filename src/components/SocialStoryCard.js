import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Chip from "@material-ui/core/Chip";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  chipRoot: {
    margin: theme.spacing(0.3),
    color: "white"
  },
  chipLabelSmall: {
    fontSize: 12
  },
  cardHeaderRoot: {
    paddingTop: 8,
    paddingBottom: 8
  },
  cardContentRoot: {
    paddingTop: 0,
    paddingBottom: 0
  },
  cardActionRoot: {
    height: 30,
    paddingTop: 0,
    paddingBottom: 0
  },
  gridDividerRoot: {
    // padding: theme.spacing(0)
  },
  subtitleRoot: {
    paddingBot: "12px"
  }
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //   TODO: "Fetch this from redux store";
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "School", color: "#ff6347" },
    { key: 1, label: "Friends", color: "#8EB968 " },
    { key: 2, label: "Love", color: "#BD6DCF" },
    { key: 3, label: "React", color: "#2A9ACA" }
    // { key: 4, label: "Vue.js", color: "black" }
  ]);
  const getChipData = () => {
    if (chipData.length > 3) {
      return (
        <React.Fragment>
          {chipData.map(data => {
            return (
              <Chip
                key={data.key}
                label={data.label}
                classes={{
                  root: classes.chipRoot,
                  labelSmall: classes.chipLabelSmall
                }}
                style={{ backgroundColor: data.color }}
                // size="small"
              />
            );
          })}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          {chipData.map(data => {
            return (
              <Chip
                key={data.key}
                label={data.label}
                classes={{
                  root: classes.chipRoot,
                  labelSmall: classes.chipLabelSmall
                }}
                // size="small"
              />
            );
          })}
        </React.Fragment>
      );
    }
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <ArrowForwardIosIcon />
          </IconButton>
        }
        title="Social Story 1 Example"
        // subheader="September 14, 2016"
        classes={{ root: classes.cardHeaderRoot }}
      />
      <CardContent classes={{ root: classes.cardContentRoot }}>
        {/* We have to insert here the chips */}
        {getChipData()}
      </CardContent>
      <CardActions disableSpacing classes={{ root: classes.cardActionRoot }}>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent classes={{ root: classes.cardContentRoot }}>
          <Grid container spacing={3}>
            <Grid xs={12} item>
              <Typography variant="subtitle1" paragraph>
                Preview
              </Typography>
              <CircularProgress size={25} />
            </Grid>
            <Grid xs item classes={{ root: classes.gridDividerRoot }}>
              <Divider variant="fullWidth" />
            </Grid>
            <Grid xs={12} item>
              <Typography variant="subtitle1">Description</Typography>
              <Typography variant="body2">
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
}
