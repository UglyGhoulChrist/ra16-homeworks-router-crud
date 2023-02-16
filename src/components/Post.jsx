import React from "react";
import "./Post.scss";
import img from "../../public/static/avatar.png"; // ! Аватарка из файла
import { useNavigate } from "react-router-dom";

function Post({ id, created, content }) {
  // Форматирую дату в читаемый формат
  const date = new Date(created);
  const formatDate = date.toLocaleString();
  // Создаю путь к кликнутому посту
  const navigate = useNavigate();

  return (
    <li onClick={() => navigate(`/posts/${id}`)} className="post">
      <div className="post__top">
        <img className="post__image" src={img} />
        <div className="post__name-id">
          <h2 className="post__name">id: {id} - Name</h2>
          <p className="post__created">{formatDate}</p>
        </div>
      </div>
      <p className="post__content">{content}</p>
    </li>
  );
}

export default Post;
