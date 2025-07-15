import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <span className="header-sale">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className="header-shopnow">ShopNow</a></span>
        <span className="header-lang">English <span className="header-lang-arrow">▼</span></span>
      </div>
      <div className="header-main">
        <div className="header-logo">Exclusive</div>
        <nav className="header-nav">
          <a href="#" className="header-link">Home</a>
          <a href="#" className="header-link">Contact</a>
          <a href="#" className="header-link">About</a>
          <a href="#" className="header-link">Sign Up</a>
        </nav>
        <div className="header-search-icons">
          <div className="header-search-group">
            <input type="text" className="header-search" placeholder="What are you looking for?" />
            <button className="header-search-btn">
              <svg width="18" height="18" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
          </div>
          <div className="header-icon-badge-wrap">
            <img src="/image/Wishlist.svg" alt="Wishlist" className="header-icon-img" />
            <span className="header-badge">2</span>
          </div>
          <div className="header-icon-badge-wrap">
            <img src="/image/Cart1 with buy.svg" alt="Cart" className="header-icon-img" />
            <span className="header-badge">4</span>
          </div>
          <img src="/image/user.svg" alt="User" className="header-icon-img" />
        </div>
      </div>
    </header>
  );
}

export default Header; 