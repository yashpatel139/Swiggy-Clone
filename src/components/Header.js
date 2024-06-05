import React from "react";
import image from "../assets/food villa logo.png";

const Header=()=>{
    return(
        <div className="header">
            <div className="logo"><img src={image} alt="logo"></img>
            </div>
            <div className="icons">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;