import React from 'react';
import './RelatedPost.css';

const RelatedPost = ({ image, slug, title, date }) => {
  return (
    <div className="related-post">
      <div className="post-image-wrapper">
        <img src={image} alt={title} className="post-image" />
      </div>
      <div className="post-content">
        <h5>
          <a href={slug} className="post-title">
            {title}
          </a>
        </h5>
        <p className="post-date">{date}</p>
      </div>
    </div>
  );
};

export default RelatedPost;