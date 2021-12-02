import React from 'react';
import { useSelector } from 'react-redux';
import Comment from './Comment';
import { selectComments } from '../Comments/commentsSlice';

const Comments = () => {
  const comments = useSelector(selectComments);

  return Object.values(comments).map((comment) => (
    <Comment key={comment.id} comment={comment} />
  ));
};

export default Comments;
