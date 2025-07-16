import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../css/home.css"
const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    if (email && email.includes('@')) {
      alert('Email submitted: ' + email);
      setEmail('');
    } else {
      alert('Please enter a valid email address');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleEmailSubmit();
    }
  };

  return (
    <footer className="bg-dark py-4">
      <div className="contaner_custom">
        <div className="d-flex flex-column gap-5 justify-content-start align-items-center w-100">
          <div className="d-flex justify-content-center align-items-center w-100 mt-5">
            <div className="row w-100 gy-4">
              {/* Exclusive Section */}
              <div className="col-12 col-lg-3">
                <div className="d-flex flex-column gap-3">
                  <div className="d-flex flex-column gap-4">
                    <div className="d-flex flex-column gap-3">
                      <h2 className="text-white mb-0 fw-bold" style={{ fontSize: '24px', fontFamily: 'Inter' }}>
                        Exclusive
                      </h2>
                      <h3 className="text-white mb-0 fw-medium" style={{ fontSize: '20px' }}>
                        Subscribe
                      </h3>
                    </div>
                    <p className="text-white mb-0" style={{ fontSize: '16px' }}>
                      Get 10% off your first order
                    </p>
                  </div>
                  <div className="position-relative">
                    <input
                      type="email"
                      className="form-control bg-dark text-white border-white"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyPress={handleKeyPress}
                      style={{ paddingRight: '40px' }}
                    />
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="position-absolute text-white"
                      style={{ 
                        right: '12px', 
                        top: '50%', 
                        transform: 'translateY(-50%)', 
                        cursor: 'pointer' 
                      }}
                      onClick={handleEmailSubmit}
                    >
                      <path d="M2 12l20-8-8 20-4-12-8-4z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Support Section */}
              <div className="col-12 col-lg-2">
                <div className="d-flex flex-column gap-3">
                  <h3 className="text-white mb-0 fw-medium" style={{ fontSize: '20px' }}>
                    Support
                  </h3>
                  <p className="text-white mb-0" style={{ fontSize: '16px' }}>
                    111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                  </p>
                  <p className="text-white mb-0" style={{ fontSize: '16px' }}>
                    exclusive@gmail.com
                  </p>
                  <p className="text-white mb-0" style={{ fontSize: '16px' }}>
                    +88015-88888-9999
                  </p>
                </div>
              </div>

              {/* Account Section */}
              <div className="col-12 col-lg-2">
                <div className="d-flex flex-column gap-3">
                  <h3 className="text-white mb-0 fw-medium" style={{ fontSize: '20px' }}>
                    Account
                  </h3>
                  <p className="text-white mb-0" style={{ fontSize: '16px' }}>
                    My Account
                  </p>
                  <p className="text-white mb-0" style={{ fontSize: '16px' }}>
                    Login / Register
                  </p>
                  <p className="text-white mb-0" style={{ fontSize: '16px' }}>
                    Cart
                  </p>
                  <p className="text-white mb-0" style={{ fontSize: '16px' }}>
                    Wishlist
                  </p>
                  <p className="text-white mb-0" style={{ fontSize: '16px' }}>
                    Shop
                  </p>
                </div>
              </div>

              {/* Quick Link Section */}
              <div className="col-12 col-lg-2">
                <div className="d-flex flex-column gap-3">
                  <h3 className="text-white mb-0 fw-medium" style={{ fontSize: '20px' }}>
                    Quick Link
                  </h3>
                  <ul className="list-unstyled d-flex flex-column gap-2">
                    <li>
                      <a href="#" className="text-white text-decoration-none" style={{ fontSize: '16px' }}>
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white text-decoration-none" style={{ fontSize: '16px' }}>
                        Terms Of Use
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white text-decoration-none" style={{ fontSize: '16px' }}>
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-white text-decoration-none" style={{ fontSize: '16px' }}>
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Download App Section */}
              <div className="col-12 col-lg-3">
                <div className="d-flex flex-column gap-3">
                  <h3 className="text-white mb-0 fw-medium" style={{ fontSize: '20px' }}>
                    Download App
                  </h3>
                  <div className="d-flex flex-column gap-4">
                    <div className="d-flex flex-column gap-2">
                      <p className="text-secondary mb-0" style={{ fontSize: '12px' }}>
                        Save $3 with App New User Only
                      </p>
                      <div className="d-flex gap-3 align-items-center">
                        <div 
                          className="bg-secondary rounded d-flex align-items-center justify-content-center text-white"
                          style={{ width: '76px', height: '76px', fontSize: '12px' }}
                        >
                          QR Code
                        </div>
                        <div className="d-flex flex-column gap-1 flex-grow-1">
                          <div 
                            className="bg-secondary rounded d-flex align-items-center justify-content-center text-white p-1"
                            style={{ height: '32px', fontSize: '12px' }}
                          >
                            Google Play
                          </div>
                          <div 
                            className="bg-secondary rounded d-flex align-items-center justify-content-center text-white p-1"
                            style={{ height: '36px', fontSize: '12px' }}
                          >
                            App Store
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="d-flex flex-column gap-3 align-items-center w-100">
            <hr className="border-white w-100" style={{ height: '1px' }} />
            <div className="d-flex gap-2 justify-content-center align-items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
                <circle cx="12" cy="12" r="10" />
                <path d="M16 8a6 6 0 0 0-6 6c0 1-2 3-2 3" />
                <path d="M9 15a6 6 0 0 0 6-6c0-1 2-3 2-3" />
              </svg>
              <p className="text-white mb-0" style={{ fontSize: '16px' }}>
                Copyright Rimel 2022. All right reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;