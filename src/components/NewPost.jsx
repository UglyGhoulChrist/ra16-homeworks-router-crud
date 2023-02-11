import React, { useState } from "react";
import "./NewPost.scss";

function NewPost({ addNewPost }) {
  // ! user захардкорен
  const [valueTextarea, setValueTextarea] = useState("");
  const handleSubmit = function (event) {
    event.preventDefault();
    if (valueTextarea.trim()) {
      console.log("Публикую новый пост");
      const now = new Date();
      const post = {
        id: ~~(Math.random() * 1000),
        name: "Vasya",
        avatar: "",
        created: now.toLocaleString(),
        content: valueTextarea.trim(),
      };
      addNewPost(post);
      setValueTextarea("");
    } else {
      // ToDo Сделать фокус на textarea
      console.log("Пустой пост");
    }
    console.log("Нажата кнопка опубликовать");
  };

  return (
    <div className="new-post">
      <button className="close">X</button>
      <form className="form" onSubmit={handleSubmit}>
        <textarea
          className="form__textarea"
          onChange={(event) => setValueTextarea(event.target.value)}
          value={valueTextarea}
        />
        <button className="form__button" type="submit">
          Опубликовать
        </button>
      </form>
    </div>
  );
}

export default NewPost;
