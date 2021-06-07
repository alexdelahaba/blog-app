import axios from "axios";
import React, { useState, useEffect } from "react";
import { injectLayout } from "./../HOCs/injectLayout";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CircularProgress,
  Collapse,
  Typography,
  IconButton,
  List,
} from "./../modules/materialUI-module";
import { ExpandMoreIcon, ExpandLessIcon } from "./../modules/iconsUI-module";
import "./../styles/postDetails.scss";
import { theme } from "./../theme/theme";
import CommentPost from "../components/CommentPost";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "min(900px, 90vw)",
    backgroundColor: theme.palette.secondary.main,
  },
  cardheader: {
    backgroundColor: theme.palette.tertiary.dark,
    textAlign: "center",
  },
  cardcontent: {
    backgroundColor: theme.palette.tertiary.main,
  },
  cardactions: {
    backgroundColor: theme.palette.tertiary.main,
    display: "flex",
    justifyContent: "flex-end",
  },
  collapse: {
    backgroundColor: theme.palette.grey[500],
  },
}));
function PostDetail() {
  const classes = useStyles();

  let { id } = useParams();

  const [expanded, setExpanded] = useState(false);
  const [postDetails, setPostDetails] = useState(null);
  const [postComments, setPostComments] = useState([]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    axios({
      method: "GET",
      url: `posts/${id}`,
    })
      .then((resp) => {
        let { data } = resp;
        setPostDetails(data);
      })
      .catch(console.log);

    axios({
      method: "GET",
      url: `comments?postId=${id}`,
    })
      .then((resp) => {
        let { data } = resp;
        setPostComments(data);
      })
      .catch(console.log);

    return () => {};
  }, [id]);

  return (
    <div className="ba-postDetail">
      <h1>Post detail nº {id}</h1>
      {postDetails === null || postComments === [] ? (
        <CircularProgress size={100} />
      ) : (
        <Card className={classes.root}>
          <CardHeader
            title={postDetails.title}
            subheader={`UserId: ${postDetails.userId}`}
            className={classes.cardheader}
          />
          <CardContent className={classes.cardcontent}>
            <Typography variant="body2" color="textSecondary" component="p">
              {postDetails.body}
            </Typography>
          </CardContent>
          <CardActions
            disableSpacing
            className={classes.cardactions}
            style={{
              backgroundColor: expanded ? theme.palette.tertiary.dark : "",
            }}
          >
            <p>Comments</p>
            <IconButton
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="Expand"
            >
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </CardActions>
          <Collapse in={expanded} className={classes.collapse} unmountOnExit>
            <CardContent>
              <List component="nav">
                {postComments.map((comment) => (
                  <CommentPost key={comment.id} comment={comment} />
                ))}
              </List>
            </CardContent>
          </Collapse>
        </Card>
      )}
    </div>
  );
}

export default injectLayout(PostDetail);
