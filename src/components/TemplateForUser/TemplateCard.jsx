import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from '../../css/components/TemplateCard.module.css';

const TemplateCard = ({ template }) => {
  const { addToCart } = useCart();

  return (
    <div className={styles.card}>
      <Link to={`/templates/${template.slug}`} className={styles.thumbnailLink}>
        <img 
          src={template.thumbnail} 
          alt={template.name}
          className={styles.thumbnail}
          onError={(e) => e.target.src = '/images/templates/default.jpg'}
        />
      </Link>
      
      <div className={styles.cardBody}>
        <h3 className={styles.title}>
          <Link to={`/templates/${template.slug}`}>{template.name}</Link>
        </h3>
        <p className={styles.category}>{template.category}</p>
        <p className={styles.description}>{template.description}</p>
        
        <div className={styles.footer}>
          <span className={styles.price}>${template.price}</span>
          <button 
            onClick={() => addToCart(template)}
            className={styles.addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;