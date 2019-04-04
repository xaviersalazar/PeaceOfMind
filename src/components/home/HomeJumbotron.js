import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import styled from "styled-components";

const HomeJumbotronStyled = styled(Jumbotron)`
  height: 100vh;
  width: 100%;
  border-radius: 0;
  background: linear-gradient(-45deg, #b3ffab, #12fff7);
  margin-bottom: 0px !important;
`;

const HomeJumbotronBackground = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default class HomeJumbotron extends Component {
  render() {
    return (
      <HomeJumbotronStyled id="home-jumbotron">
        <HomeJumbotronBackground
          className="img-fluid"
          src="/resources/bg.png"
          id="home-jumbotron-bg"
        />
      </HomeJumbotronStyled>
    );
  }
}
