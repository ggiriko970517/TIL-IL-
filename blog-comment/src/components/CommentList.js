import React from 'react';
import Comment from './Comment';

const CommentList = () => {

  const mockComments = [
    {
      id: 1,
      author: { name: '', avatarUrl: 'https://via.placeholder.com/40' },
      content: '첫 번째 댓글입니다!',
      createdAt: '2024-11-14T12:00:00Z',
    },
    {
      id: 2,
      author: { name: '사용자2', avatarUrl: 'https://via.placeholder.com/40' },
      content: '두 번째 댓글입니다!',
      createdAt: '2024-11-14T12:05:00Z',
    },
  ];

  return (
    <div className="comment-list">
      {mockComments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
