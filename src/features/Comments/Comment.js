import React from 'react';

const Comment = ({ comment }) => {
  const { author, body, created } = comment;

  return (
    <div>
      <h4>{author}</h4>
      <p>{body}</p>
      <br />
      <p>{created}</p>
    </div>
  );
};

export default Comment;
