import React, { useContext } from "react";
import { IMG_CDN_URL } from "../../Constant";
import UserContext from "../../utils/UserContext";

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
  const { user } = useContext(UserContext);
  return (
    <div className="w-[200px] shadow-md m-2 p-2">
      <img
        className="w-[200px] h-[100px]"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      <h2 className="font-bold">{name}</h2>
      <h3 className="font-thin">{cuisines.join(", ")}</h3>
      <h4 className="bg-yellow-500">{avgRating} stars</h4>
      <h5 className="font-thin">
        Address: {area} , {address}{" "}
      </h5>
      <h5>{costForTwoString}</h5>
      <h5>{user.name}</h5>
      <h5>{user.email}</h5>
    </div>
  );
};

export default RestaurantCard;
