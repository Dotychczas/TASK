import React from "react";
import "./Content.scss";
import Filter from "./Filter/Filter";
import Item from "./Item/Item";

class Content extends React.Component {
  state = {
    items: this.props.items,
    cartCounter: 0,
  };

  getCartCount() {
    this.props.getCartCount(this.state.cartCounter);
    this.setState({ cartCounter: this.state.cartCounter + 1 });
  }
  render() {
    const items = this.props.items.map((item) => (
      <Item
        key={item.id}
        title={item.title}
        src={item.images.thumbnail}
        price={item.prices.base}
        currency={item.currency}
        // getCartCount={() => this.getCartCount()}
      />
    ));

    return (
      <>
        <div className="content-container">
          <Filter />

          <div id="item-container">{items}</div>
        </div>
      </>
    );
  }
}
export default Content;
