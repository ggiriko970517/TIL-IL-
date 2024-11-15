import React from 'react';

const CommentActions = () => {
  const handleLike = () => {
    console.log('좋아요 클릭됨!');
  };

  const handleReply = () => {
    console.log('답글 클릭됨!');
  };

  return (
    <div className="comment-actions">
      <button onClick={handleLike}>좋아요</button>
      <button onClick={handleReply}>답글</button>
    </div>
  );
};

export default CommentActions;
