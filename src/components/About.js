import React, {useContext} from "react";
import { Outlet, Link } from "react-router-dom"
import UserContext from "../utils/UserContext";

const About = () =>{
    return(
        <>
        <div>
            <UserContext.Consumer>
                {({loggedInUser})=>(
                    <h1 className="font-semibold text-lg">LoggedIn User: {loggedInUser}</h1>
                )}
            </UserContext.Consumer>
        </div>
        <h2>This is a swiggy app clone</h2>
        <h3>Made by Yash Patel</h3>
        <Link to="/about/profile" className="bg-blue-500 rounded-lg text-white font-semibold p-1">Profile</Link>
        <Outlet/>
        </>
    )
}

export default About;