import React, { useState } from "react";

import HeartIcon from "../HeartIcon/HeartIcon";

import "./FavoriteButton.css";

const FavoriteButton = ({ defaultFavorited = false, onChange = () => {} }) => {
  const [isFavorited, setIsFavorited] = useState(defaultFavorited);

  const toggleFavorite = (event) => {
    setIsFavorited(event.target.checked);

    onChange(event);
  };

  return (
    <label className="FavoriteButton__btn">
      <input
        className="hidden"
        type="checkbox"
        defaultChecked={defaultFavorited}
        onChange={toggleFavorite}
      />

      <HeartIcon fillColor={isFavorited ? "white" : "transparent"} />
    </label>
  );
};

export default FavoriteButton;
