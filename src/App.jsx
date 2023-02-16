import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ViewPost from "./pages/ViewPost";
import NewPost from "./pages/NewPost";
import URL from "./url/url";

function App() {
  window.localStorage.clear("viewPost");
  const [posts, setPosts] = useState([]);
  // Для перерендера страницы
  const [render, setRender] = useState(0);

  useEffect(() => {
    // Получение постов
    fetch(URL)
      .then((res) => res.json())
      .then((posts) => setPosts(posts))
      .catch()
      .finally();
  }, [render]);

  // Удаление поста по ИД
  const deletePost = (id) => {
    fetch(`${URL}/${id}`, {
      method: "DELETE",
    })
      .then()
      .then()
      .catch()
      .finally();
  };

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route
            path="/posts/new"
            element={<NewPost setRender={() => setRender(Math.random())} />}
          />
          <Route
            path="/posts/:id"
            element={
              <ViewPost
                posts={posts}
                handleDeletePost={deletePost}
                setRender={() => setRender(Math.random())}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
