/* eslint-disable no-use-before-define */
import React from "react";
import Chip from "@material-ui/core/Chip";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import chipsData from "utils/chipsData";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(3)
    }
  }
}));

export default function Tags() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <Autocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={option => option.title}
        // defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={params => (
          <TextField
            {...params}
            variant="outlined"
            label="Filter"
            placeholder="Write a tag..."
            fullWidth
          />
        )}
      /> */}

      <Autocomplete
        multiple
        id="tags-filled"
        options={chipsData}
        // defaultValue={[top100Films[13].title]}
        freeSolo
        getOptionLabel={option => option.value}
        filterSelectedOptions
        renderTags={(value, getTagProps) =>
          value.map((option, index) => {
            return (
              <Chip
                variant="outlined"
                label={option.value}
                style={{ color: "white", backgroundColor: option.color }}
                {...getTagProps({ index })}
              />
            );
          })
        }
        renderInput={params => (
          <TextField
            {...params}
            variant="filled"
            label="freeSolo"
            placeholder="Favorites"
            fullWidth
          />
        )}
      />
    </div>
  );
}
