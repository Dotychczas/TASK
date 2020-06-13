import React, { Component } from "react";
import "./App.scss";

import Header from "./Header/Header";

import Content from "./Page-Content/Content"

class App extends Component {
  render() {
    console.log("render");

    return (
      <div className="main">
        <Header />
        <Content />
      </div>
    );
  }
}


export default App;
