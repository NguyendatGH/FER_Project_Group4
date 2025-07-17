import React from 'react';
import SingleBlog from '../components/Blog/SingleBlog';
import blogData from '../components/Blog/blogData';
import '../css/BlogPage.css';


const BlogPage = () => {
  return (
    <div className="blog-container">
      {blogData.map((blog) => (
        <div key={blog.id}>
          <SingleBlog blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;