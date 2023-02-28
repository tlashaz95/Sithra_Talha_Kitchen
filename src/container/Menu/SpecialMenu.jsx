import React from "react";

import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that suits your health" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_beverages flex__center">
        <p className="app__specialMenu-menu_heading">Juices & Shakes</p>
        <div className="app__specialMenu_menu_items">
          {data.juices.map((juice, index) => (
            <MenuItem
              key={juice.title + index}
              title={juice.title}
              price={juice.price}
              tags={juice.tags}
            />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu-menu_chai flex__center">
        <p className="app__specialMenu-menu_heading">For Chai Lovers</p>
        <div className="app__specialMenu_menu_items">
          {data.chaiOptions.map((chai, index) => (
            <MenuItem
              key={chai.title + index}
              title={chai.title}
              price={chai.price}
              tags={chai.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
