import React from "react";

import RecipeCard from "../../components/RecipeCard/RecipeCard";
import FeaturedItem from "../../components/FeaturedItem/FeaturedItem";
import PastaImage from "../../assets/temp/image 1.png";

const Explore = () => {
  return (
    <div>
      <FeaturedItem />

      <RecipeCard
        title="Title"
        time="40m"
        rating={4.8}
        favorited={true}
        image={PastaImage}
      />
    </div>
  );
};

export default Explore;
