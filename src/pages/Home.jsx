import Header from "../components/Header";
import PostsList from "../components/PostsList";

function Home(props) {
  return (
    <>
      <Header />
      <PostsList {...props} />
    </>
  );
}

export default Home;
