import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-col footer-subscribe">
          <div className="footer-title">Exclusive</div>
          <div className="footer-subscribe-label">Subscribe</div>
          <div className="footer-subscribe-desc">Get 10% off your first order</div>
          <form className="footer-subscribe-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">&gt;</button>
          </form>
        </div>
        <div className="footer-col footer-support">
          <div className="footer-title">Support</div>
          <div>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</div>
          <div>exclusive@gmail.com</div>
          <div>+88015-88888-9999</div>
        </div>
        <div className="footer-col footer-account">
          <div className="footer-title">Account</div>
          <div>My Account</div>
          <div>Login / Register</div>
          <div>Cart</div>
          <div>Wishlist</div>
          <div>Shop</div>
        </div>
        <div className="footer-col footer-quicklink">
          <div className="footer-title">Quick Link</div>
          <div>Privacy Policy</div>
          <div>Terms Of Use</div>
          <div>FAQ</div>
          <div>Contact</div>
        </div>
        <div className="footer-col footer-download">
          <div className="footer-title">Download App</div>
          <div className="footer-download-desc">Save $3 with App New User Only</div>
          <div className="footer-download-row">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=90x90&data=https://yourapp.com" alt="QR Code" className="footer-qr" />
            <div className="footer-download-apps">
              <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="footer-app-img" /></a>
              <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="footer-app-img" /></a>
            </div>
          </div>
          <div className="footer-download-socials">
            <a href="#" className="footer-social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="footer-social"><i className="fab fa-twitter"></i></a>
            <a href="#" className="footer-social"><i className="fab fa-instagram"></i></a>
            <a href="#" className="footer-social"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; Copyright Rimel 2022. All right reserved
      </div>
    </footer>
  );
}

export default Footer; 