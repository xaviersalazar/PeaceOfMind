import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Main from "./components/Main";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import { createGlobalStyle } from "styled-components";
import { ToastContainer } from "react-toastify";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  && {
    body {
      height: 100%;
      width: 100%;
      padding: 0;
      margin: 0;
      overflow-x: hidden;
      font-family: 'Open Sans', sans-serif !important;
      background: #fff !important;
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 700 !important;
      color: #3d3d3d !important;
      text-transform: uppercase;
    }

    .light-text {
      font-weight: 300 !important;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <div>
            <GlobalStyle />
            <Navigation />
            <Main />
            <Footer />
            <ToastContainer />
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

export default App;
