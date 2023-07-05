import React from "react";

import "./FeaturedItem.css";

const FeaturedItem = ({ title, description, image }) => {
  return (
    <div className="FeaturedItem__container">
      <img className="FeaturedItem__img" src={image} alt={title} />

      <div className="FeaturedItem__info">
        <h1>{title}</h1>
        <p className="text-medium">{description}</p>
        <button className="cta-btn">Cook Now &gt;</button>
      </div>
    </div>
  );
};

export default FeaturedItem;
