import React from 'react';
import '../App.css';

function NotFound() {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <a href="/" className="auth-btn main">Go Home</a>
    </div>
  );
}

export default NotFound; 