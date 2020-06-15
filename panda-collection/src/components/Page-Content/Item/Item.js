import React, { Component } from "react";
import "./Item.scss";

class Item extends Component {
  state = {
    addedToCart: 0,
  };
  render() {
   
const addedToCart = this.state.addedToCart
    return (
      
      <>
        <div className={addedToCart ? "hide-item" : "show-item"}>
          <img
            className="itemImg"
            src={`http://localhost:3000${this.props.src}`}
            alt="cannot load file"
          ></img>
          <button  onClick={ this.props.addedToCart +1}>Add to cart</button>

          <div className="item-title">{this.props.title}</div>
          <p className="item-price">
            {this.props.currency}
            {this.props.price}
          </p>
        </div>
      </>
    );
  }
}

export default Item;
