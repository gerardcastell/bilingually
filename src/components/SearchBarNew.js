/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

import chipsData from "utils/chipsData";

export default function FreeSolo() {
  return (
    <div style={{ width: "100%" }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={chipsData.map(option => option.value)}
        renderInput={params => (
          <TextField
            {...params}
            label="Search"
            margin="normal"
            variant="outlined"
            placeholder="Write a title..."
            fullWidth
          />
        )}
      />
    </div>
  );
}
