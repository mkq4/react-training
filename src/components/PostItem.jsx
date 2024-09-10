import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = ( {data, number, remove} ) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{number}. {data.title}</strong> <div>{data.body}</div>
      </div>
      <MyButton onClick={() => remove(data)}>Delete</MyButton>
    </div>
  );
};

export default PostItem;
