import React, { Component } from "react";
import SeriesService from "../../services/SeriesService";
import Series from "../../components/Series";
import EpisodesService from "../../services/EpisodesService";
import InfoService from "../../services/infoService";
import { connect } from "react-redux";
import { characterInformation } from "../../actions/characterInformation";
import PostService from "../../services/PostService";
import UserService from "../../services/UserService";
import LogInService from "../../services/LogInService";
import HelloService from "../../services/HelloService";
import { userInformation } from "../../actions/userInformation";

class SeriesPage extends Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      episodes: [],
      characterData: null,
      userData: null,
    };
  }
  buttonOnClick = () => {
    const seriesService = new SeriesService("hello emir");
    seriesService
      .getSeriesCharacters()
      .then((res) => {
        this.setState({ characters: res });
      })
      .catch(() => alert("fail"));

    const episodesService = new EpisodesService("hello emir");
    episodesService
      .getSeriesEpisodes()
      .then((res) => {
        this.setState({ episodes: res });
      })
      .catch(() => alert("fail"));
  };

  buttonInfoClick = (e) => {
    const infoService = new InfoService("hello emir");
    infoService
      .getCharacterInfo(e.target.id)
      .then((res) => {
        this.setState({ characterData: res });
        this.props.characterInformation(res);
      })
      .catch(() => alert("fail"));
  };

  postButtonOnClick = () => {
    const postService = new PostService();
    const postData = {
      title: "LOL",
      body: "Multiplayer Online Game",
      userId: 1002,
    };
    postService.createPost(postData).then((res) => alert(JSON.stringify(res)));
  };

  signUpButtonOnClick = () => {
    const userService = new UserService();
    const signUpData = {
      username: "Emiiir",
      email: "Espangas11@gmail.com",
      password: 1122,
    };
    userService
      .createSignUp(signUpData)
      .then((res) => alert(JSON.stringify(res)));
  };

  logInButtonOnClick = () => {
    const logInService = new LogInService();
    const logInData = {
      username: "Emiiir",
      password: 1122,
    };
    logInService
      .createLogIn(logInData)
      .then((res) => console.log(JSON.stringify(res)));
  };
  helloButtonOnClick = () => {
    const helloService = new HelloService();
    helloService.getHello().then((res) => console.log(res));
  };
  //http://54.78.219.186:8000/api/v1/signup/
  // username email password
  //userService ekle, userService signUp methodu ekle ve içine signUp datası yolla,

  //http://54.78.219.186:8000/api/v1/login/
  // username password
  //userService ekle, userService logIn methodu ekle ve içine logIn datası yolla,

  render() {
    return (
      <div>
        <Series
          characters={this.state.characters}
          episodes={this.state.episodes}
          buttonOnClick={this.buttonOnClick}
          buttonInfoClick={this.buttonInfoClick}
          postButtonOnClick={this.postButtonOnClick}
          signUpButtonOnClick={this.signUpButtonOnClick}
          logInButtonOnClick={this.logInButtonOnClick}
          helloButtonOnClick={this.helloButtonOnClick}
        />
      </div>
    );
  }
}

export default connect(null, { characterInformation, userInformation })(
  SeriesPage
);
