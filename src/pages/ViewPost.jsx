import Post from "../components/Post";
import { useParams } from "react-router-dom";
import Button from "../UI/Button";
import "./ViewPost.scss";

function ViewPost({ posts }) {
  // Вытаскиваю из массива постов пост с ID
  const params = useParams();
  const post = posts.find((post) => post.id === +params.id);

  return (
    <div>
      <Post {...post} />
      <div className="buttons">
        <Button text="Изменить" />
        <Button text="Удалить" />
      </div>
    </div>
  );
}

export default ViewPost;
