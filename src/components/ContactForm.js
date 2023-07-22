import "./ContactFormStyles.css";

import React from "react";
import Navbar from "./Navbar";
import HeroImage3 from "./HeroImage3";
import { Form } from "react-router-dom";

const ContactForm = () => {
  return (
    <div className="form">
      <form>
        <label>Your Name:</label>
        <input type="text"></input>
        <label>Email:</label>
        <input type="email"></input>
        <label>Subject:</label>
        <input type="text"></input>
        <label>Message:</label>
        <textarea rows="6" placeholder="Type your message here"></textarea>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
