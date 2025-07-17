import React from 'react';
import './SectionTitle.css';

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
}) => {
  return (
    <>
      <div
        className={`section-title-wrapper ${center ? "center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="section-title">
          {title}
        </h2>
        <p className="section-text">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;