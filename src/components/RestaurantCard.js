import React from "react";
import { IMG_CDN_URL } from "../Constants";
const RestaurantCard = (props)=>{
  const {resData}=props;
  const {cloudinaryImageId,
    name,
  cuisines,
  lastMileTravelString,
  avgRating,
  costForTwo}=resData?.info;

  return (
    
     <div className="bg-gray-200 rounded h-[22rem] w-56 grid my-4 mx-5 p-3 overflow-auto hover:shadow-amber-200 hover:shadow-lg hover:bg-pink-100">
       <img className="grid h-48 w-48 shadow-lg shadow-gray-400 rounded-lg"  src={IMG_CDN_URL + cloudinaryImageId} />
       <h3 className="text-lg font-semibold py-2">{name}</h3>
       <h4>{lastMileTravelString}</h4>
       <h4>{avgRating} stars</h4>
       <h4>{costForTwo}</h4>
      <p>{cuisines.join(", ")}</p>
      
     </div>
  );
};

//Higher order component 

export const withPromotedLabel=(RestaurantCard)=>{
  return(props)=>{
    return(
      <div>
        <label className="absolute bg-gray-500 text-white rounded-md">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};
export default RestaurantCard;
