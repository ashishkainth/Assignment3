import React, { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [searchText, setSearchtext] = useState("");
  const [restaurantListData, setRestaurantListData] = useState([]);
  const [localRestaurantListData, setLocalRestaurantListData] = useState([]);

  async function getRestaurantsData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&offset=10&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const json = await data.json();
    setRestaurantListData(json.data?.cards);
    setLocalRestaurantListData(json.data?.cards);
  }

  useEffect(() => {
    getRestaurantsData();
  }, []);

  const filterRestaurantList = () => {
    setLocalRestaurantListData(
      restaurantListData.filter((item) =>
        item.data?.data?.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search text"
          value={searchText}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
          style={{ margin: 10 }}
        />
        <button onClick={filterRestaurantList}>Search</button>
      </div>

      {localRestaurantListData.length === 0 ? (
        <div className="loading-body">
          <Shimmer />
        </div>
      ) : (
        <div className="body">
          {localRestaurantListData.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.data?.data?.id}
                id={restaurant.data?.data?.id}
                key={restaurant.data?.data?.id}
              >
                <RestaurantCard item={restaurant.data?.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
