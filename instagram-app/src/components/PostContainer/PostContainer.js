import React from "react";
import Post from "./Post";
import "./Post.css";

const PostContainer = props => {
  // console.log(props);
  return (
    <div className="post">
      {props.post.map(data => (
        <Post key={data.imageUrl} post={data} />
      ))}
    </div>
  );
};

export default PostContainer;