import React, { useState } from 'react';
import PropTypes from 'prop-types';

const PagerIndicator = ({ 
  totalPages = 5, 
  currentPage = 0, 
  onPageChange,
  className = '',
  ...props 
}) => {
  const [activePage, setActivePage] = useState(currentPage);

  const handlePageChange = (pageIndex) => {
    setActivePage(pageIndex);
    if (onPageChange) {
      onPageChange(pageIndex);
    }
  };

  return (
    <div className={`d-flex justify-content-center align-items-center gap-2 ${className}`} {...props}>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index)}
          className={`
            rounded-circle
            transition-all duration-300
            ${activePage === index 
              ? 'bg-light scale-110' 
              : 'bg-secondary hover:bg-light hover:scale-105'}
          `}
          style={{ width: '12px', height: '12px', border: 'none', outline: 'none' }}
          aria-label={`Go to page ${index + 1}`}
        />
      ))}
    </div>
  );
};

PagerIndicator.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  onPageChange: PropTypes.func,
  className: PropTypes.string,
};

export default PagerIndicator;