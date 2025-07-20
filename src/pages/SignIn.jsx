import React from 'react';
import SignIn from '../components/Auth/SignIn';
import AuthSection from '../components/Auth/AuthSection';

const SignInPage = () => {
  return (
    <AuthSection 
      title="Welcome Back" 
      subtitle="Sign in to your FER account and start recognizing emotions"
    >
      <SignIn />
    </AuthSection>
  );
};

export default SignInPage; 