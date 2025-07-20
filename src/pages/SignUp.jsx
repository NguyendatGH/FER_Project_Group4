import React from 'react';
import SignUp from '../components/Auth/SignUp';
import AuthSection from '../components/Auth/AuthSection';

const SignUpPage = () => {
  return (
    <AuthSection 
      title="Create Account" 
      subtitle="Join FER and start recognizing emotions with our advanced AI technology"
    >
      <SignUp />
    </AuthSection>
  );
};

export default SignUpPage; 