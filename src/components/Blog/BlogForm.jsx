import React, { useState, useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../../css/components/BlogForm.module.css';
import { BlogContext } from '../../context/BlogContext';
import { useAuth } from '../../context/AuthContext';

const BlogForm = ({ isEditMode = false }) => {
  const { id } = useParams();
  const { editBlog, addBlog, blogs } = useContext(BlogContext);
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    paragraph: '',
    tags: '',
    image: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(isEditMode);

  // Fetch blog data when in edit mode
  useEffect(() => {
    if (isEditMode) {
      const fetchBlogData = async () => {
        try {
          setIsLoading(true);
          setError(null);
          
          // First check if blog exists in context
          let blogToEdit = blogs.find(b => b.id === parseInt(id));
          
          // If not found in context, fetch from server
          if (!blogToEdit) {
            const response = await fetch(`http://localhost:5000/blogs/${id}`);
            if (!response.ok) {
              throw new Error('Blog not found');
            }
            blogToEdit = await response.json();
          }

          // Set form data with the fetched blog
          setFormData({
            title: blogToEdit.title,
            content: blogToEdit.content,
            paragraph: blogToEdit.paragraph || blogToEdit.content.substring(0, 150) + '...',
            tags: blogToEdit.tags?.join(', ') || '',
            image: blogToEdit.image || ''
          });
        } catch (err) {
          setError(err.message);
          console.error('Error fetching blog:', err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchBlogData();
    }
  }, [id, isEditMode, blogs]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
      return;
    }

    setIsSubmitting(true);
    setError(null);
    
    try {
      const blogData = {
        ...formData,
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        author: {
          name: `${user.firstName} ${user.lastName}`,
          image: user.avatar || '/images/avatars/default.jpg',
          designation: user.designation || 'Writer'
        },
        authorId: user.id,
        updatedAt: new Date().toISOString()
      };

      if (isEditMode) {
        await editBlog({ ...blogData, id: parseInt(id) });
      } else {
        blogData.createdAt = new Date().toISOString();
        blogData.publishDate = new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        });
        await addBlog(blogData);
      }
      navigate('/blogs');
    } catch (error) {
      setError(error.message || 'Failed to save blog');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>Loading blog data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.errorContainer}>
        <p className={styles.error}>{error}</p>
        <button onClick={() => navigate('/blogs')} className={styles.backButton}>
          Back to Blogs
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>{isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}</h2>
      
      {error && <div className={styles.formError}>{error}</div>}

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* Form fields remain the same as before */}
        <div className={styles.formGroup}>
          <label>Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            minLength="5"
            maxLength="100"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Short Description *</label>
          <textarea
            name="paragraph"
            value={formData.paragraph}
            onChange={handleChange}
            required
            minLength="20"
            maxLength="200"
            rows="3"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Content *</label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="10"
            required
            minLength="100"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="design, ui, web"
          />
        </div>

        <div className={styles.formGroup}>
          <label>Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
          {formData.image && (
            <div className={styles.imagePreviewContainer}>
              <img 
                src={formData.image} 
                alt="Preview" 
                className={styles.imagePreview}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'block';
                }}
              />
              <p className={styles.imageError} style={{ display: 'none' }}>
                Image failed to load
              </p>
            </div>
          )}
        </div>

        <div className={styles.buttons}>
          <button 
            type="button" 
            onClick={() => navigate('/blogs')}
            className={styles.cancelButton}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={styles.submitButton}
          >
            {isSubmitting ? (
              <>
                <span className={styles.spinner}></span>
                {isEditMode ? 'Updating...' : 'Publishing...'}
              </>
            ) : (
              isEditMode ? 'Update Blog' : 'Publish Blog'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default BlogForm;