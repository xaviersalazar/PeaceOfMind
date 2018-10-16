import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
