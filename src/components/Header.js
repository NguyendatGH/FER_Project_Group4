import React from 'react';

function Header() {
    return (
        <header style={{
            backgroundColor: 'white',
            borderBottom: '1px solid #e0e0e0',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '64px'
            }}>
                <div>
                    <h1 style={{
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#000',
                        margin: 0
                    }}>
                        Exclusive
                    </h1>
                </div>
                <nav style={{ display: 'flex', gap: '32px' }}>
                    <a href="#" style={{ color: '#000', textDecoration: 'none' }}>Home</a>
                    <a href="#" style={{ color: '#000', textDecoration: 'none' }}>Contact</a>
                    <a href="#" style={{ color: '#000', textDecoration: 'none' }}>About</a>
                    <a href="#" style={{ color: '#000', textDecoration: 'none' }}>Sign Up</a>
                </nav>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ position: 'relative' }}>
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            style={{
                                width: '300px',
                                padding: '8px 40px 8px 16px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                outline: 'none'
                            }}
                        />
                        <button style={{
                            position: 'absolute',
                            right: '8px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <img
                                src="/images/icons/search.png"
                                alt="Search"
                                style={{ width: '20px', height: '20px' }}
                            />
                        </button>
                    </div>
                    <button style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/images/icons/heart.png"
                            alt="Wishlist"
                            style={{ width: '20px', height: '20px' }}
                        />
                    </button>
                    <button style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img
                            src="/images/icons/shopping-cart.png"
                            alt="Cart"
                            style={{ width: '20px', height: '20px' }}
                        />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
