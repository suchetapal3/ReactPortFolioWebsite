import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImage2 from "../components/HeroImage2";
import Form from "../components/ContactForm";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage2
        heading="CONTACT."
        text="I'm focused on new opportunities, Lets connect."
      />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
