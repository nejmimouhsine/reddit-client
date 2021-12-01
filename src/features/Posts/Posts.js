import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts, getPosts } from './postsSlice';

const Posts = () => {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();

  const loadComments = () => {};

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Posts</h1>
      {Object.values(posts).map((post) => {
        const {
          id,
          author,
          title,
          score,
          num_comments,
          created_utc,
          thumbnail,
        } = post;

        return (
          <div
            key={id}
            style={{
              background: '#ededed',
              margin: '5px',
              padding: '10px',
              borderRadius: '10px',
            }}
          >
            <h3>{author}</h3>
            <p>{title}</p>
            <p>{score}</p>
            <p>{num_comments}</p>
            <p>{created_utc}</p>
            <p>{thumbnail}</p>
            <button onClick={loadComments}>Load Comments</button>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
