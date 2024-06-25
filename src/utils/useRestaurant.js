import {useState, useEffect} from 'react';
import { RESTAURANT_MENU_URL } from '../Constants';

const useRestaurant=(id)=>{
    
    //use proper names
     const [restaurant, setRestaurant] = useState([]);
     
    useEffect(()=>{
        getRestaurantInfo();//a callback function and a dependency array...
    },[]);  //a dependency array will tells us when it need to update the page each time .....if it is empty it means it will update once after initial render

    async function getRestaurantInfo(){
        const data = await fetch(RESTAURANT_MENU_URL + id);
        const json = await data.json();
        //console.log(json?.data?.cards[2]?.card?.card?.info);
        setRestaurant(json?.data?.cards[2]?.card?.card?.info);
    }
    return restaurant;
}
export default useRestaurant;