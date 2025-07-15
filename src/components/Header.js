import React from 'react';
import '../App.css';

function Header() {
  return (
    <header className="main-header">
      <div className="header-banner">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <a href="#" className="header-banner-link">ShopNow</a>
        <span className="header-lang">English <span className="header-lang-caret">▼</span></span>
      </div>
      <nav className="header-nav">
        <div className="header-logo">Exclusive</div>
        <ul className="header-menu">
          <li><a href="/">Home</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">About</a></li>
          <li><a href="/signup">Sign Up</a></li>
        </ul>
        <div className="header-search">
          <input type="text" placeholder="What are you looking for?" />
          <span className="header-search-icon">🔍</span>
        </div>
      </nav>
    </header>
  );
}

export default Header; 