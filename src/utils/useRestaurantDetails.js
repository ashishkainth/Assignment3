import { useEffect, useState } from "react";
const useRestaurantDetails = (id) => {
  const [restaurantDetails, setRestaurantDetails] = useState({});

  async function getRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const json = await data.json();

    setRestaurantDetails(json.data?.cards[0]?.card?.card?.info);
  }

  useEffect(() => {
    getRestaurantDetails(id);
  }, []);

  return restaurantDetails;
};

export default useRestaurantDetails;
