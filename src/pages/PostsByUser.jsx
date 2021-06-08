import React, { useState, useEffect } from "react";
import { injectLayout } from "./../HOCs/injectLayout";
import axios from "axios";
import { CircularProgress } from "./../modules/materialUI-module";
import UserSelector from "./../components/UserSelector";
import "./../styles/postsByUser.scss";
import PostsByUserDisplayer from "./../components/PostsByUserDisplayer";

function PostsByUser() {
  const [userId, setUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (userId !== null) {
      axios({
        method: "GET",
        url: `posts?userId=${userId}`,
      })
        .then((resp) => {
          let { data } = resp;
          setPosts(data);
        })
        .catch(console.log);
    }

    return () => {};
  }, [userId]);

  useEffect(() => {
    axios({
      method: "GET",
      url: `users`,
    })
      .then((resp) => {
        let { data } = resp;
        data = data.map((user) => ({
          id: user.id,
          name: user.name,
        }));
        setUsers(data);
      })
      .catch(console.log);

    return () => {};
  }, []);

  return (
    <div className="ba-postsByUser">
      <h1>Posts by user</h1>
      {userId === null && (
        <span className="tip">Please, choose one user to see their posts</span>
      )}
      <UserSelector setUserId={setUserId} usersArray={users} />
      {userId !== null &&
        posts.length !== 0 &&
        posts.map((post) => <PostsByUserDisplayer key={post.id} post={post} />)}
      {userId !== null && posts.length === 0 && <CircularProgress size={100} />}
    </div>
  );
}

export default injectLayout(PostsByUser);
