import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import "./NewPost.scss";
import URL from "../url/url";

function NewPost({ setRender }) {
  // Достаём из ЛокалСторадж просматриваемый пост
  const viewPost = JSON.parse(window.localStorage.getItem("viewPost"));
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
      // Фокус на textarea
      document.getElementsByTagName("textarea")[0].focus();
    }
  };

  return (
    <main className="new-post">
      <Button
        onClick={() => navigate(viewPost ? `/posts/${viewPost.id}` : "/")}
        text="X"
      />
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          autoFocus
          className="form__textarea"
          onChange={(event) => setValueTextarea(event.target.value)}
          value={valueTextarea}
        />
        <Button text={viewPost ? "Сохранить изменения" : "Опубликовать пост"} />
      </form>
    </main>
  );
}

export default NewPost;
