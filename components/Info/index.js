import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";

class Info extends Component {
  render() {
    return (
      <div className="container__all">
        <img
          alt=""
          className="container__img"
          src={this.props.characterData ? this.props.characterData.image : null}
        ></img>
        <h1 className="container__name">
          {" "}
          {this.props.characterData ? this.props.characterData.name : "loading"}
        </h1>
        <h1 className="container__species">
          {" "}
          {this.props.characterData
            ? this.props.characterData.species
            : "loading"}
        </h1>
        <h1 className="container__status">
          {" "}
          {this.props.characterData
            ? this.props.characterData.status
            : "loading"}
        </h1>
        <h1 className="container__gender">
          {this.props.characterData
            ? this.props.characterData.gender
            : "loading"}
        </h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    characterData: state.character.characterData,
  };
};

export default connect(mapStateToProps)(Info);
