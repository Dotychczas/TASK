import React from "react";
import "./Content.scss";
import Filter from "./Filter/Filter";
import Item from "./Item/Item";

class Content extends React.Component {
  state = {
    items: this.props.items,
  };
  //fetching data from api
  componentDidMount() {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          items: data,
        });
      });
  }
  render() {
    console.log(this.props.items);
    const items = this.state.items.map((item) => (
    
      <Item
        key={item.id}
        title={item.title}
        src={item.images.thumbnail}
        price={item.prices.base}
        currency={item.currency}
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
