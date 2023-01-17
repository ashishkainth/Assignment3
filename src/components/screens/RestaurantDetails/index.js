import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../../../Constant";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurantDetails, setRestaurantDetails] = useState({});
  const [menuDetails, setMenuDetails] = useState([]);

  async function getRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const json = await data.json();

    setRestaurantDetails(json.data?.cards[0]?.card?.card?.info);
    setMenuDetails(
      json.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  return (
    <div>
      <img
        src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId}
        alt="image"
        width={200}
      ></img>
      <h2>{restaurantDetails.name}</h2>
      <h4>Ratings: {restaurantDetails.avgRating} stars</h4>
      <h4>Cuisines: {restaurantDetails.cuisines?.join(", ")} stars</h4>
      {menuDetails ? (
        <ul>
          {menuDetails.map((item, index) => {
            return (
              <div key={index}>
                {item.card?.card?.title ? (
                  <li>{item.card?.card?.title}</li>
                ) : null}
              </div>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default RestaurantDetails;
