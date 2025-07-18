import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

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
  { name: "Contact Page", to: "/" },
  { name: "Blog Grid Page", to: "/blog" },
  { name: "Blog Sidebar Page", to: "/" },
  { name: "Blog Details Page", to: "/blog/1" },
  { name: "Sign In Page", to: "/" },
  { name: "Sign Up Page", to: "/" },
  { name: "Error Page", to: "/" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

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
    };
    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

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
        <Link to="/" className={styles.navLink}>Support</Link>
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
        <Link to="/" className={styles.signIn}>Sign In</Link>
        <Link to="/" className={styles.signUp}>Sign Up</Link>
        <span className={styles.sunIconWrap}>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
        </span>
      </div>
    </header>
  );
};

export default Header; 