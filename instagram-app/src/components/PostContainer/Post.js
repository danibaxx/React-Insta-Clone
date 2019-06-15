import React from 'react';

import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';

const Post = props => {
  return (
    <div className="post-container">
      <PostHeader 
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image">
        <img
          alt="post thumbnail"
          className="post-img"
          src={props.post.imageUrl}
        />
      </div>
      <CommentSection comment={props.post.comment} />
    </div>
  );
};

export default Post;