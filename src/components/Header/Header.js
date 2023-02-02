import React, { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => <h1 id="title">Incredible Foods</h1>;

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="header">
      <a href="/">
        <img
          alt="logo"
          className="logo"
          src="https://www.just-food.com/wp-content/uploads/sites/28/2021/07/2017-01-25-15-47-incrediblefoodslogo_cropped_90.jpg"
        />
      </a>
      <Title></Title>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/instamart">Instamart</Link>
          </li>
        </ul>
      </div>
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
