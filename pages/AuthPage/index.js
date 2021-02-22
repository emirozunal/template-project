import React, { Component } from "react";
import Auth from "../../components/Auth";
import { connect } from "react-redux";
import { userLogin } from "../../actions/userLogin";
import { userSignup } from "../../actions/userSignup";

class AuthPage extends Component {
  constructor() {
    super();
    this.state = {
      loginInformation: {
        username: "",
        lastname: "",
        email: "",
        password: "",
      },
      signupInformation: {
        username: "",
        lastname: "",
        email: "",
      },
    };
  }
  handleChangeLogin = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    if (id === "username") {
      this.setState((prevState) => ({
        loginInformation: {
          ...prevState.loginInformation,
          username: value,
        },
      }));
    } else if (id === "lastname") {
      this.setState((prevState) => ({
        loginInformation: {
          ...prevState.loginInformation,
          lastname: value,
        },
      }));
    } else if (id === "email") {
      this.setState((prevState) => ({
        loginInformation: {
          ...prevState.loginInformation,
          email: value,
        },
      }));
    } else if (id === "password") {
      this.setState((prevState) => ({
        loginInformation: {
          ...prevState.loginInformation,
          password: value,
        },
      }));
    }
  };
  handleChangeSignup = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    if (id === "username") {
      this.setState((prevState) => ({
        signupInformation: {
          ...prevState.signupInformation,
          username: value,
        },
      }));
    } else if (id === "lastname") {
      this.setState((prevState) => ({
        signupInformation: {
          ...prevState.signupInformation,
          lastname: value,
        },
      }));
    } else if (id === "email") {
      this.setState((prevState) => ({
        signupInformation: {
          ...prevState.signupInformation,
          email: value,
        },
      }));
    }
  };

  buttonOnClick = () => {
    this.props.userLogin(this.state.loginInformation.username);
  };
  buttonOnClickSign = () => {
  
    this.props.userSignup(this.state.signupInformation.lastname);
  };

  render() {
    return (
      <Auth
        loginInformation={this.state.loginInformation}
        signupInformation={this.state.signupInformation}
        buttonOnClick={this.buttonOnClick}
        handleChangeLogin={this.handleChangeLogin}
        handleChangeSignup={this.handleChangeSignup}
        buttonOnClickSign={this.buttonOnClickSign}
      />
    );
  }
}

export default connect(null, { userLogin, userSignup })(AuthPage);
