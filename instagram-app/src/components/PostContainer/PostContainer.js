import React from 'react';

function PostContainer(props) {
  console.log(props);
  return (
    <>
      {props.data.map(data => (
        <div key={data.id} className="post">

        </div>
      ))}
    </>
  );
};

export default PostContainer;