import React from "react";
import { IMG_CDN_URL } from "../../Constant";
const RestaurantCard = ({ item }) => {
  const { name, cloudinaryImageId, cusines, rating } = item;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cusines.join(", ")}</h3>
      <h4>{rating} stars</h4>
    </div>
  );
};

export default RestaurantCard;
