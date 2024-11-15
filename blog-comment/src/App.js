import React from 'react';
import CommentList from './components/CommentList';  // 댓글 목록을 렌더링하는 컴포넌트

const App = () => {
  return (
    <div className="app">
      <h1>블로그 댓글</h1>
      <CommentList />
    </div>
  );
};

export default App;

