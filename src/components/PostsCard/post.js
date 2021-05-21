import React from 'react';

const PostCard = ({ info }) => {
  return (
    <div>
      <p>{info.title}</p>
      <p>{info.body}</p>
    </div>
  );
};

export default PostCard;
