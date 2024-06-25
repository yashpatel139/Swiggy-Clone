import { useState, useEffect } from "react";
import { restaurantList } from "../Constants";
import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from '../utils/UserContext';
import {useContext} from 'react';
import { filterData } from "../utils/helper";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    //API calling
    getRestaurants();
    //console.log("Use Effect")
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.87560&lng=80.91150&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    //console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  //when there is no restaurants so do not render component (Early return)
  // if(!allRestaurants) return null;

  const isOnline = useOnline();
  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
  
  const {setUserName,loggedInUser}=useContext(UserContext); //this data is coming from app.js and UserContext.js

  return allRestaurants?.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex ">
        <input
          className="border-black border-2 m-2 rounded-lg focus:bg-blue-100 p-1"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="bg-violet-100 hover:bg-violet-300 m-2 border-slate-600 border-2 rounded-xl px-1 flex items-center"
          onClick={() => {
            const filteredList = filterData(searchText, allRestaurants);
            setFilteredRestaurants(filteredList);
          }}
        >
          <img className="h-6 w-6 mx-1" src="https://img.icons8.com/?size=64&id=Y6AAeSVIcpWt&format=png" alt="search-icon"/>
          Search
        </button>

        <div>
          {isOnline ? (
            <div className="flex m-2">
              <div className=" rounded-full bg-green-400 h-5 w-5 my-3"></div>
              <p className="my-2 mx-2 font-semibold text-lg">Online</p>
            </div>
          ) : (
            <div className="flex">
              <div className="rounded-full bg-red-400 h-5 w-5 my-3"></div>
              <div className=" my-2 mx-2 font-semibold text-lg">Seems You are offline</div>
            </div>
          )}
        </div>

        <div className="m-3">
          <label className="text-lg">UserName: </label>
          <input value={loggedInUser} className="p-1 border-black border rounded"
          onChange={(e)=>setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              {restaurant?.info?.promoted ? (<RestaurantCardPromoted resData={restaurant}/>) : (<RestaurantCard resData={restaurant} />)}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
