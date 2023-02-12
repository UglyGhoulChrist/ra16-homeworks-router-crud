import React from "react";
import "./Post.scss";
import img from "../../public/static/avatar.png"; // ! Аватарка из файла

function Post({ id, created, content }) {
  const date = new Date(created);

  return (
    <li className="post">
      <div className="post__top">
        <img className="post__image" src={img} />
        <div className="post__name-id">
          <h2 className="post__name">id: {id} - Name</h2>
          <p className="post__created">{date.toLocaleString()}</p>
        </div>
      </div>
      <p className="post__content">{content}</p>
    </li>
  );
}

export default Post;
