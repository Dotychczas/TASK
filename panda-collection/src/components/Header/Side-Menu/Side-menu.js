import React from "react";
import "./Side-menu.scss";
const SideMenu = (props) => {
  console.log(props);
  return (

    <div className={props.isOpen ? "side-menu-open" : "side-menu-close"}>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>My Account</li>
        <li>Customer Service</li>
      </ul>
  
      </div>
  );
};

export default SideMenu;
