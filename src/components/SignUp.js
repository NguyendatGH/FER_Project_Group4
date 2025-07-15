import React from 'react';
import '../App.css';

function SignUp() {
  return (
    <div className="auth-container">
      <div className="auth-image-section">
        <img src="/images/shopping-cart-phone.jpg" alt="Shopping" className="auth-image" />
      </div>
      <div className="auth-form-section">
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <form className="auth-form">
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Email or Phone Number" required />
          <input type="password" placeholder="Password" required />
          <button type="submit" className="auth-btn main">Create Account</button>
          <button type="button" className="auth-btn google">Sign up with Google</button>
        </form>
        <div className="auth-link">
          Already have account? <a href="/login">Log in</a>
        </div>
      </div>
    </div>
  );
}

export default SignUp; 