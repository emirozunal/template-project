import React, { Component } from "react";
import LogInC from "../../components/LogInC";
import LogInService from "../../services/LogInService";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: null,
    };
  }

  handleUsernameChange = (e) => {
    if ((e.target.id = "username")) {
      this.setState({ username: e.target.value });
      console.log(this.state.username);
    }
  };
  handlePasswordChange = (e) => {
    if ((e.target.id = "password")) {
      this.setState({ password: e.target.value });
      console.log(this.state.password);
    }
  };

  logInButtonOnClick = () => {
    const logInService = new LogInService();
    const logInData = {
      username: this.state.username,
      password: this.state.password,
    };
    logInService
      .createLogIn(logInData)
      .then((res) => console.log(JSON.stringify(res)));
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <LogInC
          logInButtonOnClick={this.logInButtonOnClick}
          handleUsernameChange={this.handleUsernameChange}
          handlePasswordChange={this.handlePasswordChange}
          username={this.state.username}
          password={this.state.password}
        />
      </div>
    );
  }
}
export default LoginPage;
