import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/Main";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  && {
    body {
      height: 100%;
      width: 100%;
      padding: 0;
      margin: 0;
      overflow-x: hidden;
      font-family: 'Montserrat', sans-serif !important;
      background: #fffafb !important;
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 900 !important;
      color: #3d3d3d !important;
      text-transform: uppercase;
    }
  
    p {
      font-weight: 200 !important;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Navigation />
        <Main />
      </div>
    );
  }
}

export default App;
