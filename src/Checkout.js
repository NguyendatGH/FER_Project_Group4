import React from 'react';
import './Checkout.css';

function Checkout() {
  return (
    <div className="checkout-container">
      <div className="checkout-breadcrumb">Account / My Account / Product / View Cart / <span>CheckOut</span></div>
      <div className="checkout-content">
        <div className="checkout-form-section">
          <h2 className="checkout-title">Billing Details</h2>
          <form className="checkout-form">
            <input className="checkout-input" placeholder="First Name*" required />
            <input className="checkout-input" placeholder="Company Name" />
            <input className="checkout-input" placeholder="Street Address*" required />
            <input className="checkout-input" placeholder="Apartment, floor, etc. (optional)" />
            <input className="checkout-input" placeholder="Town/City*" required />
            <input className="checkout-input" placeholder="Phone Number*" required />
            <input className="checkout-input" placeholder="Email Address*" required />
            <label className="checkout-save-info">
              <input type="checkbox" />
              Save this information for faster check-out next time
            </label>
          </form>
        </div>
        <div className="checkout-summary-section">
          <div className="checkout-summary-products">
            <div className="checkout-summary-row">
              <img src="/image/Gamepad-Cart-Small.png" alt="H1 Gamepad" className="checkout-summary-img" />
              <span>H1 Gamepad</span>
              <span className="checkout-summary-price">$1100</span>
            </div>
            <div className="checkout-summary-row">
              <img src="/image/g27cq4-500x500 1.png" alt="LCD Monitor" className="checkout-summary-img" />
              <span>LCD Monitor</span>
              <span className="checkout-summary-price">$650</span>
            </div>
          </div>
          <div className="checkout-summary-totals">
            <div className="checkout-summary-total-row"><span>Subtotal:</span><span>$1750</span></div>
            <div className="checkout-summary-total-row"><span>Shipping:</span><span>Free</span></div>
            <div className="checkout-summary-total-row checkout-summary-total-final"><span>Total:</span><span>$1750</span></div>
          </div>
          <div className="checkout-payment-methods">
            <label className="checkout-radio">
              <input type="radio" name="payment" /> Bank
            </label>
            <label className="checkout-radio">
              <input type="radio" name="payment" defaultChecked /> Cash on delivery
            </label>
            <div className="checkout-payment-icons">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/MasterCard_Logo.svg" alt="Mastercard" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Maestro_logo.svg" alt="Maestro" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/PayPal_2014_logo.png" alt="Paypal" />
            </div>
          </div>
          <div className="checkout-coupon-row">
            <input className="checkout-coupon-input" placeholder="Coupon Code" />
            <button className="checkout-coupon-btn">Apply Coupon</button>
          </div>
          <button className="checkout-placeorder-btn">Place Order</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout; 