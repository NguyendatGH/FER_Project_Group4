import React from 'react';
import StarRating from './StarRating';

function WishlistItem({ item, onRemove, onAddToCart }) {
    return (
        <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            border: '1px solid #e0e0e0',
            overflow: 'hidden',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
        }}>
            <div style={{
                position: 'relative',
                backgroundColor: '#f5f5f5',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px'
            }}>
                {item.discount && (
                    <span style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: '#dc3545',
                        color: 'white',
                        fontSize: '12px',
                        padding: '4px 8px',
                        borderRadius: '4px'
                    }}>
                        {item.discount}
                    </span>
                )}
                <button
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        padding: '4px 8px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                    onClick={() => onRemove(item.id)}
                    title="Remove from wishlist"
                >
                    🗑️
                </button>
                <img
                    src={item.image}
                    alt={item.name}
                    style={{
                        maxHeight: '150px',
                        maxWidth: '100%',
                        objectFit: 'contain'
                    }}
                />
            </div>

            <div style={{ padding: '16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <button
                    style={{
                        backgroundColor: 'black',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        marginBottom: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                    }}
                    onClick={() => onAddToCart(item)}
                >
                    <span>🛒</span>
                    Add To Cart
                </button>

                <h3 style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    marginBottom: '8px',
                    minHeight: '40px',
                    margin: '0 0 8px 0'
                }}>
                    {item.name}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ color: '#dc3545', fontWeight: 'bold' }}>${item.price}</span>
                    {item.originalPrice && (
                        <span style={{
                            color: '#666',
                            textDecoration: 'line-through',
                            fontSize: '12px'
                        }}>
                            ${item.originalPrice}
                        </span>
                    )}
                </div>

                {item.rating && (
                    <div style={{ marginTop: 'auto' }}>
                        <StarRating rating={item.rating} reviews={item.reviews} />
                    </div>
                )}
            </div>
        </div>
    );
}

export default WishlistItem;