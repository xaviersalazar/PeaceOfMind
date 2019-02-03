import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const MainContainer = styled(Container)`
  margin: 6rem auto 3rem auto;
`;

const Lipsticks = styled.img`
  margin: 10px 0;
  border-radius: 50%;
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

export default class BesameLipstick extends Component {
  render() {
    return (
      <MainContainer fluid>
        <Col xs={12} className="mt-5">
          <h1 className="text-center pb-3">Lipstick</h1>
        </Col>
        <Row className="text-center">
          <Col xs={12} md={4}>
            <Lipsticks
              src="/resources/lipsticks/1920-besamered-lipstick.jpg"
              className="img-fluid"
            />
            <p>Besame Red</p>
          </Col>
          <Col xs={12} md={4}>
            <Lipsticks
              src="/resources/lipsticks/1930-noirred-lipstick.jpg"
              className="img-fluid"
            />
            <p>Noir Red</p>
          </Col>
          <Col xs={12} md={4}>
            <Lipsticks
              src="/resources/lipsticks/1930-tangored-lipstick.jpg"
              className="img-fluid"
            />
            <p>Tango Red</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={4}>
            <Lipsticks
              src="/resources/lipsticks/1931-carmine-lipstick.jpg"
              className="img-fluid"
            />
            <p>Carmine</p>
          </Col>
          <Col xs={12} md={4}>
            <Lipsticks
              src="/resources/lipsticks/1933-merlot-lipstick.jpg"
              className="img-fluid"
            />
            <p>Merlot</p>
          </Col>
          <Col xs={12} md={4}>
            <Lipsticks
              src="/resources/lipsticks/1935-cherryred-lipstick.jpg"
              className="img-fluid"
            />
            <p>Cherry Red</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={4}>
            <Lipsticks
              src="/resources/lipsticks/1945-americanbeauty-lipstick.jpg"
              className="img-fluid"
            />
            <p>American Beauty</p>
          </Col>
          <Col xs={12} md={4}>
            <Lipsticks
              src="/resources/lipsticks/1946-redvelvet-lipstick.jpg"
              className="img-fluid"
            />
            <p>Red Velvet</p>
          </Col>
          <Col xs={12} md={4}>
            <Lipsticks
              src="/resources/lipsticks/1955-exoticpink-lipstick.jpg"
              className="img-fluid"
            />
            <p>Exotic Pink</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={4}>
            <Lipsticks
              src="/resources/lipsticks/1959-redhotred-lipstick.jpg"
              className="img-fluid"
            />
            <p>Red Hot Red</p>
          </Col>
          <Col xs={12} md={4}>
            <Lipsticks
              src="/resources/lipsticks/1963-portraitpink-lipstick.jpg"
              className="img-fluid"
            />
            <p>Potrait Pink</p>
          </Col>
          <Col xs={12} md={4}>
            <Lipsticks
              src="/resources/lipsticks/1967-debutantepink-lipstick.jpg"
              className="img-fluid"
            />
            <p>Debutante Pink</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={6}>
            <Lipsticks
              src="/resources/lipsticks/1969-dustyrose-lipstick.jpg"
              className="img-fluid"
            />
            <p>Dusty Rose</p>
          </Col>
          <Col xs={12} md={6}>
            <Lipsticks
              src="/resources/lipsticks/1970-chocolatekiss-lipstick.jpg"
              className="img-fluid"
            />
            <p>Chocolate Kiss</p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Disclaimer>All products sold in store only</Disclaimer>
          </Col>
        </Row>
      </MainContainer>
    );
  }
}
