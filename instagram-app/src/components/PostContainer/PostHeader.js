import React from 'react'
import './Post.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <div className="post-content">
        <img
          alt="post header"
          className="user-logo"
          src={props.thumbnailUrl}
        />
        <div>{props.username}</div>
      </div>

    </div>
  );
}

export default PostHeader;