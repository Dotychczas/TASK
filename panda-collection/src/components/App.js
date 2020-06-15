import React, { Component } from "react";
import "./App.scss";

import Header from "./Header/Header";

import Content from "./Page-Content/Content"

class App extends Component {
  state = {
    items: [],
  };
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

    return (
      <div className="main">
        <Header />
        <Content items={this.state.items} />
      </div>
    );
  }
}


export default App;
