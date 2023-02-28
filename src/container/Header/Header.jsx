import React from "react";
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Taste the HOME flavor" />
      <h1 className="app__header-h1">The Key to Homemade Flavors!</h1>
      <p
        className="p__opensans"
        style={{ margin: "2rem 0", textAlign: "justify" }}
      >
        Craving a delicious meal but don't have the time to cook? Look no
        further than The Homemade Hub! Our takeaway menu is packed with
        mouth-watering homemade dishes, perfect for a quick and satisfying meal
        on-the-go. From classic comfort foods to global-inspired flavors, our
        menu has something for everyone. We use only the freshest ingredients
        and prepare each dish with care, ensuring every bite is bursting with
        flavor. And with our convenient online ordering and speedy pickup, you
        can enjoy a homemade meal in no time. So skip the fast food and stop by
        The Homemade Hub for a homemade meal made easy!
      </p>
      <button type="button" className="custom__button">
        Explore the Menu
      </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.chai} alt="header img" />
    </div>
  </div>
);

export default Header;
