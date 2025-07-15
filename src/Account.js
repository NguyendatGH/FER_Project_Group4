import React from 'react';
import './Account.css';

function Account() {
  return (
    <div className="account-container">
      <div className="account-breadcrumb">Home / <span>My Account</span></div>
      <div className="account-content">
        <aside className="account-sidebar">
          <div className="account-sidebar-group">
            <div className="account-sidebar-title">Manage My Account</div>
            <div className="account-sidebar-link active">My Profile</div>
            <div className="account-sidebar-link">Address Book</div>
            <div className="account-sidebar-link">My Payment Options</div>
          </div>
          <div className="account-sidebar-group">
            <div className="account-sidebar-title">My Orders</div>
            <div className="account-sidebar-link">My Returns</div>
            <div className="account-sidebar-link">My Cancellations</div>
          </div>
          <div className="account-sidebar-group">
            <div className="account-sidebar-title">My Wishlist</div>
          </div>
        </aside>
        <section className="account-main">
          <div className="account-welcome">Welcome! <span className="account-welcome-name">Md Rimel</span></div>
          <div className="account-form-box">
            <div className="account-form-title">Edit Your Profile</div>
            <form className="account-form">
              <div className="account-form-row">
                <div className="account-form-group">
                  <label>First Name</label>
                  <input className="account-input" value="Md" readOnly />
                </div>
                <div className="account-form-group">
                  <label>Last Name</label>
                  <input className="account-input" value="Rimel" readOnly />
                </div>
              </div>
              <div className="account-form-row">
                <div className="account-form-group">
                  <label>Email</label>
                  <input className="account-input" value="rimel111@gmail.com" readOnly />
                </div>
                <div className="account-form-group">
                  <label>Address</label>
                  <input className="account-input" value="Kingston, 5236, United State" readOnly />
                </div>
              </div>
              <div className="account-form-section-title">Password Changes</div>
              <div className="account-form-row">
                <div className="account-form-group">
                  <input className="account-input" placeholder="Current Password" type="password" />
                </div>
              </div>
              <div className="account-form-row">
                <div className="account-form-group">
                  <input className="account-input" placeholder="New Password" type="password" />
                </div>
              </div>
              <div className="account-form-row">
                <div className="account-form-group">
                  <input className="account-input" placeholder="Confirm New Password" type="password" />
                </div>
              </div>
              <div className="account-form-actions">
                <button type="button" className="account-cancel-btn">Cancel</button>
                <button type="submit" className="account-save-btn">Save Changes</button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Account; 