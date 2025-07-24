import React, { useContext } from 'react';
import SingleBlog from '../components/Blog/SingleBlog';
import { BlogContext } from '../context/BlogContext';
import '../css/blog/BlogPage.css';

const BlogPage = () => {
  const { blogs } = useContext(BlogContext);
  
  return (
    <div className="blog-container">
      {blogs.map((blog) => (
        <div key={`blogpage-${blog.id}`}>
          <SingleBlog blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;