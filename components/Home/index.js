import React, { Component } from "react";


class Home extends Component {
  render() {
    return (
      <div>
        <h1 hidden={this.props.userNameHidden}>{this.props.username}</h1>
        <h1 hidden={this.props.lastNameHidden}>{this.props.lastname}</h1>
        <button onClick={this.props.buttonOnClick}>button</button>
        <input id="username" onChange={this.props.handleChange}></input>
        <input id="lastname" onChange={this.props.handleChange}></input>
        <h3
          className="username__lastname__info"
          //   style={{ backgroundColor: "green" }}
          hidden={!this.props.buttonActive}
        >
          {this.props.username} {this.props.lastname}
        </h3>
        <h1>{this.props.query === "" ? "nothing" : this.props.query}</h1>
        <h1>{this.props.queryUsername === "" ? "nothing" : this.props.queryUsername}</h1>
        
      </div>
    );
  }
}

export default Home;
