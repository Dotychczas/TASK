import React from "react";
import "./Header.scss";
import Burger from "./Burger/Burger";
const Header = (props) => (
  <div id="header-container">
    <div id="top-header">
      <div>
        <Burger />
      </div>

      <img src={"logo.svg"} alt="image" />
      <img src={"icons/shopping-cart.svg"} alt="image" />
    </div>

    <div id="bottom-header">dół</div>
  </div>
);
export default Header;
