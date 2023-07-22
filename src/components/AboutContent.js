import "./AboutContentStyles.css";
import { Link } from "react-router-dom";
import React from "react";
import react1 from "../assets/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg";
import react2 from "../assets/glenn-carstens-peters-RLw-UC03Gwc-unsplash.jpg";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          I'm a Web-Developer, specialist in Front-end. I create responsive
          Websites.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={react1} className="img" alt="true" />
          </div>
          <div className="img-stack top">
            <img src={react2} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
