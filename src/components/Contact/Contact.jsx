import React from "react";
import NewsLatterBox from "./NewsLatterBox";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-left">
            <div className="contact-box">
              <h2 className="contact-title">Need Help? Open a Ticket</h2>
              <p className="contact-description">
                Our support team will get back to you ASAP via email.
              </p>
              <form>
                <div className="form-row">
                  <div className="form-group half">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" id="name" placeholder="Enter your name" />
                  </div>
                  <div className="form-group half">
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                  </div>
                  <div className="form-group full">
                    <label htmlFor="message">Your Message</label>
                    <textarea id="message" rows="5" placeholder="Enter your message"></textarea>
                  </div>
                  <div className="form-group full">
                    <button type="submit" className="submit-button">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="contact-right">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
