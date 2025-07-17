import React from 'react';
import './SingleTestimonial.css';

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="rating-star">
        {starIcon}
      </span>,
    );
  }

  return (
    <div className="w-full">
      <div className="testimonial-card">
        <div className="rating-container">{ratingIcons}</div>
        <p className="testimonial-content">
          “{content}
        </p>
        <div className="author-container">
          <div className="author-image-wrapper">
            <img src={image} alt={name} className="author-image" />
          </div>
          <div className="author-info">
            <h3 className="author-name">{name}</h3>
            <p className="author-designation">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;