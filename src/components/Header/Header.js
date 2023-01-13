import React from "react";

const Title = () => <h1 id="title">Incredible Foods</h1>;

const Header = () => {
  return (
    <div className="header">
      {/* <a href="/"> */}
      <img
        alt="logo"
        className="logo"
        src="https://www.just-food.com/wp-content/uploads/sites/28/2021/07/2017-01-25-15-47-incrediblefoodslogo_cropped_90.jpg"
      />
      {/* </a> */}
      <Title></Title>
      <div className="nav-items">
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
