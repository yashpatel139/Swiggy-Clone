import image from "../assets/food villa logo.png";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const { loggedInUser } = useContext(UserContext);

  const CartItems = useSelector((store) => store.cart.items); //calling cart from store

  return (
    <div className="p-2 bg-gray-300 flex">
      <div className="flex">
        <img className="h-18 w-1/5" src={image} alt="logo" />
      </div>
      <div className="flex items-center text-lg">
        <ul className="flex content-center gap-5 mx-4">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/instamart">
            <li>Instamart</li>
          </Link>
          <Link to="/cart">
            <li className="">
              <p className="flex">
                
                <img
                  className="h-8 w-8"
                  src="https://cdn-icons-png.flaticon.com/512/2543/2543193.png"
                  alt="cart-logo"
                />
                ({CartItems.length}items)
              </p>
            </li>
          </Link>
          <li className="ml-6">
            {isLogedIn ? (
              <button
                className="bg-blue-200 px-1 hover:bg-blue-300 rounded border-violet-500 border-2"
                onClick={() => setIsLogedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button
                className="bg-blue-200 px-1 hover:bg-blue-300 rounded border-violet-500 border-2"
                onClick={() => setIsLogedIn(true)}
              >
                Login
              </button>
            )}
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
