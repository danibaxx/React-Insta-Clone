import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PostHeader from "./PostHeader";
import HeartIcon from "../../assets/searchpng.com-heart-icon-transparent-png-free-download.png";
import CommentIcon from "../../assets/searchpng.com-comment-icon-png-image-free-download.png";

import './Post.css';

const Post = props => {
  // console.log("PROPS FROM POST", props);
  return (
    <div className="post-container">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-content">
        <img
          alt="post thumbnail"
          className="post-img"
          src={props.post.imageUrl}
        />
        <img alt="like logo" src={HeartIcon} className="like-logo" />
        <img alt="comment logo" src={CommentIcon} className="comment-logo" />
        <div>{props.post.likes} likes</div>
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;