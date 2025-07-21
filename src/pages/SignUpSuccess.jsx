import React from 'react';
import { Link } from 'react-router-dom';
import AuthSection from '../components/Auth/AuthSection';
import '../css/auth/SignUpSuccess.css';

const SignUpSuccess = () => {
  return (
    <AuthSection 
      title="Registration Successful!" 
      subtitle="Welcome to FER! Your account has been created successfully."
    >
      <div className="success-content">
        <div className="success-icon">
          <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
            <polyline points="22,4 12,14.01 9,11.01"/>
          </svg>
        </div>
        
        <div className="success-message">
          <h3>Account Created Successfully!</h3>
          <p>
            Thank you for joining FER! Your account has been created and you can now 
            access all our facial emotion recognition features.
          </p>
        </div>

        <div className="next-steps">
          <h4>What's Next?</h4>
          <ul>
            <li>✅ Verify your email address</li>
            <li>🎯 Complete your profile</li>
            <li>🚀 Start using our FER features</li>
            <li>📚 Explore our documentation</li>
          </ul>
        </div>

        <div className="action-buttons">
          <Link to="/signin" className="btn btn-primary">
            Sign In Now
          </Link>
          <Link to="/" className="btn btn-secondary">
            Go to Homepage
          </Link>
        </div>

        <div className="help-section">
          <p>
            Need help? <Link to="/contact" className="help-link">Contact our support team</Link>
          </p>
        </div>
      </div>
    </AuthSection>
  );
};

export default SignUpSuccess; 