// components/FavouriteButton.js
import React, { useState, useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";

const FavouriteButton = ({ uuid, title, location }) => {
  const label = { inputProps: { "aria-label": "Favorite" } };
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    // Check if the property is already in favorites when the component mounts
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFavorite(favorites.some((item) => item.uuid === uuid));
  }, [uuid]);

  const handleToggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((item) => item.uuid !== uuid);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      // Add to favorites with title and location
      const updatedFavorites = [...favorites, { uuid, title, location }];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(true);
    }
  };

  return (
    <Checkbox
      {...label}
      icon={<FavoriteBorder sx={{ color: "#ff8433" }} fontSize="small" />}
      checkedIcon={<Favorite sx={{ color: "#ff8433" }} fontSize="small" />}
      checked={isFavorite}
      onChange={handleToggleFavorite}
    />
  );
};

export default FavouriteButton;
