import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.STK} alt="G letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          This venture was born out of a desire to share our passion for
          homemade cooking with the community. We wanted to create a space where
          people could enjoy delicious, wholesome food that is made from scratch
          with high-quality ingredients. We take pride in being a part of the
          local community and strive to provide our customers with a warm,
          welcoming food which they can enjoy.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Aim</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          We believe that food should be more than just fuel for the body - it
          should be a source of joy, comfort, and connection. That's why we take
          great care in selecting the best ingredients and preparing each dish
          with love and care. We are committed to providing our customers with a
          a taste of home.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
