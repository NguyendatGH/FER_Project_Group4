import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from './blogData';
import './BlogDetails.css';


const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogData.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const { title, image, paragraph, author, tags, publishDate } = blog;

  return (
    <div className="blog-details">
      <img src={image} alt={title} className="blog-detail-image" />
      <h1>{title}</h1>
      <p className="blog-tag">{tags.join(', ')}</p>
      <p className="blog-content">{paragraph}</p>
      <div className="author-info">
        <img src={author.image} alt={author.name} className="author-detail-image" />
        <div>
          <h3>{author.name}</h3>
          <p>{author.designation}</p>
        </div>
      </div>
      <p className="publish-date">Published on: {publishDate}</p>
    </div>
  );
};

export default BlogDetails;