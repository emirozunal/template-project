import React, { Component } from "react";
import Home from "../../components/Home";
import HelloService from "../../services/HelloService";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      userNameHidden: true,
      lastname: "",
      lastNameHidden: true,
      buttonActive: false,
      query: "",
      queryUsername: ""
    };
  }
  buttonOnClick = () => {
    this.setState({ buttonActive: true });
    const helloService = new HelloService("hello emir");
    // helloService.getHello();
    helloService.getSearchQueries()
      .then((res) => {
        this.setState({ query: res.query, queryUsername: res.username});
      })
      .catch(() => alert("fail"));
  };
  handleChange = (e) => {
    if (e.target.value === "") {
      if (e.target.id === "username") {
        this.setState({ username: "", userNameHidden: true });
      } else {
        this.setState({ lastname: "", lastNameHidden: true });
      }
    } else {
      if (e.target.id === "lastname") {
        this.setState({ username: e.target.value, userNameHidden: false });
      } else {
        this.setState({ lastname: e.target.value, lastNameHidden: false });
      }
    }
  };

  render() {
    return (
      <Home
        username={this.state.username}
        buttonOnClick={this.buttonOnClick}
        handleChange={this.handleChange}
        userNameHidden={this.state.userNameHidden}
        lastname={this.state.lastname}
        lastNameHidden={this.state.lastNameHidden}
        buttonActive={this.state.buttonActive}
        query={this.state.query}
        queryUsername={this.state.queryUsername}
      />
      
    );
  }
}

export default HomePage;
