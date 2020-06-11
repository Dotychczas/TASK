import React from "react";
import "./Header.scss";

const Header = (props) => (
    <div class="container">
      <img
        class="itemImg"
        src={`http://localhost:3000${props.src}`}
        alt="cannot load file"
      ></img>
      <button>Add to cart</button>
      <p>
        {props.currency}
        {props.price}
      </p>
      <div>{props.title}</div>
    </div>
  );
  export default Header;