import React from 'react';
import SectionTitle from '../Common/SectionTitle';
import SingleBlog from './SingleBlog';
import blogData from './blogData';
import '../../css/blog/Blog.css';

const Blog = () => {
  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
        <div className="blog-grid">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;                                