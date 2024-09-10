import { useState } from "react";
import PostList from "./components/PostList";
import "./styles/App.css";
// import MyButton from "./components/UI/button/MyButton";
// import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
// import Counter from "./components/Counter";

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "html", body: "html - markdown language" },
    { id: 2, title: "css", body: "js - style markdown language" },
    { id: 3, title: "Js", body: "js - programming language" },
  ]);

  function createPost (newPost) {
    setPosts([...posts, newPost])
  }

  function removePost(post) {
    setPosts(posts.filter(el => el.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0px'}}/>
      <div>
      <MySelect defaultValue='sort by' options={[
        {value: 'title', name: 'by title'},
        {value: 'body', name: 'by description'},
      ]}/>
      </div>
      {posts.length > 0 
      ? <PostList remove={removePost} posts={posts}/>
      : <h1 style={{textAlign: 'center'}}>нет ничерта</h1>
      }
      
    </div>
  );
}

export default App;
