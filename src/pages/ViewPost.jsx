import Post from "../components/Post";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import "./ViewPost.scss";

function ViewPost({ posts, handleDeletePost, setRender }) {
  // Вытаскиваю из массива постов пост с ID
  const params = useParams();
  const post = posts.find((post) => post.id === +params.id);
  const navigate = useNavigate();
  const handleChangePost = () => {
    console.log("Нажали кнопку изменить пост");
    // Добавляем в ЛокалСторадж просматриваемый пост
    window.localStorage.setItem("viewPost", JSON.stringify(post));
    navigate("/posts/new");
  };

  return (
    <div>
      <Post {...post} />
      <div className="buttons">
        <Button onClick={handleChangePost} text="Изменить" />
        <Button
          onClick={() => {
            // Удаляем пост
            handleDeletePost(post.id);
            // Переходим на главную
            navigate("/");
            // Запускаем перерендер на главной
            setRender();
          }}
          text="Удалить"
        />
      </div>
    </div>
  );
}

export default ViewPost;
