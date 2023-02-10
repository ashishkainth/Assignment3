import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../../../cartSlice";
import { IMG_CDN_URL } from "../../../Constant";
import useRestaurantDetails from "../../../utils/useRestaurantDetails";
import useRestaurantMenu from "../../../utils/useRestaurantmenu";
const RestaurantDetails = () => {
  const { id } = useParams();

  const restaurantDetails = useRestaurantDetails(id);

  const dispatch = useDispatch();

  const menuDetails = useRestaurantMenu(id);

  const handleAddItem = (item) => {
    const { title } = item.card?.card?.title;
    dispatch(addItem(item));
  };
  // const [menuDetails, setMenuList] = useState(null);

  // async function getRestaurantDetails() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=" +
  //       id +
  //       "&submitAction=ENTER"
  //   );
  //   const json = await data.json();

  //   setRestaurantDetails(json.data?.cards[0]?.card?.card?.info);

  //   setMenuList(json.data.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards);
  // }

  // useEffect(() => {
  //   getRestaurantDetails();
  // }, []);

  return (
    <div>
      {restaurantDetails && (
        <img
          src={IMG_CDN_URL + restaurantDetails.cloudinaryImageId}
          alt="image"
          width={200}
        ></img>
      )}
      <h2>{restaurantDetails.name}</h2>
      <h4>Ratings: {restaurantDetails.avgRating} stars</h4>
      <h4>Cuisines: {restaurantDetails.cuisines?.join(", ")} stars</h4>
      {menuDetails ? (
        <ul>
          {menuDetails.map((item, index) => {
            return (
              <div key={index}>
                {item.card?.card?.title ? (
                  <>
                    <li className="p-2">
                      {item.card?.card?.title}
                      {" - "}
                      <button
                        className="bg-green-300 p-1"
                        onClick={() => handleAddItem(item)}
                      >
                        Add Item
                      </button>
                    </li>
                  </>
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
