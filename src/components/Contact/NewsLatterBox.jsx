"use client";

import React from "react";
// import { useTheme } from "next-themes";
import "./NewsLatterBox.css";

const NewsLatterBox = () => {
  // const { theme } = useTheme();
  // Determine the gradient color based on current theme.
  const gradientColor = "#4A6CF7";

  return (
    <div className={`newsletter-box dark`}>
      <h3 className="newsletter-title">
        Subscribe to receive future updates
      </h3>
      <p className="newsletter-description">
        Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae ornare massa quis lectus.
      </p>
      <div className="newsletter-form">
        <input type="text" name="name" placeholder="Enter your name" />
        <input type="email" name="email" placeholder="Enter your email" />
        <input type="submit" value="Subscribe" className="submit-btn" />
        <p className="newsletter-note">
          No spam guaranteed, so please don’t send any spam mail.
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

        <span className="decoration-4">
          <svg
            width="162"
            height="91"
            viewBox="0 0 162 91"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3">
              <defs>
                <linearGradient
                  id="gradient4a"
                  x1="291.35"
                  y1="12.1032"
                  x2="179.211"
                  y2="237.617"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.328125" stopColor={gradientColor} />
                  <stop offset="1" stopColor={gradientColor} stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="gradient4b"
                  x1="333.35"
                  y1="-12.8968"
                  x2="221.211"
                  y2="212.617"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.328125" stopColor={gradientColor} />
                  <stop offset="1" stopColor={gradientColor} stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="gradient4c"
                  x1="294.35"
                  y1="-3.89678"
                  x2="182.211"
                  y2="221.617"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.328125" stopColor={gradientColor} />
                  <stop offset="1" stopColor={gradientColor} stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="gradient4d"
                  x1="331.35"
                  y1="-36.8968"
                  x2="219.211"
                  y2="188.617"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.328125" stopColor={gradientColor} />
                  <stop offset="1" stopColor={gradientColor} stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                opacity="0.45"
                d="M1 89.9999C8 77.3332 27.7 50.7999 50.5 45.9999C79 39.9999 95 41.9999 106 30.4999C117 18.9999 126 -3.50014 149 -3.50014C172 -3.50014 187 4.99986 200.5 -8.50014C214 -22.0001 210.5 -46.0001 244 -37.5001C270.8 -30.7001 307.167 -45 322 -53"
                stroke="url(#gradient4a)"
              />
              <path
                opacity="0.45"
                d="M43 64.9999C50 52.3332 69.7 25.7999 92.5 20.9999C121 14.9999 137 16.9999 148 5.49986C159 -6.00014 168 -28.5001 191 -28.5001C214 -28.5001 229 -20.0001 242.5 -33.5001C256 -47.0001 252.5 -71.0001 286 -62.5001C312.8 -55.7001 349.167 -70 364 -78"
                stroke="url(#gradient4b)"
              />
              <path
                opacity="0.45"
                d="M4 73.9999C11 61.3332 30.7 34.7999 53.5 29.9999C82 23.9999 98 25.9999 109 14.4999C120 2.99986 129 -19.5001 152 -19.5001C175 -19.5001 190 -11.0001 203.5 -24.5001C217 -38.0001 213.5 -62.0001 247 -53.5001C273.8 -46.7001 310.167 -61 325 -69"
                stroke="url(#gradient4c)"
              />
              <path
                opacity="0.45"
                d="M41 40.9999C48 28.3332 67.7 1.79986 90.5 -3.00014C119 -9.00014 135 -7.00014 146 -18.5001C157 -30.0001 166 -52.5001 189 -52.5001C212 -52.5001 227 -44.0001 240.5 -57.5001C254 -71.0001 250.5 -95.0001 284 -86.5001C310.8 -79.7001 347.167 -94 362 -102"
                stroke="url(#gradient4d)"
              />
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default NewsLatterBox;
