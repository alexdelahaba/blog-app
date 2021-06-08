import React from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "../modules/materialUI-module";
import { ExpandMoreIcon } from "../modules/iconsUI-module";
import { makeStyles } from "@material-ui/core/styles";
import "./../styles/postsByUserDisplayer.scss";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.tertiary.light,
    marginTop: 20,
    maxWidth: 600,
    width: "90%",
    "& expanded": {
      color: "red",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
export default function PostsByUserDisplayer({ post }) {
  const classes = useStyles();
  return (
    <div className="ba-postsByUserDisplayer">
      <Accordion className={classes.root}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>Post {post.id}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography className="title">{post.title}</Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography className="body">{post.body}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
