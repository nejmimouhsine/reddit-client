import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
// import { fetchComments } from './api/redditAPI';
import { getComments, selectComments } from './features/Comments/commentsSlice';

function App() {
  const comments = useSelector(selectComments);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  console.log(comments);

  return <div>My App</div>;
}

export default App;
