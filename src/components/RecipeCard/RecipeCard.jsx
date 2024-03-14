import React from "react";

// import starSolidIcon from "../../assets/images/icon-star-solid.svg";
// import FavoriteButton from "../FavoriteButton/FavoriteButton";

import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const getFormattedCookTime = (cookTimeMinutes) => {
    let hours = Math.floor(cookTimeMinutes / 60);
    let minutes = cookTimeMinutes % 60;

    let result = "";

    if (hours) {
      result = `${result} ${hours}h`;
    }

    if (minutes) {
      result = `${result} ${minutes}m`;
    }

    return result;
  };

  return (
    <div className="RecipeCard__container">
      <img
        className="RecipeCard__img prevent-select"
        src={`${process.env.REACT_APP_HUNGRY_API_BASE_URL}/images/${recipe?.id}`}
        alt={recipe?.name}
      />

      <div className="RecipeCard__info">
        <div>
          <h2 className="RecipeCard__header">{recipe?.name}</h2>
          {recipe?.cookTimeMinutes && (
            <p className="RecipeCard__time text-small prevent-select">
              {getFormattedCookTime(recipe?.cookTimeMinutes)}
            </p>
          )}
        </div>

        {/* <div className="RecipeCard__lower">
          <div className="RecipeCard__rating">
            <img className="prevent-select" src={starSolidIcon} alt="star" />
            <span className="prevent-select text-medium">{recipe?.rating}</span>
          </div>

          <FavoriteButton defaultFavorited={recipe?.favorited} />
        </div> */}
      </div>
    </div>
  );
};

export default RecipeCard;
