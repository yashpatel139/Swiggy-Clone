// normal java script function
export function filterData(searchText, allRestaurants){
    const filterData=allRestaurants.filter((restro)=> restro?.info?.name?.toLowerCase()?.includes(searchText?.toLowerCase()))
    return filterData;
  };