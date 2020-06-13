import React from "react";
import "./Filter.scss";

class Filter extends React.Component {
  state = {
    items: [],
  };
  //fetching data from api

  render() {
    return (
      <>
        <ul className="checkbox-list">
          <p className="filter-title">Filter by</p>
          <hr />
          <li className="filter-list-title">
            Color
            <ul>
              <li>
              <div  className="input_class_checkbox" id="filter-blue" ></div>
                <label htmlFor="filter-blue">blue</label>
              </li>
              <li>
              <div  className="input_class_checkbox" id="filter-pastel-yellow" ></div>
                <label htmlFor="filter-pastel-yellow">pastel yellow</label>
              </li>
              <li>
                <div  className="input_class_checkbox" id="filter-lime-green" ></div>
                <label htmlFor="filter-lime-green">lime green</label>
              </li>
              <li>
              <div  className="input_class_checkbox" id="filter-mint" ></div>
                <label htmlFor="filter-mint">mint</label>
              </li>
            </ul>
          </li>
        </ul>
      </>
    );
  }
}
export default Filter;
