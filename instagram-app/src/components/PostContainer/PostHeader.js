import React from 'react';

import './Post.css';

const PostHeader = props => {
  return (
    <div className="post-header">
      <img 
        alt="post header" 
        className="post-header" 
        src="{props.thumbnailUrl}" 
      />
      <div>{props.username}</div>
    </div>
  );
};

export default PostHeader;