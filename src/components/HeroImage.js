import "./HeroImageStyles.css";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import React from "react";
import GirlInTech from "../assets/Girl2.jpg";

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={GirlInTech} alt="GirlInTech"></img>
      </div>
      <div className="content">
        <p> Hi, My name is Sucheta Pal.</p>
        <h1>I'm a Software Developer.</h1>

        <div>
          <Link to="/Project" className="btn">
            Projects
          </Link>
          <Link to="/Contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
      <div className="quotes">
        <FaQuoteLeft size={20} style={{ color: "#fff", marginLeft: "22rem" }} />
        <h4>
          {" "}
          Learn continually. There's always “one more thing” to learn.
          <h4>- Steve Jobs.</h4>
        </h4>
      </div>
    </div>
  );
};

export default Heroimage;
