import React, { useState } from "react";
import {
  ListItem,
  ListItemText,
  ListSubheader,
  MuiAlert,
  Snackbar,
} from "./../modules/materialUI-module";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
}));

export default function CommentPost({ comment }) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ListItem button className={classes.listItem} onClick={handleClick}>
        <ListItemText primary={comment.name} />
        <ListSubheader color="primary">
          <ListItemText primary={comment.email} />
        </ListSubheader>
      </ListItem>
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Note archived"
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity="info"
        >
          Clicked on comment number {comment.id}
        </MuiAlert>
      </Snackbar>
    </>
  );
}
