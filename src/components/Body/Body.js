import React, { useEffect, useState, useContext } from "react";
import RestaurantCard from "../RestaurantCard";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurantList } from "../../utils/helper";
import useOnline from "../../utils/useOnline";
import UserContext from "../../utils/UserContext";

const Body = () => {
  const [searchText, setSearchtext] = useState("");
  const [restaurantListData, setRestaurantListData] = useState([]);
  const [localRestaurantListData, setLocalRestaurantListData] = useState([]);
  const { user, setUserInfo } = useContext(UserContext);

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

  const isOnline = useOnline();

  // function filterRestaurantList(restaurantListData, searchText) {
  //   const data = restaurantListData.filter((item) =>
  //     item.data?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  //   );
  //   return data;
  // }

  if (!isOnline) {
    return <h1> Please check your internet connection</h1>;
  }

  return (
    <>
      <div className="search-container p-5 bg-purple-100 shadow-xl m-2">
        <input
          type="text"
          placeholder="Search text"
          value={searchText}
          onChange={(e) => {
            setSearchtext(e.target.value);
          }}
          style={{ margin: 10 }}
          className="border-sky-500 border p-2 focus:bg-cyan-900 focus:text-white"
        />
        <input
          value={user.name}
          onChange={(e) => {
            setUserInfo({ ...user, name: e.target.value });
          }}
        />
        <input
          value={user.email}
          onChange={(e) => {
            setUserInfo({ ...user, email: e.target.value });
          }}
        />
        <button
          onClick={() => {
            setLocalRestaurantListData(
              filterRestaurantList(restaurantListData, searchText)
            );
          }}
          className="border border-pink-800 rounded-md p-2 "
        >
          Search
        </button>
      </div>

      {localRestaurantListData.length === 0 ? (
        <div className="loading-body">
          <Shimmer />
        </div>
      ) : (
        <div className="flex flex-wrap">
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
