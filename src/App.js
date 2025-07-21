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
import { AuthProvider } from './context/AuthContext';
import NotFound from './pages/NotFound';
import SupportPage from './pages/SupportPage';
function App() {
  console.log('App component rendered');
  
  return (
    <AuthProvider>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup-success" element={<SignUpSuccess />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>
      <Footer />
    </AuthProvider>
  );
}

export default App;