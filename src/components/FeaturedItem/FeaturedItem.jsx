import React from "react";

import FoodImage from "../../assets/temp/Food Image.png";

import "./FeaturedItem.css";

const FeaturedItem = () => {
  return (
    <div className="FeaturedItem__container">
      <img className="FeaturedItem__img" src={FoodImage} alt="Featured" />

      <div></div>
    </div>
  );
};

export default FeaturedItem;
