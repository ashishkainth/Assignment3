export function filterRestaurantList(restaurantListData, searchText) {
  const data = restaurantListData.filter((item) =>
    item.data?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return data;
}
