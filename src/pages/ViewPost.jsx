import Post from "../components/Post";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import "./ViewPost.scss";

function ViewPost({ posts, handleDeletePost }) {
  // Вытаскиваю из массива постов пост с ID
  const params = useParams();
  const post = posts.find((post) => post.id === +params.id);
  // console.log(post.id);
  const handleChangePost = () => {
    console.log("Нажали кнопку изменить пост");
  };
  const navigate = useNavigate();

  return (
    <div>
      <Post {...post} />
      <div className="buttons">
        <Button onClick={handleChangePost} text="Изменить" />
        <Button
          onClick={() => {
            handleDeletePost(post.id);
            navigate("/");
          }}
          text="Удалить"
        />
      </div>
    </div>
  );
}

export default ViewPost;
