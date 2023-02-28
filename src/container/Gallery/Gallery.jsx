import React, { useRef } from "react";

import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { images } from "../../constants";
import { SubHeading } from "../../components";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    direction === "left"
      ? (current.scrollLeft -= 300)
      : (current.scrollLeft += 300);
  };

  const galleryImages = [
    images.gallery05,
    images.gallery04,
    images.gallery03,
    images.gallery02,
    images.gallery01,
  ];
  return (
    <div className="app__gallery flex__center" id="gallery">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />

        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#aaa", marginTop: "2rem" }}>
          Welcome to our photo gallery, where we showcase the artistry and
          passion that goes into every dish we create. We provide our customers
          with delicious, high-quality food that is made from scratch using the
          freshest, locally-sourced ingredients. Our talented chefs take pride
          in every dish they prepare, and we want to share that passion with you
          through our photo gallery. From savory wraps to sweet treats, our
          gallery captures the essence of our homemade cooking and the
          dedication we have to our craft. Come take a look and get inspired to
          try something new from our menu today.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery-image-${index + 1}`}
            >
              <img src={image} alt="gallery-image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
