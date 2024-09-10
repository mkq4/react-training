import { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
import { useMemo } from "react";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "html", body: "html - markdown language" },
    { id: 2, title: "css", body: "css - style markdown language" },
    { id: 3, title: "Js", body: "js - programming language" },
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const sortedPosts = useMemo(()=> {
    console.log('useMemo')
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort] > b[filter.sort]
          ? 1
          : a[filter.sort] < b[filter.sort]
          ? -1
          : 0
      );
    }
    return posts;
  }, [filter.sort, posts])

  const soartedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter.query, sortedPosts])

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false)
  }

  function removePost(post) {
    setPosts(posts.filter((el) => el.id !== post.id));
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: "20px"}} onClick={() => {setModal(true)}} >Create post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0px" }} />
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={soartedAndSearchedPosts} />
    </div>
  );
}

export default App;
