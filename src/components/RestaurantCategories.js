import { IMG_CDN_URL } from "../Constants";
import ItemsList from "./ItemsList";
import { useState } from "react";

const RestaurantCategories = ({ data, showItems, setShowIndex }) => {
  //const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowIndex();
    console.log(showItems);
    //setShowItems(!showItems);
  };
  return (
    <div className="text-center w-1/2 bg-gray-50 mx-auto border-y-8 border-gray-200">
      <div onClick={handleClick}
       className="text-left p-3 font-bold text-xl cursor-pointer relative flex justify-between">
        {data?.title} ({data?.itemCards?.length})
      <p className="px-3 font-bold cursor-pointer">⮟</p>
      </div>
      {showItems && <ItemsList items={data?.itemCards} />}
    </div>
  );
};

export default RestaurantCategories;
