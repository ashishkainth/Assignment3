import { useEffect, useState } from "react";
const useRestaurantMenu = (id) => {
  const [restaurantMenu, setRestaurantMenu] = useState([]);

  async function getRestaurantDetails() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.3164945&lng=78.03219179999999&restaurantId=" +
        id +
        "&submitAction=ENTER"
    );
    const json = await data.json();

    setRestaurantMenu(
      json.data.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }

  useEffect(() => {
    getRestaurantDetails(id);
  }, []);

  return restaurantMenu;
};

export default useRestaurantMenu;
