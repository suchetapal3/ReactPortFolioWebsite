import "./FooterStyles.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Dum Dum House</p>
              <p>Flat No KG,</p>
              <p>246/11, RBC Road,</p>
              <p>Kolkata-28.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 8017617576
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              sucheta.pal3@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About me</h4>
          <p>
            I'm Sucheta, working as Senior Software developer with Wipro Ltd.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
          </div>
        </div>
      </div>
      <div className="copyright">
        <h4>Copyright © 2023 Sucheta Pal. All Rights Reserved.</h4>
      </div>
    </div>
  );
};

export default Footer;
