import React from "react";

import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img_reverse">
      <img src={images.chef} alt="Chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            A community that shares a common set of beliefs about the food
          </p>
        </div>
        <p className="p__opensans">
          We believe in using only the freshest, locally-sourced ingredients in
          our dishes, and we're committed to supporting sustainable and ethical
          farming practices. We believe that food should be made from scratch,
          with care and attention to detail, and we take great pride in every
          dish we prepare.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Sithra Ali</p>
        <p className="p__opensans">Chef & Co-Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
