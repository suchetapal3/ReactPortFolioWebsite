import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import Cards from "../components/Cards";
import Work from "../components/Work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2 heading="PROJECTS." text="Some of my recent works." />
      <Work />
      <Cards />
      <Footer />
    </div>
  );
};

export default Project;
