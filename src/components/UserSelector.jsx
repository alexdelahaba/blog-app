import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "./../modules/materialUI-module";
import "./../styles/userSelector.scss";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  label: {
    color: theme.palette.tertiary.main,
  },
  select: {
    borderBottom: `3px solid white`,
    color: theme.palette.tertiary.light,
    "&:before": {
      borderBottom: `3px solid ${theme.palette.tertiary.light}`,
    },
    "&:hover": {
      borderBottom: `3px solid ${theme.palette.tertiary.main}`,
      padding: 0,
    },
  },
}));
export default function UserSelector({ setUserId, usersArray }) {
  const classes = useStyles();
  const [userSelector, setUserSelector] = useState("");
  const [open, setOpen] = useState(false);
  const handleChange = (event) => {
    setUserId(event.target.value);
    setUserSelector(event.target.value);
  };

  return (
    <div className="ba-userSelector">
      <FormControl className={classes.formControl}>
        <InputLabel id="labelIdUserSelector" className={classes.label}>
          User
        </InputLabel>
        <Select
          autoWidth
          className={classes.select}
          id="userSelector"
          labelId="labelIdUserSelector"
          onChange={handleChange}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          value={userSelector}
          variant="standard"
        >
          {usersArray.map((user) => (
            <MenuItem key={user.id} value={user.id}>
              {user.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
