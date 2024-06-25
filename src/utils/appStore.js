import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore=configureStore({
    reducer:{ //this reducer is for whole app reducer which is consist of 
        cart: cartReducer,
    },
})
export default appStore;