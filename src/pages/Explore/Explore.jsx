import React, { useEffect, useState } from "react";

import FeaturedItem from "../../components/FeaturedItem/FeaturedItem";
import RecipeRow from "../../components/RecipeRow/RecipeRow";
import {
  getAllRecipes,
  getRecipesInCategory,
} from "../../services/RecipeService";
import NavBar from "../../components/NavBar/NavBar";

const Explore = () => {
  const [recipes, setRecipes] = useState([]);
  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    let isMounted = true;

    getAllRecipes((response) => {
      if (isMounted) {
        setRecipes(response.data);
      }
    });

    getRecipesInCategory("Featured", (response) => {
      if (isMounted && response.data.recipes.length) {
        const featuredRecipes = response.data.recipes;

        setFeatured(
          featuredRecipes[
            Math.floor(Math.random() * response.data.recipes.length)
          ]
        );
      }
    });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div>
      <NavBar />

      {featured && <FeaturedItem recipe={featured} />}

      <RecipeRow title="Most Popular" recipes={recipes} />
    </div>
  );
};

export default Explore;
