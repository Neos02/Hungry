import React from "react";

import starSolidIcon from "../../assets/images/icon-star-solid.svg";

import "./RecipeCard.css";
import FavoriteButton from "../FavoriteButton/FavoriteButton";

const RecipeCard = ({ title, time, rating, favorited, image }) => {
  return (
    <div className="RecipeCard__container">
      <img className="RecipeCard__img" src={image} alt={title} />

      <div className="RecipeCard__info">
        <div>
          <h2 className="RecipeCard__header">{title}</h2>
          {time && (
            <p className="RecipeCard__time text-small prevent-select">{time}</p>
          )}
        </div>

        <div className="RecipeCard__lower">
          <div className="RecipeCard__rating">
            <img className="prevent-select" src={starSolidIcon} alt="star" />
            <span className="prevent-select text-medium">{rating}</span>
          </div>

          <FavoriteButton defaultFavorited={favorited} />
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
