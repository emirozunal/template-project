import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";

class User extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userData: state.user.userData,
  };
};

export default connect(mapStateToProps)(User);
