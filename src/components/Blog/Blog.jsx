import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../Common/SectionTitle';
import SingleBlog from './SingleBlog';
import { BlogContext } from '../../context/BlogContext';
import { useAuth } from '../../context/AuthContext';
import '../../css/blog/Blog.css';

const Blog = () => {
  const { blogs, addBlog, editBlog, deleteBlog } = useContext(BlogContext);
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formBlog, setFormBlog] = useState({
    title: '',
    paragraph: '',
    content: '',
    image: '',
    tags: [],
    author: user ? { 
      name: `${user.firstName} ${user.lastName}`,
      image: user.avatar || '/images/avatars/default.jpg',
      designation: user.designation || 'Writer'
    } : null,
    authorId: user?.id || null
  });
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('author.')) {
      setFormBlog({
        ...formBlog,
        author: { ...formBlog.author, [name.split('.')[1]]: value }
      });
    } else if (name === 'tags') {
      setFormBlog({ ...formBlog, tags: value.split(',').map(tag => tag.trim()) });
    } else {
      setFormBlog({ ...formBlog, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await editBlog({ ...formBlog, id: editId });
      setIsEditing(false);
      setEditId(null);
    } else {
      await addBlog(formBlog);
    }
    setFormBlog({
      title: '',
      paragraph: '',
      content: '',
      image: '',
      tags: [],
      author: user ? { 
        name: `${user.firstName} ${user.lastName}`,
        image: user.avatar || '/images/avatars/default.jpg',
        designation: user.designation || 'Writer'
      } : null,
      authorId: user?.id || null
    });
  };

  const handleEdit = (blog) => {
    setIsEditing(true);
    setEditId(blog.id);
    setFormBlog({ ...blog });
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this blog?')) {
      await deleteBlog(id);
    }
  };

  return (
    <section id="blog" className="blog-section">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />
        
        {user && (
          <div className="create-blog-button">
            <Link to="/blogs/new" className="btn btn-primary">
              Create New Blog
            </Link>
          </div>
        )}

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={`blog-${blog.id}`} className="w-full">
              <SingleBlog 
                blog={blog} 
                onEdit={user?.id === blog.authorId ? handleEdit : null}
                onDelete={user?.id === blog.authorId ? handleDelete : null}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;