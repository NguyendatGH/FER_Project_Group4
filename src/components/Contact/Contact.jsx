import "./NewsLatterBox";
import "../../css/components/Contact.css";
import NewsLatterBox from "./NewsLatterBox";
const Contact = () => {
  return (
    <div className="contact-container container">
      <div className="contact-left">
        <div className="contact-box">
          <h2 className="contact-title">Need Help? Open a Ticket</h2>
          <p className="contact-description">
            Our support team will get back to you ASAP via email.
          </p>
          <div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="form-group full">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Enter your message"
              />
            </div>
            <div className="form-group full">
              <button type="submit" className="submit-button">
                Submit Ticket
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-right">
        <NewsLatterBox />
      </div>
    </div>
  );
};

export default Contact;