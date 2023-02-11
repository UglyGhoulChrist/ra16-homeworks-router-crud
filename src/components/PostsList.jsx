import React from "react";
import Post from "./Post";
import "./PostsList.scss";

function PostsList({ posts }) {
  return (
    <ul className="posts">
      PostsList
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </ul>
  );
}

export default PostsList;
