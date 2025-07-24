import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogContext } from '../../context/BlogContext';
import { useAuth } from '../../context/AuthContext';
import styles from '../../css/components/BlogDetails.module.css';

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs } = useContext(BlogContext);
  const { user } = useAuth();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/blogs/${id}`);
        if (!response.ok) {
          throw new Error('Blog not found');
        }
        const data = await response.json();
        setBlog(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // First check local context
    const localBlog = blogs.find(b => b.id === parseInt(id));
    if (localBlog) {
      setBlog(localBlog);
      setLoading(false);
    } else {
      // If not found locally, fetch from server
      fetchBlog();
    }
  }, [id, blogs]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (error) return <div className={styles.error}>{error}</div>;
  if (!blog) return <div className={styles.notFound}>Blog not found</div>;

  const isOwner = user && user.id === blog.authorId;

  return (
    <div className={styles.container}>
      <img src={blog.image} alt={blog.title} className={styles.image} />
      
      <div className={styles.content}>
        <div className={styles.header}>
          <h1>{blog.title}</h1>
          {isOwner && (
            <Link to={`/blogs/edit/${blog.id}`} className={styles.editButton}>
              Edit Post
            </Link>
          )}
        </div>

        <div className={styles.meta}>
          <span className={styles.tags}>
            {blog.tags.map(tag => (
              <span key={tag} className={styles.tag}>#{tag}</span>
            ))}
          </span>
          <span className={styles.date}>
            Posted on {new Date(blog.createdAt).toLocaleDateString()}
          </span>
        </div>

        <div className={styles.body}>
          {blog.content.split('\n').map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;