import React from 'react';
import './SingleFeature.css';

const SingleFeature = ({ feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="content-wrapper">
        <div className="icon-container">
          {icon}
        </div>
        <h3 className="feature-title">
          {title}
        </h3>
        <p className="feature-text">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;