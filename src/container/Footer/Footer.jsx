import React from "react";

import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          6202/D, Park View, Jhelum Road, Rawalpindi, Pakistan
        </p>
        <p className="p__opensans">+92 324-5260010</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.logo} alt="footer-logo" />
        <p className="p__opensans">
          "The best way to find yourself is to lose yourself in the service of
          others"
        </p>
        <img src={images.spoon} alt="spoon-image" style={{ marginTop: 15 }} />

        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday - Friday:</p>
        <p className="p__opensans">02.00 pm - 11.00 pm</p>
        <p className="p__opensans">Saturday - Sunday:</p>
        <p className="p__opensans">03.00 pm - 01.00 am</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2023 STK. All Rights Reserved.</p>
    </div>
  </div>
);

export default Footer;
