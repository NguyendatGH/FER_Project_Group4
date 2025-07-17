import React from "react";
import "./AboutSectionTwo.css";

const AboutSectionTwo = () => {
  return (
    <section className="about-section-two">
      <div className="container">
        <div className="section-content">
          <div className="about-section-mainContent">
            <div className="about-layout">
              {" "}
              <div className="image-column section-two">
                <div className="image-wrapper">
                  <img
                    src="/images/about/about-image-2.svg"
                    alt="about+image"
                    className="about-image light-image"
                  />
                  <img
                    src="/images/about/about-image-2-dark.svg"
                    alt="about+image"
                    className="about-image dark-image"
                  />
                </div>
              </div>
            </div>

            <div className="about-layout">
              <div className="content-column">
                <div className="content-wrapper">
                  <div className="feature-item">
                    <h3 className="feature-title">Bug free code</h3>
                    <p className="feature-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <div className="feature-item">
                    <h3 className="feature-title">Premier support</h3>
                    <p className="feature-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt.
                    </p>
                  </div>
                  <div className="feature-item">
                    <h3 className="feature-title">Next.js</h3>
                    <p className="feature-text">
                      Lorem ipsum dolor sit amet, sed do eiusmod tempor
                      incididunt consectetur adipiscing elit setim.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
