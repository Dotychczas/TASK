import React from "react";
import "./Item.scss";

const Item = (props) => (
  <div className="item-container">
    <img
      className="itemImg"
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
export default Item;
