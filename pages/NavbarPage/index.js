import React, { Component } from "react";
import Navbar from "../../components/Navbar";

export class NavbarPage extends Component {
  constructor() {
    super();
    this.state = {}; // for future possible state usage...
  }
  render() {
    return (
      <div>
        <Navbar/>
      </div>
    );
  }
}

export default NavbarPage;



