import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { RESTAURANT_MENU_URL } from "../Constants";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () => {
  const { id } = useParams(); //used to read dynamic URL
  const restaurant = useRestaurant(id); //passing the id to the Hook
  // const {itemCards}=restaurant?.cards[0]?.card?.card?.info;

  const [showIndex, setShowIndex]=useState(null);

  const [restaurantInfo, setRestaurantInfo] = useState([]);
  useEffect(() => {
    getRestaurant();
  }, []);
  async function getRestaurant() {
    const data = await fetch(RESTAURANT_MENU_URL + id);
    const json = await data.json();
    //console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    setRestaurantInfo(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  }

  const categories = restaurantInfo.filter(
    (c) =>
      c.card?.["card"]?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  //console.log(categories);
  // const {cloudinaryImageId, name, areaName, city, cuisines, avgRating}=resInfo?.

  // const {itemCards}=restaurant?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

  return !restaurant ? (
    <Shimmer /> //using ternary operator syntax
  ) : (
    <div>
      <div className="grid justify-center m-2 p-2 text-center">
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          className="mx-auto h-52 w-52 rounded"
        />
        <h2 className="font-bold text-2xl p-2">{restaurant.name}</h2>
        <h3 className="font-semibold text-lg">{restaurant.areaName}</h3>
        <h3 className="font-semibold text-lg">{restaurant.city}</h3>
        <p className="font-semibold text-lg">
          {restaurant.cuisines?.join(", ")}
        </p>
        <h4 className="font-semibold text-lg">{restaurant.avgRating} stars</h4>
      </div>
      {categories.map((category, index) => (
        <RestaurantCategories
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index==showIndex ? true : false}  //lifting the state up.....
         setShowIndex={()=>setShowIndex(index)} 
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
