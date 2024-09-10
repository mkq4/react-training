import React from "react";
import { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";
const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: "", body: "" });
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
        ...post,
        id: Date.now()
    }
    setPost({ title: "", body: "" });
    create(newPost)
  };
  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(el) => setPost({ ...post, title: el.target.value })}
        type="text"
        placeholder="Title name"
      />
      <MyInput
        value={post.body}
        onChange={(el) => setPost({ ...post, body: el.target.value })}
        type="text"
        placeholder="Post description"
      />
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default PostForm;
