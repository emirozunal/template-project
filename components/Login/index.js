import React, { Component } from "react";
import "./index.css";

class Login extends Component {
  render() {
    return (
      <div className="login__container">
        <h2>LOGIN</h2>
        <input id="username" onChange={this.props.handleChangeLogin}></input>
        Username <h1>{this.props.loginInformation.username}</h1>
        <input id="lastname" onChange={this.props.handleChangeLogin}></input>
        Lastname <h1>{this.props.loginInformation.lastname}</h1>
        <input id="email" onChange={this.props.handleChangeLogin}></input>
        Email <h1>{this.props.loginInformation.email}</h1>
        <input id="password" onChange={this.props.handleChangeLogin}></input>
        Password <h1>{this.props.loginInformation.password}</h1>
        <button onClick={this.props.buttonOnClick}>Login</button>
      </div>
    );
  }
}

export default Login;
