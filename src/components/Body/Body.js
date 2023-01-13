import React, { useState } from "react";
import { restaurantList } from "../../Constant";
import RestaurantCard from "../RestaurantCard";

const Body = () => {
  const [searchText, setSearchtext] = useState("");
  const [localList, setLocalList] = useState(restaurantList);

  const alterSearchList = (e) => {
    setSearchtext(e.target.value);
  };

  const filterList = () => {
    setLocalList(
      restaurantList.filter((item) => item.name.includes(searchText))
    );
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search text"
          value={searchText}
          onChange={alterSearchList}
          style={{ margin: 10 }}
        />
        <button onClick={filterList}>Search {searchText}</button>
        {console.log(searchText)}
      </div>
      <div className="body">
        {localList.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} item={restaurant} />;
        })}
      </div>
    </>
  );
};

export default Body;
