import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from '../../css/components/CartPage.module.css';

const CartPage = () => {
  const { cart, total, removeFromCart, clearCart } = useCart();

  return (
    <div className={styles.container}>
      <h2>Your Cart</h2>
      
      {cart.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Your cart is empty</p>
          <Link to="/templates" className={styles.continueShopping}>
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className={styles.cartItems}>
            {cart.map(item => (
              <div key={item.id} className={styles.cartItem}>
                <img 
                  src={item.thumbnail} 
                  alt={item.name}
                  className={styles.itemThumbnail}
                />
                <div className={styles.itemDetails}>
                  <h3>{item.name}</h3>
                  <span>${item.price}</span>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className={styles.cartSummary}>
            <div className={styles.total}>
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <div className={styles.actions}>
              <button onClick={clearCart} className={styles.clearButton}>
                Clear Cart
              </button>
              <Link to="/checkout" className={styles.checkoutButton}>
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;