import React, { useState } from "react";
import "./NewsLatterBox";
import "../../css/components/Contact.css";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showOverlay, setShowOverlay] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowOverlay(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setShowOverlay(false), 2000); // Hide after 2s
  };

  return (
    <div className="contact-container container">
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-message">Your ticket has been submitted successfully!</div>
        </div>
      )}

      <div className="contact-left">
        <div className="contact-box">
          <h2 className="contact-title">Need Help? Open a Ticket</h2>
          <p className="contact-description">
            Our support team will get back to you ASAP via email.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="form-group full">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
              />
            </div>
            <div className="form-group full">
              <button type="submit" className="submit-button">
                Submit Ticket
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="contact-right">
        <NewsLatterBox />
      </div>
    </div>
  );
};

export default Contact;
