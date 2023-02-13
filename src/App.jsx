import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ViewPost from "./pages/ViewPost";
import EditPost from "./pages/EditPost";
import NewPost from "./pages/NewPost";

function App() {
  const URL = "http://localhost:7777/posts";
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
      .catch((error) => console.log(error))
      .finally(console.log("finnaly"));
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/posts/new" element={<NewPost />} />
          <Route path="/posts/:id" element={<ViewPost posts={posts} />} />
          {/*    <Route path="/posts/edit:id" element={EditPost} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
