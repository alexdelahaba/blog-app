import axios from "axios";
import React, { useState, useEffect } from "react";
import { injectLayout } from "./../HOCs/injectLayout";
import { CircularProgress } from "./../modules/materialUI-module";
import { makeStyles } from "@material-ui/core/styles";
import PostsTable from "../components/PostsTable";

const useStyles = makeStyles({
  centeredFlex: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  textContainer: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
    "& h5": {
      color: "#6b6b6b",
      margin: 0,
      textAlign: "center",
      width: "60%",
    },
    "& h1": {
      margin: 0,
    },
  },
});
function Posts() {
  const [posts, setPosts] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios({
      method: "GET",
      url: "posts",
    })
      .then((resp) => {
        let { data } = resp;
        let rows = data.map((item, index) => ({
          id: item.id,
          title: item.title,
          body: item.body,
        }));
        setPosts(rows);
      })
      .catch(console.log);

    return () => {};
  }, []);

  return (
    <div>
      <div className={classes.textContainer}>
        <h1>Posts</h1>
        <h5>
          This page is meant to be used to display in a table all posts
          retrieved and, by clicking on each one of them, it will redirect you
          to the detail page of the chosen post.
        </h5>
      </div>
      <div className={classes.centeredFlex}>
        {posts.length === 0 ? (
          <CircularProgress size={100} />
        ) : (
          <PostsTable posts={posts} />
        )}
      </div>
    </div>
  );
}

export default injectLayout(Posts);
