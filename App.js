import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import "./index.css";
import NavbarPage from "./pages/NavbarPage";
import SeriesPage from "./pages/SeriesPage";
import InfoPage from "./pages/InfoPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <div className="app">
        <NavbarPage />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/info" component={InfoPage} />
          <Route path="/series" component={SeriesPage} />
          <Route path="/auth" component={AuthPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
