import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import styled from "styled-components";

const HomeJumbotronStyled = styled(Jumbotron)`
  height: 100vh;
  width: 100%;
  margin-bottom: 0px !important;
  padding: 0 !important;
`;

const HomeJumbotronBackground = styled.div`
  background-image: url("/resources/background.jpg");
  height: 100vh;
  width: 100vw;
  min-width: 100vw;
  background-attachment: scroll;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    background-attachment: fixed;
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 35%;
  right: 50%;
  transform: translateX(50%);

  @media (min-width: 768px) {
    top: 30%;
  }
`;

export default class HomeJumbotron extends Component {
  render() {
    return (
      <HomeJumbotronStyled id="home-jumbotron">
        <Logo src="/resources/logo-main.png" className="img-fluid" />
        <HomeJumbotronBackground id="home-jumbotron-bg" />s
      </HomeJumbotronStyled>
    );
  }
}
