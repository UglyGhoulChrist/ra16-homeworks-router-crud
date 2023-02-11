import { useEffect, useState } from "react";
import "./App.css";
import NewPost from "./components/NewPost";
import PostsList from "./components/PostsList";
import startPosts from "./data/startPosts";

function App() {
  const URL = "http://localhost:7777/posts";

  const [posts, setPosts] = useState(startPosts);

  const handleAddNewPost = function (post) {
    setPosts([...posts, post]);
  };

  // useEffect(() => {
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((posts) => setPosts(posts))
  //     .catch((error) => console.log(error))
  //     .finally(console.log("finnaly"));
  // }, []);

  return (
    <div className="App">
      <PostsList posts={posts} />
      <NewPost addNewPost={handleAddNewPost} />
    </div>
  );
}

export default App;
