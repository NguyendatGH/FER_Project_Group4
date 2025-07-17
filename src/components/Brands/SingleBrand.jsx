import React from 'react';
import './Brands.css';

const SingleBrand = ({ brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="brand-item">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="brand-link"
      >
        <img src={image} alt={name} className="brand-image" />
      </a>
    </div>
  );
};

export default SingleBrand;