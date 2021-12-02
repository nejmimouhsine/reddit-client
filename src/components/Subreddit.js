import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from '../features/Posts/postsSlice';

const Subreddit = () => {
  const [visible, setVisible] = useState(5);
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);
  const subreddits = Object.values(posts).map(({ subreddit }) => subreddit);
  const uniqueSubreddits = [...new Set(subreddits)];

  const handleClick = (e) => dispatch((e.target.id));
  const seeMore = () => setVisible(uniqueSubreddits.length);

  return (
    <div>
      <h2>Subreddit</h2>
      {uniqueSubreddits.slice(0, visible).map((subreddit) => (
        <ul style={{ margin: '0 20px' }} key={subreddit}>
          <li onClick={handleClick} id={subreddit}>
            {subreddit}
          </li>
        </ul>
      ))}
      {visible > 5 ? null : <button onClick={seeMore}>Show More</button>}
    </div>
  );
};

export default Subreddit;
