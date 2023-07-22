import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage3 from "../components/HeroImage3";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImage3
        heading="ABOUT."
        text="Software developer, specialist in front end web development."
      />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default About;
