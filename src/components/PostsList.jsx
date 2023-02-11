import React from "react";
import Post from "./Post";

function PostsList({ posts }) {
  return (
    <ul>
      PostsList
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </ul>
  );
}

export default PostsList;
