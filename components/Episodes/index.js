import React, { Component } from "react";
import "./index.css";

//style={{ display: "flex", borderStyle: "solid" }}
class Episodes extends Component {
  render() {
    let episodes = null;
    if (this.props.episodes.length > 0) {
      episodes = this.props.episodes.map((episode) => {
        return (
          <div className='episodes__conainer'>
            <h1>{episode.name}</h1>
            <h1>{episode.air_date}</h1>
            <h1>{episode.episode}</h1>
          </div>
        );
      });
    }

    return (
      <div>
        <button onClick={this.props.buttonOnClick}>Characters</button>
        {episodes}
      </div>
    );
  }
}
export default Episodes;
