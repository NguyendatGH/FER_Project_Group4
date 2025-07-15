import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  return (
    <div className="cart-container">
      <div className="cart-breadcrumb">Home / <span>Cart</span></div>
      <div className="cart-table-wrapper">
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cart-product">
                <div className="cart-product-img-wrap">
                  <img src="/image/g27cq4-500x500 1.png" alt="LCD Monitor" className="cart-product-img" />
                  <span className="cart-product-sale">-20%</span>
                </div>
                <span>LCD Monitor</span>
              </td>
              <td>$650</td>
              <td>
                <select defaultValue="1" className="cart-qty-select">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </td>
              <td>$650</td>
            </tr>
            <tr>
              <td className="cart-product">
                <div className="cart-product-img-wrap">
                  <img src="/image/Gamepad-Cart-Small.png" alt="H1 Gamepad" className="cart-product-img" />
                </div>
                <span>H1 Gamepad</span>
              </td>
              <td>$550</td>
              <td>
                <select defaultValue="2" className="cart-qty-select">
                  <option>01</option>
                  <option>02</option>
                  <option>03</option>
                </select>
              </td>
              <td>$1100</td>
            </tr>
          </tbody>
        </table>
        <div className="cart-actions">
          <button className="cart-btn cart-return-btn">Return To Shop</button>
          <button className="cart-btn cart-update-btn">Update Cart</button>
        </div>
      </div>
      <div className="cart-bottom">
        <div className="cart-coupon">
          <input type="text" className="cart-coupon-input" placeholder="Coupon Code" />
          <button className="cart-coupon-btn">Apply Coupon</button>
        </div>
        <div className="cart-total-box">
          <div className="cart-total-title">Cart Total</div>
          <div className="cart-total-row"><span>Subtotal:</span><span>$1750</span></div>
          <div className="cart-total-row"><span>Shipping:</span><span>Free</span></div>
          <div className="cart-total-row cart-total-final"><span>Total:</span><span>$1750</span></div>
          <button className="cart-checkout-btn" onClick={() => navigate('/checkout')}>Proceed to checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart; 