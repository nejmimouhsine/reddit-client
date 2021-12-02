import React from 'react';
import { useDispatch } from 'react-redux';
import Comments from '../Comments/Comments';
import { getComments } from '../Comments/commentsSlice';

const Post = ({ post }) => {
  const dispatch = useDispatch();

  const { id, author, title, score, num_comments, created_utc, thumbnail } =
    post;

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getComments(id));
  };

  return (
    <div
      style={{
        background: '#ededed',
        margin: '5px',
        padding: '10px',
        borderRadius: '10px',
      }}
    >
      <div>
        <h3>{author}</h3>
        <p>{title}</p>
        <p>{score}</p>
        <p>{num_comments}</p>
        <p>{created_utc}</p>
        <p>{thumbnail}</p>
        <button onClick={handleClick}>Load Comments</button>
      </div>

      <div style={{ height: '100px', overflowY: 'scroll' }}>
        <Comments />
      </div>
    </div>
  );
};

export default Post;
