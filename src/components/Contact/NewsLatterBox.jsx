import "../../css/components/Contact.css";
const NewsLatterBox = () => {
  const gradientColor = "#4A6CF7";

  return (
    <div className="newsletter-box">
      <h3 className="newsletter-title">
        Subscribe to receive future updates
      </h3>
      <p className="newsletter-description">
        Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.
      </p>
      <div className="newsletter-form">
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your email" />
        <button type="submit" className="subscribe-btn">Subscribe</button>
        <p className="newsletter-note">
          No spam guaranteed, So please don't send any spam mail.
        </p>
      </div>

      <div className="newsletter-decorations">
        <span className="decoration-1">
          <svg
            width="57"
            height="65"
            viewBox="0 0 57 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="gradient1"
                x1="-18.3187"
                y1="55.1044"
                x2="37.161"
                y2="15.3509"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={gradientColor} stopOpacity="0.62" />
                <stop offset="1" stopColor={gradientColor} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              opacity="0.5"
              d="M0.407629 15.9573L39.1541 64.0714L56.4489 0.160793L0.407629 15.9573Z"
              fill="url(#gradient1)"
            />
          </svg>
        </span>

        <span className="decoration-2">
          <svg
            width="39"
            height="32"
            viewBox="0 0 39 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="gradient2"
                x1="39.1948"
                y1="38.335"
                x2="10.6982"
                y2="10.2511"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={gradientColor} stopOpacity="0.62" />
                <stop offset="1" stopColor={gradientColor} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              opacity="0.5"
              d="M14.7137 31.4215L38.6431 4.24115L0 0.624124L14.7137 31.4215Z"
              fill="url(#gradient2)"
            />
          </svg>
        </span>

        <span className="decoration-3">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="gradient3"
                x1="-0.571054"
                y1="-37.1717"
                x2="28.7937"
                y2="26.7564"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor={gradientColor} stopOpacity="0.62" />
                <stop offset="1" stopColor={gradientColor} stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              opacity="0.5"
              d="M10.6763 35.3091C23.3976 41.6367 38.1681 31.7045 37.107 17.536C36.1205 4.3628 21.9407 -3.46901 10.2651 2.71063C-2.92254 9.69061 -2.68321 28.664 10.6763 35.3091Z"
              fill="url(#gradient3)"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};
export default NewsLatterBox;