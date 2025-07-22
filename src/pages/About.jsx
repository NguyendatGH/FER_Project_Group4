import React from "react";
import AboutSectionOne from "../components/About/AboutSectionOne";
import AboutSectionTwo from "../components/About/AboutSectionTwo";
import OurMission from "../components/About/OurMission";
import OurTeam from "../components/About/OurTeam";
import OurHistory from "../components/About/OurHistory";
import OurValues from "../components/About/OurValues";

const About = () => {
  return (
    <>
      <AboutSectionOne />
      <AboutSectionTwo />
      <OurMission />
      <OurTeam />
      <OurHistory />
      <OurValues />
    </>
  );
};

export default About; 