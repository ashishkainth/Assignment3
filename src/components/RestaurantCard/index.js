import React from "react";
import { IMG_CDN_URL } from "../../Constant";
const RestaurantCard = ({ item }) => {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    area,
    costForTwoString,
    address,
  } = item;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} stars</h4>
      <h5>
        Address: {area} , {address}{" "}
      </h5>
      <h5>{costForTwoString}</h5>
    </div>
  );
};

export default RestaurantCard;
