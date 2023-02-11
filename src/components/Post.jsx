import React from "react";
import "./Post.scss";
import img from "../../public/static/avatar.png"; // ! Аватарка из файла

function Post({ id, name, avatar, created, content }) {
  return (
    <li className="post">
      <div className="post__top">
        <img className="post__image" src={img} />
        <div className="post__name-id">
          <h2 className="post__name">
            <span className="post__id">id: {id} - </span>
            {name}
          </h2>
          <p className="post__created">{created}</p>
        </div>
      </div>
      <p className="post__content">{content}</p>
    </li>
  );
}

export default Post;
