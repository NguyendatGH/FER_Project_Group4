import ScrollUp from "../components/Common/ScrollUp";
import Contact from "../components/Contact/Contact";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Video from "../components/Video/Video";
import Brands from "../components/Brands/Brands";
import AboutSectionOne from "../components/About/AboutSectionOne";
import AboutSectionTwo from "../components/About/AboutSectionTwo";
import Testimonials from "../components/Testimonials/Testimonials";
import Pricing from "../components/Pricing/Pricing";
import Blog from "../components/Blog/Blog";
import "../css/home.css";
import Chatbot from "../components/chat/Chatbot";
const Home = () => {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Chatbot />
    </>
  );
};

export default Home;
