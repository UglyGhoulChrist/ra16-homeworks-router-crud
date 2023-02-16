import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import "./NewPost.scss";

function NewPost({ setRender }) {
  // Достаём из ЛокалСторадж просматриваемый пост
  const viewPost = JSON.parse(window.localStorage.getItem("viewPost"));
  console.log("viewPost", viewPost);
  const URL = "http://localhost:7777/posts";
  // ! user захардкорен
  const [valueTextarea, setValueTextarea] = useState(viewPost?.content || "");
  const navigate = useNavigate();

  const handleSubmit = function (event) {
    event.preventDefault();
    if (valueTextarea.trim()) {
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: viewPost?.id || 0,
          content: valueTextarea.trim(),
        }),
      })
        .then()
        .catch()
        .finally(() => {
          // Очищаем поле ввода
          setValueTextarea("");
          // Переходим на главную
          navigate("/");
          // Запускаем перерендер на главной
          setRender();
        });
    } else {
      console.log("Пустой пост"); // ToDo Сделать фокус на textarea
    }
  };

  return (
    <main className="new-post">
      <Button onClick={() => navigate("/")} text="X" />
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          className="form__textarea"
          onChange={(event) => setValueTextarea(event.target.value)}
          value={valueTextarea}
        />
        <Button text="Опубликовать пост" />
      </form>
    </main>
  );
}

export default NewPost;
