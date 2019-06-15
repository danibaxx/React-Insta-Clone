import React from 'react';

function PostContainer(props) {
  console.log(props);
  return (
    <>
      {props.post.map(data => (
        <div key={data.id} className="post">
          <img src={data.thumbnailUrl} alt={data.username} />
          <h3>{data.username}</h3>
          <img src={data.imageUrl} alt="posted-logo" />
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
          <h4>{data.likes} likes</h4>
        </div>
      ))}
    </>
  );
};

export default PostContainer;