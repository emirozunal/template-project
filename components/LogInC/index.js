import React, { Component } from "react";

class LogınC extends Component {
  render() {
    return (
      <div>
        <input onChange={this.props.handleUsernameChange}></input>
        <h2>username: {this.props.username ? this.props.username : null}</h2>
        <input onChange={this.props.handlePasswordChange}></input>
        <h2>password: {this.props.password}</h2>
        <button onClick={this.props.logInButtonOnClick}>login</button>
      </div>
    );
  }
}
export default LogınC;
