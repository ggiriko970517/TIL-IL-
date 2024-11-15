import React from 'react';
import Profile from './Profile';
import CommentActions from './CommentActions';

const Comment = ({ comment }) => {
  const { author, content, createdAt } = comment;

  return (
    <div className="comment">
      <Profile author={author} />
      <div className="comment-content">
        <p>{content}</p>
        <small>{new Date(createdAt).toLocaleString()}</small>
      </div>
      <CommentActions />
    </div>
  );
};

export default Comment;

