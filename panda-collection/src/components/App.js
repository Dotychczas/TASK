import React, { Component } from "react";
import "./App.scss";
import Item from "./Item";

class App extends Component {
  state = {
    items: [],
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
    console.log("render");
    const header = 
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
        <div id="header">{header}</div>
        <div id="item-container">{items}</div>
      </>)
  }
}
export default App;
