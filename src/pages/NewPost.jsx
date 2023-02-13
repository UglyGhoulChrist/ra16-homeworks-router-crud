import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import "./NewPost.scss";

function NewPost() {
  const URL = "http://localhost:7777/posts";
  // ! user захардкорен
  const [valueTextarea, setValueTextarea] = useState("");
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
          id: 0,
          content: valueTextarea.trim(),
        }),
      })
        .then()
        .catch()
        .finally(() => {
          setValueTextarea("");
          navigate("/");
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
