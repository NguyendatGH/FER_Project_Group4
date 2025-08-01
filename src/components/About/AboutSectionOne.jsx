import React from "react";
import SectionTitle from "../Common/SectionTitle";
import "../../css/components/AboutSectionOne.css";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="list-item">
      <span className="list-icon">{checkIcon}</span>
      {text}
    </p>
  );

  return (
    <section id="about" className="about-section-one">
      <div className="container">
        <div className="section-content">
          <div className="about-section-mainContent">
            <div className="about-layout">

            <div className="content-column">
              <SectionTitle
                title="Crafted for Startup, SaaS and Business Sites."
                paragraph="The main ‘thrust’ is to focus on educating attendees on how to best protect highly vulnerable business applications with interactive panel discussions and roundtables."
                mb="44px"
              />
              <div className="list-wrapper">
                <div className="list-container">
                  <div className="list-column">
                    <List text="Premium quality" />
                    <List text="Tailwind CSS" />
                    <List text="Use for lifetime" />
                  </div>
                  <div className="list-column">
                    <List text="Next.js" />
                    <List text="Rich documentation" />
                    <List text="Developer friendly" />
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className="about-layout">

            <div className="image-column ">
              <div className="image-wrapper section-one">
                <img
                  src="/images/about/about-image.svg"
                  alt="about-image"
                  className="about-image light-image"
                />
                <img
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  className="about-image dark-image"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
