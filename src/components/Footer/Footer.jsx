import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerRoot}>
      <svg className={styles.footer3dLogo} viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="footer3dA" x1="0" y1="0" x2="120" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4a6cf7" stopOpacity="0.7"/>
            <stop offset="1" stopColor="#232733" stopOpacity="0.2"/>
          </linearGradient>
        </defs>
        <polygon points="0,80 40,100 120,80 80,0 0,20" fill="url(#footer3dA)"/>
        <polygon points="0,80 40,100 40,40 0,20" fill="#232733" fillOpacity="0.5"/>
        <polygon points="40,100 120,80 80,0 40,40" fill="#4a6cf7" fillOpacity="0.3"/>
      </svg>
      <div className={styles.footerMain}>
        <div className={styles.footerCol1}>
          <div className={styles.logoRow}>
            <span className={styles.logoIcon}>
              <svg width="36" height="36" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g fill="#4a6cf7"><path d="M0 0c13.8071 0 25 11.1929 25 25h-23c-1.10457 0-2-.8954-2-2z"/><path d="M6 25c0-13.8071 11.1929-25 25-25v23c0 1.1046-.8954 2-2 2z" opacity=".5"/></g></svg>
            </span>
            <span className={styles.logoText}>Startup</span>
          </div>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis.</p>
          <div className={styles.socials}>
            <button type="button" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></button>
            <button type="button" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></button>
            <button type="button" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></button>
            <button type="button" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></button>
          </div>
        </div>
        <div className={styles.footerCol}>
          <h4>Useful Links</h4>
          <ul>
            <li><button type="button">Blog</button></li>
            <li><button type="button">Pricing</button></li>
            <li><button type="button">About</button></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Terms</h4>
          <ul>
            <li><button type="button">TOS</button></li>
            <li><button type="button">Privacy Policy</button></li>
            <li><button type="button">Refund Policy</button></li>
          </ul>
        </div>
        <div className={styles.footerCol}>
          <h4>Support & Help</h4>
          <ul>
            <li><button type="button">Open Support Ticket</button></li>
            <li><button type="button">Terms of Use</button></li>
            <li><button type="button">About</button></li>
          </ul>
        </div>
      </div>
      <div className={styles.footerBottom}>
        Template by Uldeck and Next.js Templates
      </div>
    </footer>
  );
};

export default Footer; 