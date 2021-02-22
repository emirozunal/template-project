import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { connect } from "react-redux";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="nav">
          <Link to="/" className="home__link">
            <div className="home__option">
              <span>HOME PAGE</span>
            </div>
          </Link>
          <h1>{this.props.username}</h1>
          <h2>{this.props.lastname}</h2>
          <Link to="/auth" className="login__link">
            <div className="login__option">
              <span>AUTH PAGE</span>
            </div>
          </Link>
          <Link to="/series" className='series__link'>
            <div className='series__page'>
              <span>SERIES PAGE</span>
            </div>
          </Link>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    lastname: state.lastname,
  };
};

export default connect(mapStateToProps)(Navbar);
