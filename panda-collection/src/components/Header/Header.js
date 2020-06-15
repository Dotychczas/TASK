import React, { Component } from "react";
import "./Header.scss";
import Burger from "./Burger/Burger";
import SideMenu from "./Side-Menu/Side-menu";




class Header extends Component {
  state ={
    cartCount: 3
  }
  render(){
    return (
      <>
       <div id="header-container">
    <div id="top-header">
      <div>
        <Burger />
       
      </div>

      <img src={"logo.svg"} alt="image" />
      <div className="cart">
      <div className={this.state.cartCount === 0 ? "hide-counter" : "show-counter"}>{this.state.cartCount === 0 ? '' : this.state.cartCount}</div>
        <img src={"icons/shopping-cart.svg"} alt="image" />
    </div>
</div>
    <div id="bottom-header">
      <p id="title">Panda Collection</p>
    </div>
  </div></>
    )
  }
}

export default Header;
