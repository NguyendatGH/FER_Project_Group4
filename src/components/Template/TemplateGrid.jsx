import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../../css/components/TemplateGrid.module.css';

const TemplatesGrid = () => {
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await fetch('http://localhost:5000/templates');
        if (!response.ok) {
          throw new Error('Failed to fetch templates');
        }
        const data = await response.json();
        setTemplates(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this template?')) {
      try {
        await fetch(`http://localhost:5000/templates/${id}`, {
          method: 'DELETE'
        });
        setTemplates(templates.filter(template => template.id !== id));
      } catch (err) {
        console.error('Error deleting template:', err);
      }
    }
  };

  if (loading) return <div className={styles.loading}>Loading templates...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Template Management</h2>
        <Link to="/admin/templates/new" className={styles.addButton}>
          Add New Template
        </Link>
      </div>

      <div className={styles.grid}>
        {templates.map(template => (
          <div key={template.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <img 
                src={template.thumbnail} 
                alt={template.name} 
                className={styles.thumbnail}
                onError={(e) => {
                  e.target.src = '/images/templates/default.jpg';
                }}
              />
              <span className={`${styles.status} ${styles[template.status]}`}>
                {template.status}
              </span>
              {template.featured && (
                <span className={styles.featured}>Featured</span>
              )}
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.title}>{template.name}</h3>
              <p className={styles.category}>{template.category}</p>
              <p className={styles.description}>{template.description}</p>
              <div className={styles.tags}>
                {template.tags.map(tag => (
                  <span key={tag} className={styles.tag}>#{tag}</span>
                ))}
              </div>
            </div>

            <div className={styles.cardFooter}>
              <span className={styles.price}>${template.price}</span>
              <div className={styles.actions}>
                <Link 
                  to={`/admin/templates/edit/${template.id}`}
                  className={styles.editButton}
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(template.id)}
                  className={styles.deleteButton}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplatesGrid;