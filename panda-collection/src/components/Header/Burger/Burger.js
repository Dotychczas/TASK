import React from "react";
import "./Burger.scss";
import SideMenu from "../Side-Menu/Side-menu";

class Burger extends React.Component {
  

   state = {
      isOpen: false,
    };


  closeMenu() {
   
    this.setState({ isOpen: this.state.isOpen });
  }

  render() {


const isOpen = this.state.isOpen
    return (
      <>
        <SideMenu isOpen={isOpen}/>
      <div className={isOpen ? "menu-open" : "menu-close"} onClick={ () => this.setState({isOpen: !isOpen})}>
        <div />
        <div />
        <div />
      </div>
    
      </>
    );
  }
}
export default Burger;
