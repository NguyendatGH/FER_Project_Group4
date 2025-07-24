import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../../css/components/TemplateForm.module.css';

const TemplateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    slug: '',
    category: '',
    description: '',
    price: '',
    thumbnail: '',
    previewUrl: '',
    tags: '',
    featured: false,
    status: 'draft'
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (id) {
      const fetchTemplate = async () => {
        try {
          const response = await fetch(`http://localhost:5000/templates/${id}`);
          if (!response.ok) {
            throw new Error('Template not found');
          }
          const data = await response.json();
          setFormData({
            ...data,
            tags: data.tags.join(', ')
          });
        } catch (error) {
          console.error('Error fetching template:', error);
          navigate('/admin/templates');
        }
      };
      fetchTemplate();
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.slug.trim()) newErrors.slug = 'Slug is required';
    if (!formData.category.trim()) newErrors.category = 'Category is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    if (!formData.price || isNaN(formData.price)) newErrors.price = 'Valid price is required';
    if (!formData.thumbnail.trim()) newErrors.thumbnail = 'Thumbnail URL is required';
    if (!formData.previewUrl.trim()) newErrors.previewUrl = 'Preview URL is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      const templateData = {
        ...formData,
        price: Number(formData.price),
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        createdAt: id ? formData.createdAt : new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0]
      };

      const url = id 
        ? `http://localhost:5000/templates/${id}`
        : 'http://localhost:5000/templates';
      
      const method = id ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(templateData)
      });

      if (!response.ok) {
        throw new Error(id ? 'Failed to update template' : 'Failed to create template');
      }

      navigate('/admin/templates');
    } catch (error) {
      console.error('Error:', error);
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>{id ? 'Edit Template' : 'Add New Template'}</h2>
      
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Template Name*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? styles.errorInput : ''}
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="slug">Slug*</label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className={errors.slug ? styles.errorInput : ''}
            />
            {errors.slug && <span className={styles.error}>{errors.slug}</span>}
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="category">Category*</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={errors.category ? styles.errorInput : ''}
            >
              <option value="">Select a category</option>
              <option value="Landing Page">Landing Page</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Blog">Blog</option>
              <option value="Portfolio">Portfolio</option>
              <option value="Dashboard">Dashboard</option>
            </select>
            {errors.category && <span className={styles.error}>{errors.category}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="price">Price ($)*</label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              className={errors.price ? styles.errorInput : ''}
            />
            {errors.price && <span className={styles.error}>{errors.price}</span>}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Description*</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className={errors.description ? styles.errorInput : ''}
          />
          {errors.description && <span className={styles.error}>{errors.description}</span>}
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="thumbnail">Thumbnail URL*</label>
            <input
              type="text"
              id="thumbnail"
              name="thumbnail"
              value={formData.thumbnail}
              onChange={handleChange}
              className={errors.thumbnail ? styles.errorInput : ''}
            />
            {errors.thumbnail && <span className={styles.error}>{errors.thumbnail}</span>}
            {formData.thumbnail && (
              <div className={styles.imagePreview}>
                <img 
                  src={formData.thumbnail} 
                  alt="Thumbnail preview" 
                  onError={(e) => e.target.src = '/images/templates/default.jpg'}
                />
              </div>
            )}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="previewUrl">Preview URL*</label>
            <input
              type="text"
              id="previewUrl"
              name="previewUrl"
              value={formData.previewUrl}
              onChange={handleChange}
              className={errors.previewUrl ? styles.errorInput : ''}
            />
            {errors.previewUrl && <span className={styles.error}>{errors.previewUrl}</span>}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="tags">Tags (comma separated)</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            placeholder="e.g. blog, modern, responsive"
          />
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="featured"
                checked={formData.featured}
                onChange={handleChange}
              />
              <span className={styles.checkmark}></span>
              Featured Template
            </label>
          </div>
        </div>

        <div className={styles.formActions}>
          <button
            type="button"
            className={styles.cancelButton}
            onClick={() => navigate('/admin/templates')}
            disabled={isLoading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isLoading}
          >
            {isLoading ? (id ? 'Updating...' : 'Creating...') : (id ? 'Update Template' : 'Create Template')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TemplateForm;