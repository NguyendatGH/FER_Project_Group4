import React from 'react';
import '../../css/components/SingleFeature.css';

const SingleFeature = ({ feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="feature-item">
      <div className="feature-item-wrapper">
        <div className="feat-icon-container">
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