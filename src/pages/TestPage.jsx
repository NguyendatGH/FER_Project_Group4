import React from 'react';

const TestPage = () => {
  return (
    <div style={{ 
      padding: '120px 20px 40px 20px', 
      minHeight: '100vh', 
      background: '#f0f0f0',
      textAlign: 'center'
    }}>
      <h1 style={{ color: 'red', fontSize: '48px' }}>TEST PAGE</h1>
      <p style={{ fontSize: '24px' }}>Nếu bạn thấy trang này, routing hoạt động bình thường!</p>
    </div>
  );
};

export default TestPage; 