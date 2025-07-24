import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from '../../css/components/TemplateDetails.module.css';

const TemplateDetails = () => {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const [template, setTemplate] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedTemplates, setRelatedTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplate = async () => {
      try {
        // Fetch the specific template
        const response = await fetch(`http://localhost:5000/templates?slug=${slug}`);
        const data = await response.json();
        
        if (data.length === 0) {
          throw new Error('Template not found');
        }
        
        setTemplate(data[0]);
        
        // Fetch related templates (same category)
        const relatedResponse = await fetch(
          `http://localhost:5000/templates?category=${data[0].category}&id_ne=${data[0].id}&_limit=3`
        );
        const relatedData = await relatedResponse.json();
        setRelatedTemplates(relatedData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTemplate();
  }, [slug]);

  if (loading) return <div className={styles.loading}>Loading template...</div>;
  if (error) return <div className={styles.error}>Error: {error}</div>;
  if (!template) return <div className={styles.notFound}>Template not found</div>;

  return (
    <div className={styles.container}>
      <div className={styles.templateHeader}>
        <div className={styles.thumbnailContainer}>
          <img 
            src={template.thumbnail} 
            alt={template.name}
            className={styles.mainThumbnail}
            onError={(e) => e.target.src = '/images/templates/default.jpg'}
          />
        </div>
        
        <div className={styles.templateInfo}>
          <h1 className={styles.title}>{template.name}</h1>
          <p className={styles.category}>{template.category}</p>
          
          <div className={styles.priceSection}>
            <span className={styles.price}>${template.price}</span>
            {template.featured && (
              <span className={styles.featuredBadge}>Featured</span>
            )}
          </div>
          
          <p className={styles.description}>{template.description}</p>
          
          <div className={styles.tags}>
            {template.tags.map(tag => (
              <span key={tag} className={styles.tag}>#{tag}</span>
            ))}
          </div>
          
          <button 
            onClick={() => addToCart(template)}
            className={styles.addToCartButton}
          >
            Add to Cart
          </button>
          
          <a 
            href={template.previewUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.previewButton}
          >
            Live Preview
          </a>
        </div>
      </div>
      
      <div className={styles.templateContent}>
        <div className={styles.detailsSection}>
          <h2>Template Details</h2>
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <h3>Created</h3>
              <p>{new Date(template.createdAt).toLocaleDateString()}</p>
            </div>
            <div className={styles.detailItem}>
              <h3>Last Updated</h3>
              <p>{new Date(template.updatedAt).toLocaleDateString()}</p>
            </div>
            <div className={styles.detailItem}>
              <h3>Category</h3>
              <p>{template.category}</p>
            </div>
            <div className={styles.detailItem}>
              <h3>Status</h3>
              <p className={template.status === 'published' ? styles.published : styles.draft}>
                {template.status}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {relatedTemplates.length > 0 && (
        <div className={styles.relatedTemplates}>
          <h2>Related Templates</h2>
          <div className={styles.relatedGrid}>
            {relatedTemplates.map(template => (
              <div key={template.id} className={styles.relatedCard}>
                <Link to={`/templates/${template.slug}`}>
                  <img 
                    src={template.thumbnail} 
                    alt={template.name}
                    className={styles.relatedThumbnail}
                  />
                  <h3>{template.name}</h3>
                  <p>${template.price}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateDetails;