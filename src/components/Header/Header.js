import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../utils/UserContext";
const Title = () => <h1 class="py-10">Incredible Foods</h1>;

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-purple-100 shadow-xl sm:bg-yellow-50 md:bg-orange-400">
      <a href="/">
        <img
          alt="logo"
          className="h-24 p-2"
          src="https://www.just-food.com/wp-content/uploads/sites/28/2021/07/2017-01-25-15-47-incrediblefoodslogo_cropped_90.jpg"
        />
      </a>
      <Title></Title>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to="/cart">Cart</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
      <h1>{user.name}</h1>
      <button
        onClick={() => {
          setIsLoggedIn(!isLoggedIn);
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Header;
