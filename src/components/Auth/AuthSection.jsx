import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import '../../css/auth/AuthSection.css';

const AuthSection = ({ children, title, subtitle }) => {
  return (
    <section className="auth-section">
      <div className="container">
        <div className="auth-wrapper">
          <SectionTitle
            title={title}
            paragraph={subtitle}
            center
            mb="50px"
          />
          <div className="auth-content">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthSection; 