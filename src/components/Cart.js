import {useSelector, useDispatch} from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemsList";

const Cart=()=>{

    const cartItems=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleClearButton=()=>{
        dispatch(clearCart());
    };
    return(
        <div className="text-center w-1/2 m-auto">
            <button onClick={handleClearButton} className="bg-gray-600 text-white text-lg rounded-lg p-2 m-2"> 
                Clear Cart
            </button>
            {cartItems.length==0 && (<h1 className="text-xl font-semibold">Your Cart is Empty</h1>)}
            <div className="">
            <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;