import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
import Checkout from './Checkout';
import Account from './Account';
import ProductDetail from './ProductDetail';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/account" element={<Account />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/ProductDetail" element={<ProductDetail />} />
        <Route path="/" element={<Cart />} />
        {/* Có thể thêm các route khác ở đây */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
