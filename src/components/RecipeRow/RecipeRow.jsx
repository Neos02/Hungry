import React from "react";

import "./RecipeRow.css";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeRow = ({ title = "", recipes, scrollable = false }) => {
  return (
    <div>
      {title && <h1 className="RecipeRow__title">{title}</h1>}

      <div
        className={
          scrollable
            ? "RecipeRow__recipes-scroll"
            : "RecipeRow__recipes-no-scroll"
        }
      >
        {recipes.map((recipe, i) => (
          <RecipeCard
            key={i}
            name={recipe.name}
            cookTimeMinutes={recipe.cookTimeMinutes}
            rating={recipe.rating}
            favorited={recipe.favorited}
            image={recipe.image}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeRow;
