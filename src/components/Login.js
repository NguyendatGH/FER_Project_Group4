import React from 'react';
import '../App.css';

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-image-section">
      <img src="/images/shopping-cart-phone.jpg" alt="Shopping" className="auth-image" />
      </div>
      <div className="auth-form-section">
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>
        <form className="auth-form">
          <input type="text" placeholder="Email or Phone Number" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-btn main">Log In</button>
        </form>
        <div className="auth-link">
          <a href="/forgot">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default Login; 