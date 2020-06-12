import React, { Component } from "react";
import "./App.scss";
import Item from "./Item/Item";
import Header from "./Header/Header";

class App extends Component {
  render() {
    console.log("render");

    return (
      <>
        <Header />
        <Content />
        
      </>
    );
  }
}

class Content extends React.Component {
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
    console.log("Content");

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
        <div id="item-container">{items}</div>
      </>
    );
  }
}
export default App;
