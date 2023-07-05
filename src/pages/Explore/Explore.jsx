import React from "react";

import RecipeCard from "../../components/RecipeCard/RecipeCard";
import FeaturedItem from "../../components/FeaturedItem/FeaturedItem";
import FoodImage from "../../assets/temp/Food Image.png";
import PastaImage from "../../assets/temp/image 1.png";

const Explore = () => {
  return (
    <div>
      <FeaturedItem
        title="Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in eleifend mauris, nec feugiat massa. Etiam commodo, nibh sed dignissim consequat, erat enim suscipit turpis, id tincidunt ante massa eget massa."
        image={FoodImage}
      />

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
