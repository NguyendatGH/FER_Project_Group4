import React from 'react';

function StarRating({ rating, reviews }) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        stars.push(
            <span key={i} style={{ color: i <= rating ? '#ffc107' : '#e0e0e0', fontSize: '14px' }}>
                ★
            </span>
        );
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div>{stars}</div>
            <span style={{ fontSize: '12px', color: '#666' }}>({reviews})</span>
        </div>
    );
}

export default StarRating;