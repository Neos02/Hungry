import React from "react";

import "./FeaturedItem.css";

const FeaturedItem = ({ recipe }) => {
  return (
    <div className="FeaturedItem__container">
      <img
        className="FeaturedItem__img"
        src={`https://drive.google.com/uc?export=view&id=${recipe?.imageUrl}`}
        alt={recipe?.name}
      />

      <div className="FeaturedItem__info">
        <h1>{recipe?.name}</h1>
        <p className="text-medium">{recipe?.description}</p>
        <button className="cta-btn">Cook Now &gt;</button>
      </div>
    </div>
  );
};

export default FeaturedItem;
