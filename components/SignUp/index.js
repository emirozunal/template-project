import React, { Component } from "react";

class Signup extends Component {
  render() {
    return (
      <div className="signup__container">
        <h2>SIGN UP</h2>
        <input id="username" onChange={this.props.handleChangeSignup}></input>
        Username <h1>{this.props.signupInformation.username}</h1>
        <input id="lastname" onChange={this.props.handleChangeSignup}></input>
        Lastname <h1>{this.props.signupInformation.lastname}</h1>
        <input id="email" onChange={this.props.handleChangeSignup}></input>
        Email <h1>{this.props.signupInformation.email}</h1>
        <button onClick={this.props.buttonOnClickSign}>SignUp</button>
      </div>
    );
  }
}

export default Signup;
