import React from 'react';

function PostContainer(props) {
  console.log(props);
  return (
    <>
      {props.data.map(data => (
        <div key={data.id} className="post">
          <img src={data.thumbnailUrl} alt={data.username} />
          <h3>{data.username}</h3>
          <img src={data.imageUrl} alt="posted-logo" />
          <h3>Like</h3>
          <h3>Comment</h3>
          <h4>{data.likes}</h4>
        </div>
      ))}
    </>
  );
};

export default PostContainer;