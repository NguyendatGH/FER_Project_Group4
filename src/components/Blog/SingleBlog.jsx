import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import '../../css/blog/SingleBlog.css';

const SingleBlog = ({ blog, onEdit, onDelete }) => {
  const { user } = useAuth();
  const { id, title, image, paragraph, author, tags, publishDate, authorId } = blog;
  
  const isOwner = user && user.id === authorId;

  return (
    <div className="blog-card">
      <Link to={`/blogs/${id}`} className="blog-image-wrapper">
        <span className="tag-label">{tags[0]}</span>
        <img src={image} alt="" className="blog-image" />
      </Link>
      <div className="blog-content">
        <h3>
          <Link to={`/blogs/${id}`} className="blog-title">
            {title}
          </Link>
        </h3>
        <p className="blog-paragraph">{paragraph}</p>
        <div className="blog-footer">
          <div className="author-section">
            <div className="author-image-wrapper">
              <img src={author.image} alt="author" className="author-image" />
            </div>
            <div className="author-info">
              <h4 className="author-name">By {author.name}</h4>
              <p className="author-designation">{author.designation}</p>
            </div>
          </div>
          <div className="date-section">
            <h4 className="date-label">Date</h4>
            <p className="date-text">{publishDate}</p>
          </div>
        </div>
        {isOwner && onEdit && onDelete && (
          <div className="blog-actions">
            <button 
              onClick={() => onDelete(id)} 
              className="delete-button"
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleBlog;