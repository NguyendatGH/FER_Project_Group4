import React, { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import styles from '../../css/components/CheckoutPage.module.css';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cart, total, clearCart } = useCart();
  const { user } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // In a real app, you would call your payment API here
    console.log('Processing payment with:', {
      userId: user?.id,
      items: cart,
      total,
      paymentMethod
    });

    setOrderSuccess(true);
    clearCart();
    setIsProcessing(false);
  };

  if (orderSuccess) {
    return (
      <div className={styles.successContainer}>
        <h2>Order Successful!</h2>
        <p>Thank you for your purchase. Your templates are now available in your account.</p>
        <Link to="/templates" className={styles.continueShopping}>
          Browse More Templates
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h2>Checkout</h2>
      
      <div className={styles.checkoutGrid}>
        <div className={styles.orderSummary}>
          <h3>Order Summary</h3>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <div className={styles.orderTotal}>
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className={styles.paymentForm}>
          <h3>Payment Information</h3>
          
          <div className={styles.formGroup}>
            <label>Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="credit_card">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bank_transfer">Bank Transfer</option>
            </select>
          </div>

          {paymentMethod === 'credit_card' && (
            <>
              <div className={styles.formGroup}>
                <label>Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" required />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Expiry Date</label>
                  <input type="text" placeholder="MM/YY" required />
                </div>
                <div className={styles.formGroup}>
                  <label>CVV</label>
                  <input type="text" placeholder="123" required />
                </div>
              </div>
            </>
          )}

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={isProcessing || cart.length === 0}
          >
            {isProcessing ? 'Processing...' : 'Complete Purchase'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutPage;