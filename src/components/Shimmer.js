import React from "react";
const Shimmer = ()=>{
    return (
        <>
      
        <div className="flex flex-wrap mt-8">
        {Array(10).fill("").map((e,index)=><div key={index} className="grid h-[21rem] w-56 bg-gray-50 my-6 mx-4 p-3 border-2 border-gray-200 rounded">
           <div className="h-48 w-48 bg-gray-200 p-2 rounded "></div>
           <div className="w-48 h-12 bg-gray-200 p-2 rounded"></div>
           </div>)}
        </div>
        
        </>
    )
}

export default Shimmer;