import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import BlogDetails from './components/Blog/BlogDetails';
import Home from './pages/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignUpSuccess from './pages/SignUpSuccess';
import Profile from './pages/Profile';
import ChangePassword from './pages/ChangePassword';
import TestPage from './pages/TestPage';
// import QuickLogout from './components/Common/QuickLogout';
import { AuthProvider } from './context/AuthContext';

function App() {
  console.log('App component rendered');
  
  return (
    <AuthProvider>
      <Header />
      {/* <QuickLogout /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-success" element={<SignUpSuccess />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;