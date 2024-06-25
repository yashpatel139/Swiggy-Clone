import { IMG_CDN_URL } from "../Constants";
import {useDispatch} from 'react-redux';
import {addItem} from "../utils/cartSlice";

const ItemsList = ({ items, dummy }) => {
  const dispatch=useDispatch();
  const handleAddItem=(item)=>{
    dispatch(addItem(item));
  
  }
  return (
    <div className="border-gray-300 border-y-2">
      {items.map((item) => (
        <div className="flex border-b-2 border-gray-200" key={item?.card?.info?.id}>
          <div className="w-3/4 m-2 h-48 text-left overflow-hidden">
            <p className="font-semibold p-1">{item?.card?.info?.category}</p>
            <p className="font-medium px-1">₹ {item?.card?.info?.price ? (item?.card?.info?.price /100) : (item?.card?.info?.defaultPrice /100)}</p>
            <p className="px-1">{item?.card?.info?.description}</p>
          </div>
          <div className="w-1/4 ">
            <img className="p-4 pb-0 m-auto w-full h-40 rounded-lg" src={IMG_CDN_URL + item?.card?.info?.imageId} />
            <button className=" bg-gray-500 text-white rounded-lg px-2" onClick={(()=>handleAddItem(item))}>Add +</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemsList;
