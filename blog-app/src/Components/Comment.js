import React, { useState } from 'react';
import Reply from './Reply';
import ReplyInput from './ReplyInput';
import '../styles/Comment.css';

const Comment = ({ comment, comments, updateComments }) => {
  const [showReplyInput, setShowReplyInput] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const toggleLike = () => {
    const updatedComments = comments.map((c) =>
      c.id === comment.id ? { ...c, likes: c.likes + 1 } : c
    );
    updateComments(updatedComments);
  };

  const toggleSecret = () => {
    const updatedComments = comments.map((c) =>
      c.id === comment.id ? { ...c, isSecret: !c.isSecret } : c
    );
    updateComments(updatedComments);
  };

  const deleteComment = () => {
    const updatedComments = comments.filter((c) => c.id !== comment.id);
    updateComments(updatedComments);
  };

  const addReply = (replyText) => {
    const updatedComments = comments.map((c) => {
      if (c.id === comment.id) {
        return {
          ...c,
          replies: [
            ...c.replies,
            {
              id: c.replies.length + 1,
              text: replyText,
              likes: 0,
              isSecret: false,
              profileImage: 'https://via.placeholder.com/50',
            },
          ],
        };
      }
      return c;
    });
    updateComments(updatedComments);
    setShowReplyInput(false);
  };

  return (
    <div style={{ margin: '10px 0', display: 'flex', alignItems: 'center' }}>
      <img src={comment.profileImage} alt="프로필" style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px' }} />
      <div className='Comment-container'>
        <strong>익명</strong>
        <p>{comment.isSecret ? '비밀 댓글입니다.' : comment.text}</p>

        <button className="Like-button" onClick={toggleLike}>
          <i className="fa-regular fa-heart"></i> ({comment.likes})
        </button>

        <div className='Comment-options'>
          <button onClick={() => setShowOptions(!showOptions)} className="More-button">
            <i className="fa-solid fa-ellipsis"></i>
          </button>

          {showOptions && (
            <div className='More-options'>
              <button onClick={() => setShowReplyInput(!showReplyInput)} className="Comment-button">
                답글 작성
              </button>
              <button onClick={toggleSecret}>
                {comment.isSecret ? '비밀 해제' : '비밀로 하기'}
              </button>
              <button onClick={deleteComment}>삭제</button>
              <button onClick={() => alert("신고 접수")}>신고</button>
            </div>
          )}
        </div>

        {showReplyInput && <ReplyInput onSubmit={addReply} />}
        
        {comment.replies.map((reply) => (
          <Reply key={reply.id} reply={reply} comment={comment} comments={comments} updateComments={updateComments} />
        ))}
      </div>
    </div>
  );
};

export default Comment;


