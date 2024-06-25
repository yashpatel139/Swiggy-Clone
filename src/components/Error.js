import React from "react";
import { useRouteError } from "react-router-dom";//it gives type of error and 
const Error = () =>{
    const error=useRouteError();
    return(
        <div>
            <h1>OOPs!!</h1>
            <h2>Something wents wrong</h2>
            <h2>{error.status+" "+error.statusText}</h2>
        </div>
    )
};

export default Error;