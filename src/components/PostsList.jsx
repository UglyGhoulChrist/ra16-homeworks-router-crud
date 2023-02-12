import React from "react";
import Post from "./Post";
import "./PostsList.scss";

function PostsList({ posts }) {
  return (
    <main>
      <ul className="posts">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </ul>
    </main>
  );
}

export default PostsList;
