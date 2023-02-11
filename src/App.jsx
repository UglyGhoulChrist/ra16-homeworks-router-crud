import { useEffect, useState } from "react";
import "./App.css";
import PostsList from "./components/PostsList";
import startPosts from "./data/startPosts";

function App() {
  const URL = "http://localhost:7777/posts";

  const [posts, setPosts] = useState(startPosts);

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
    </div>
  );
}

export default App;
