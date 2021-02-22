import React, { Component } from "react";
import Characters from "../../components/Characters";
import Episodes from "../../components/Episodes";
import "./index.css";

//style={{ display: "flex" }}
class Series extends Component {
  render() {
    return (
      <div className="character__genel">
        <Characters
          characters={this.props.characters}
          buttonOnClick={this.props.buttonOnClick}
          buttonInfoClick={this.props.buttonInfoClick}
        />
        <div>
          <button onClick={this.props.postButtonOnClick}>postPost</button>
          <button onClick={this.props.signUpButtonOnClick}>signUpData</button>
          <button onClick={this.props.logInButtonOnClick}>logInData</button>
        </div>
        <Episodes
          episodes={this.props.episodes}
          buttonOnClick={this.props.buttonOnClick}
        />
      </div>
    );
  }
}

export default Series;
