import React from "react";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import BlogDetails from "./components/Blog/BlogDetails";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignUpSuccess from "./pages/SignUpSuccess";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import { AuthProvider } from "./context/AuthContext";
import NotFound from "./pages/NotFound";
import SupportPage from "./pages/SupportPage";
import AdminRoute from "./components/AdminRoute/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard";
import TemplatesGrid from "./components/Template/TemplateGrid";
import TemplateForm from "./components/Template/TemplateForm";
import { CartProvider } from "./context/CartContext";
import TemplatesList from "./components/TemplateForUser/TemplateList";
import CartPage from "./components/TemplateForUser/CartPage";
import CheckoutPage from "./components/TemplateForUser/CheckoutPage";
import TemplateDetails from "./components/TemplateForUser/TemplateDetails";
import { BlogProvider } from "./context/BlogContext";
import Blog from "./components/Blog/Blog";
import BlogForm from "./components/Blog/BlogForm";
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BlogProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blog />} />
            <Route
              path="/blogs/new"
              element={<BlogForm isEditMode={false} />}
            />
            <Route
              path="/blogs/edit/:id"
              element={<BlogForm isEditMode={true} />}
            />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            <Route path="/blog-list" element={<BlogPage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup-success" element={<SignUpSuccess />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/templates" element={<TemplatesList />} />
            <Route path="/templates/:slug" element={<TemplateDetails />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route
              path="/admin/dashboard"
              element={
                <AdminRoute>
                  <AdminDashboard />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/templates"
              element={
                <AdminRoute>
                  <TemplatesGrid />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/templates/new"
              element={
                <AdminRoute>
                  <TemplateForm />
                </AdminRoute>
              }
            />
            <Route
              path="/admin/templates/edit/:id"
              element={
                <AdminRoute>
                  <TemplateForm />
                </AdminRoute>
              }
            />
          </Routes>
          <Footer />
        </BlogProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
