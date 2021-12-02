import React from 'react';
import { useSelector } from 'react-redux';
import { selectPosts } from '../features/Posts/postsSlice';

const Subreddit = () => {
  const posts = useSelector(selectPosts);
  const subreddits = Object.values(posts).map(({ subreddit }) => subreddit);
  const uniqueSubreddits = [...new Set(subreddits)];

  const handleClick = (e) => console.log(e.target.id);

  return (
    <div>
      <h2>Subreddit</h2>
      {uniqueSubreddits.map((subreddit) => (
        <div key={subreddit}>
          <p onClick={handleClick} id={subreddit}>
            {subreddit}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Subreddit;
