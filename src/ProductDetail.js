import React from 'react';
import './ProductDetail.css';

function ProductDetail() {
  return (
    <div className="product-detail-container">
      <div className="product-detail-breadcrumb">Account / Gaming / <span>Havic HV G-92 Gamepad</span></div>
      <div className="product-detail-content">
        <div className="product-detail-gallery">
          <div className="product-detail-thumbs">
            <img src="/image/Frame 895.png" alt="thumb1" className="product-detail-thumb" />
            <img src="/image/Frame 896.png" alt="thumb2" className="product-detail-thumb" />
            <img src="/image/Frame 897.png" alt="thumb3" className="product-detail-thumb" />
            <img src="/image/Frame 919.png" alt="thumb4" className="product-detail-thumb" />
          </div>
          <div className="product-detail-main-img-wrap">
            <img src="/image/Frame 894.png" alt="main" className="product-detail-main-img" />
          </div>
        </div>
        <div className="product-detail-info">
          <div className="product-detail-title">Havic HV G-92 Gamepad</div>
          <div className="product-detail-rating">
            <span className="product-detail-stars">★★★★☆</span>
            <span className="product-detail-review-count">(150 Reviews)</span>
            <span className="product-detail-stock">In Stock</span>
          </div>
          <div className="product-detail-price">$192.00</div>
          <div className="product-detail-desc">
            Playstation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
          </div>
          <div className="product-detail-options-row">
            <div className="product-detail-option-label">Colours:</div>
            <div className="product-detail-color color-red active" />
            <div className="product-detail-color color-black" />
          </div>
          <div className="product-detail-options-row">
            <div className="product-detail-option-label">Size:</div>
            <button className="product-detail-size-btn">XS</button>
            <button className="product-detail-size-btn">S</button>
            <button className="product-detail-size-btn active">M</button>
            <button className="product-detail-size-btn">L</button>
            <button className="product-detail-size-btn">XL</button>
          </div>
          <div className="product-detail-buy-row">
            <div className="product-detail-qty-box">
              <button className="product-detail-qty-btn">-</button>
              <span className="product-detail-qty">2</span>
              <button className="product-detail-qty-btn">+</button>
            </div>
            <button className="product-detail-buynow-btn">Buy Now</button>
            <button className="product-detail-wishlist-btn">
              <img src="/image/Wishlist.svg" alt="wishlist" />
            </button>
          </div>
          <div className="product-detail-services-box">
            <div className="product-detail-service-row">
              <img src="/image/icon-delivery.svg" alt="delivery" className="product-detail-service-icon" />
              <div>
                <div className="product-detail-service-title">Free Delivery</div>
                <div className="product-detail-service-desc">Enter your postal code for Delivery Availability</div>
              </div>
            </div>
            <div className="product-detail-service-row">
              <img src="/image/Icon-return.svg" alt="return" className="product-detail-service-icon" />
              <div>
                <div className="product-detail-service-title">Return Delivery</div>
                <div className="product-detail-service-desc">Free 30 Days Delivery Returns. <span className="product-detail-link">Details</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-detail-related">
        <div className="product-detail-related-title">
          <span className="product-detail-related-bar" /> Related Item
        </div>
        <div className="product-detail-related-list">
          <div className="product-detail-related-card">
            <div className="product-detail-related-top">
              <div className="product-detail-related-sale">-40%</div>
            </div>
            <div className="product-detail-related-img-box">
              <img src="/image/Gamepad-Cart-Small.png" alt="related1" className="product-detail-related-img" />
            </div>
            <div className="product-detail-related-name">HAVIT HV-G92 Gamepad</div>
            <div className="product-detail-related-price"><span>$120</span> <span className="old">$160</span></div>
            <div className="product-detail-related-rating">★★★★★ <span>(88)</span></div>
          </div>
          <div className="product-detail-related-card">
            <div className="product-detail-related-top">
              <div className="product-detail-related-sale">-35%</div>
            </div>
            <div className="product-detail-related-img-box">
              <img src="/image/Frame 570 (1).png" alt="related2" className="product-detail-related-img" />
            </div>
            <div className="product-detail-related-name">AK-900 Wired Keyboard</div>
            <div className="product-detail-related-price"><span>$960</span> <span className="old">$1160</span></div>
            <div className="product-detail-related-rating">★★★★★ <span>(75)</span></div>
            <button className="product-detail-related-add">Add To Cart</button>
          </div>
          <div className="product-detail-related-card">
            <div className="product-detail-related-top">
              <div className="product-detail-related-sale">-30%</div>
            </div>
            <div className="product-detail-related-img-box">
              <img src="/image/g27cq4-500x500 1.png" alt="related3" className="product-detail-related-img" />
            </div>
            <div className="product-detail-related-name">IPS LCD Gaming Monitor</div>
            <div className="product-detail-related-price"><span>$370</span> <span className="old">$400</span></div>
            <div className="product-detail-related-rating">★★★★★ <span>(99)</span></div>
          </div>
          <div className="product-detail-related-card">
            <div className="product-detail-related-top">
            </div>
            <div className="product-detail-related-img-box">
              <img src="/image/Frame 610.png" alt="related4" className="product-detail-related-img" />
            </div>
            <div className="product-detail-related-name">RGB liquid CPU Cooler</div>
            <div className="product-detail-related-price"><span>$160</span> <span className="old">$170</span></div>
            <div className="product-detail-related-rating">★★★★★ <span>(85)</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail; 