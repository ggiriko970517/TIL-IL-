import React, { useState } from 'react';
import '../styles/CommentInput.css'


const CommentInput = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = () => {
    if (inputText.trim()) {
      onSubmit(inputText);
      setInputText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="댓글을 입력하세요"
        className="comment-input"
      />
      <button onClick={handleSubmit} >댓글 등록</button>
    </div>
  );
};

export default CommentInput;
