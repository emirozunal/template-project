import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";

class Characters extends Component {
  render() {
    let characters = null;

    //style={{ display: "flex" }}

    if (this.props.characters.length > 0) {
      characters = this.props.characters.map((character) => {
        return (
          <div className="container__character">
            <h1 className="name__character">{character.name}</h1>
            <Link to="/info">
              <img
                alt=""
                className="img__character"
                key={character.id}
                id={character.id}
                onClick={this.props.buttonInfoClick}
                src={character.image}
              ></img>
            </Link>
            {/* <h1>{character.id}</h1> */}
          </div>
        );
      });
    }

    return (
      <div className="test">
        <button onClick={this.props.buttonOnClick}>Characters</button>
        {characters}
      </div>
    );
  }
}
export default Characters;

// [
//   {
//     name:"Rick",
//     image:"https://image.ricj.com"
//   },
//   {
//     name:"Rick2",
//     image:"https://image.ricj.com"
//   },
//   {
//     name:"Rick3",
//     image:"https://image.ricj.com"
//   },{
//     name:"Rick",
//     image:"https://image.ricj.com"
//   }
// ]

// =======>>>>>> MAPLEDIM

// [
//   <div>
// <h1>Rick</h1>
// <img i></img>
//   </div>
//  <div>
//  <h1>Rick</h1>
//  <img i></img>
//    </div>
//  <div>
//  <h1>Rick</h1>
//  <img i></img>
//    </div>
//  <div>
//  <h1>Rick</h1>
//  <img i></img>
//    </div>
// ]
