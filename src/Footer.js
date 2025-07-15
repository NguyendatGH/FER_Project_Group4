import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-col">
          <div className="footer-logo">Exclusive</div>
          <div className="footer-subscribe">Subscribe</div>
          <div className="footer-desc">Get 10% off your first order</div>
          <div className="footer-input-group">
            <input type="email" placeholder="Enter your email" className="footer-input" />
            <button className="footer-btn">→</button>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-title">Support</div>
          <div>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</div>
          <div>exclusive@gmail.com</div>
          <div>+88015-88888-9999</div>
        </div>
        <div className="footer-col">
          <div className="footer-title">Account</div>
          <div>My Account</div>
          <div>Login / Register</div>
          <div>Cart</div>
          <div>Wishlist</div>
          <div>Shop</div>
        </div>
        <div className="footer-col">
          <div className="footer-title">Quick Link</div>
          <div>Privacy Policy</div>
          <div>Terms Of Use</div>
          <div>FAQ</div>
          <div>Contact</div>
        </div>
        <div className="footer-col">
          <div className="footer-title">Download App</div>
          <div className="footer-app-desc">Save $3 with App New User Only</div>
          <div className="footer-apps">
            <div className="footer-app-img footer-app-google" />
            <div className="footer-app-img footer-app-apple" />
          </div>
          <div className="footer-socials">
            <span className="footer-social">f</span>
            <span className="footer-social">t</span>
            <span className="footer-social">i</span>
            <span className="footer-social">in</span>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        © Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}

export default Footer; 