import React from "react";

import FeaturedItem from "../../components/FeaturedItem/FeaturedItem";
import FoodImage from "../../assets/temp/Food Image.png";
import PastaImage from "../../assets/temp/image 1.png";
import RecipeRow from "../../components/RecipeRow/RecipeRow";

const recipes = [
  {
    name: "Title",
    cookTimeMinutes: "40m",
    rating: 4.8,
    favorited: true,
    image: PastaImage,
  },
  {
    name: "Title",
    cookTimeMinutes: "40m",
    rating: 4.8,
    favorited: true,
    image: PastaImage,
  },
  {
    name: "Title",
    cookTimeMinutes: "40m",
    rating: 4.8,
    favorited: true,
    image: PastaImage,
  },
  {
    name: "Title",
    cookTimeMinutes: "40m",
    rating: 4.8,
    favorited: true,
    image: PastaImage,
  },
];

const Explore = () => {
  return (
    <div>
      <FeaturedItem
        name="Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in eleifend mauris, nec feugiat massa. Etiam commodo, nibh sed dignissim consequat, erat enim suscipit turpis, id tincidunt ante massa eget massa."
        image={FoodImage}
      />

      <RecipeRow title="Most Popular" recipes={recipes} />
    </div>
  );
};

export default Explore;
