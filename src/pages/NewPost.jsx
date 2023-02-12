import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import "./NewPost.scss";

function NewPost() {
  const URL = "http://localhost:7777/posts";
  // ! user захардкорен
  const [valueTextarea, setValueTextarea] = useState("");
  const handleSubmit = function (event) {
    event.preventDefault();
    if (valueTextarea.trim()) {
      console.log("Публикую новый пост");

      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: 0,
          content: valueTextarea.trim(),
        }),
      })
        .then()
        .catch()
        .finally(console.log("Add post end"));

      setValueTextarea("");
    } else {
      // ToDo Сделать фокус на textarea
      console.log("Пустой пост");
    }
    console.log("Нажата кнопка опубликовать");
  };

  return (
    <main className="new-post">
      <Button text="X" />
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
