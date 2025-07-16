import React from 'react';

const Header = () => {
  return (
    <header className="bg-dark py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center">
            <p className="text-white mb-0 text-center text-sm-start" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', lineHeight: '20px' }}>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            </p>
            <p className="text-white mb-0 fw-semibold text-decoration-underline ms-2" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', lineHeight: '20px' }}>
              ShopNow
            </p>
          </div>
          <div className="col-12 col-sm-6 d-flex justify-content-sm-end align-items-center mt-3 mt-sm-0">
            <p className="text-white mb-0 me-1" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '14px', lineHeight: '20px' }}>
              English
            </p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;