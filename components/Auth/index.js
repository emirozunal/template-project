import React, { Component } from "react";
import Login from "../../components/Login";
import SignUp from "../../components/SignUp";
import "./index.css";

class Auth extends Component {
  render() {
    return (
      <div className="container">
        <Login
          loginInformation={this.props.loginInformation}
          handleChangeLogin={this.props.handleChangeLogin}
          buttonOnClick={this.props.buttonOnClick}
          helloButtonOnClick={this.props.helloButtonOnClick}
        />
        <SignUp
          signupInformation={this.props.signupInformation}
          handleChangeSignup={this.props.handleChangeSignup}
          buttonOnClickSign={this.props.buttonOnClickSign}
        />
      </div>
    );
  }
}

export default Auth;
