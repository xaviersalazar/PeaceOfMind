import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import { Main } from "./components/Main";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/common/ScrollToTop";
import { ToastContainer } from "react-toastify";
import { createGlobalStyle } from "styled-components";

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

    .navbar-scroll {
      background: #fff !important;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
      transition: 0.8s all;
    }

    .top-level-nav-link {
      font-weight: 700 !important;
    }

    .top-level-nav-link-white {
      color: #fff !important;
    }

    .top-level-nav-link-black {
      color: #3d3d3d !important;
    }

    .navbar-toggler {
      position: absolute;
      right: 0;
    }

    .dropdown-item:active {
      background-color: transparent;
      background: linear-gradient(-45deg, #b3ffab, #12fff7);
    }

    .navbar-dark .navbar-toggler-icon {
      background-image: url('/resources/bars-solid-white.svg');
    }
  }
`;

export const App = () => (
  <Router>
    <ScrollToTop>
      <>
        <GlobalStyle />
        <Navigation />
        <Main />
        <Footer />
        <ToastContainer />
      </>
    </ScrollToTop>
  </Router>
);
