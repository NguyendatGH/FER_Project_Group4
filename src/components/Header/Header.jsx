import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useAuth } from "../../context/AuthContext";

const LogoIcon = () => (
  <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
    <g fill="#4a6cf7">
      <path d="M0 0c13.8071 0 25 11.1929 25 25h-23c-1.10457 0-2-.8954-2-2z"/>
      <path d="M6 25c0-13.8071 11.1929-25 25-25v23c0 1.1046-.8954 2-2 2z" opacity=".5"/>
    </g>
  </svg>
);

const pages = [
  { name: "About Page", to: "/about" },
  { name: "Blog Grid Page", to: "/blog" },
  { name: "Blog Details Page", to: "/blog/1" },
  { name: "Support page", to: "/support" },
  { name: "Sign In Page", to: "/signin" },
  { name: "Sign Up Page", to: "/signup" },
  { name: "Error Page", to: "/not-found" },
];

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target)
      ) {
        setUserMenuOpen(false);
      }
    };
    if (open || userMenuOpen) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, userMenuOpen]);

  const handleLogout = () => {
    if (window.confirm('Bạn có chắc chắn muốn đăng xuất?')) {
      logout();
      setUserMenuOpen(false);
      navigate('/');
      alert('Đã đăng xuất thành công! Bạn có thể đăng ký tài khoản khác.');
    }
  };

  return (
    <header className={styles.headerRoot}>
      <Link to="/" className={styles.logoWrap}>
        <LogoIcon />
        <span className={styles.logoText}>Startup</span>
      </Link>
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/about" className={styles.navLink}>About</Link>
        <Link to="/blog" className={styles.navLink}>Blog</Link>
        <Link to="/support" className={styles.navLink}>Support</Link>
        <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
          <button
            ref={buttonRef}
            className={styles.navLink}
            style={{ margin: 0, display: 'flex', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500, minWidth: 120, padding: '8px 20px' }}
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="true"
            aria-expanded={open}
            tabIndex={0}
          >
            Pages <span style={{ marginLeft: 4, color: "#BFC2C7", fontSize: 18, display: "inline-block", transform: "translateY(2px)" }}>▼</span>
          </button>
          {open && (
            <div ref={dropdownRef} className={styles.dropdownMenu} style={{zIndex: 9999}}>
              {pages.map((page) => (
                <Link
                  key={page.name}
                  to={page.to}
                  className={styles.dropdownItem}
                  onClick={() => setOpen(false)}
                >
                  {page.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
      <div style={{ display: "flex", alignItems: "center" }}>
        {user ? (
          <div style={{ position: "relative" }} ref={userMenuRef}>
            <button
              onClick={() => {
                setUserMenuOpen(!userMenuOpen);
              }}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                transition: 'background-color 0.3s ease',
                color: 'white'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <div className={styles.userAvatar}>
                {user.firstName ? user.firstName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
              </div>
              <span style={{ color: '#4a6cf7', fontWeight: '600' }}>
                {user.firstName ? `${user.firstName} ${user.lastName}` : user.email}
              </span>
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            {userMenuOpen && (
              <div className={styles.userDropdownMenu}>
                <div className={styles.userDropdownHeader}>
                  <div className={styles.userDropdownName}>
                    {user.firstName ? `${user.firstName} ${user.lastName}` : 'User'}
                  </div>
                  <div className={styles.userDropdownEmail}>
                    {user.email}
                  </div>
                </div>
                <div className={styles.userDropdownContent}>
                  <Link
                    to="/profile"
                    className={styles.userDropdownItem}
                    onClick={() => {
                      console.log('Profile link clicked');
                      setUserMenuOpen(false);
                    }}
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    Edit Profile
                  </Link>
                  
                  <Link
                    to="/change-password"
                    className={styles.userDropdownItem}
                    onClick={() => {
                      console.log('Change Password link clicked');
                      setUserMenuOpen(false);
                    }}
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <circle cx="12" cy="16" r="1"></circle>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    Change Password
                  </Link>
                  
                  <button
                    onClick={handleLogout}
                    className={styles.userDropdownButton}
                  >
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16,17 21,12 16,7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/signin" className={styles.signIn}>Sign In</Link>
            <Link to="/signup" className={styles.signUp}>Sign Up</Link>
          </>
        )}
        <span className={styles.sunIconWrap}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        </span>
      </div>
    </header>
  );
};

export default Header; 