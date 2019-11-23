import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const MainContainer = styled(Container)`
  background: #f3eff5;
  padding-top: 5rem;
`;

const BesameTitle = styled.h1`
  text-align: center;
  padding: 5rem 0;
`;

const Eye = styled.img`
  margin: 10px 0;
  border-radius: 50%;
  width: 50%;
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

export default class BesameEyes extends Component {
  render() {
    return (
      <MainContainer fluid>
        <Col xs={12} className="mt-5">
          <BesameTitle>Eyes</BesameTitle>
        </Col>
        <Row className="text-center">
          <Col xs={12} md={4}>
            <Eye
              src="/resources/eyes/black-mascara.jpg"
              className="img-fluid"
            />
            <p>Black Mascara</p>
          </Col>
          <Col xs={12} md={4}>
            <Eye src="/resources/eyes/mascara.jpg" className="img-fluid" />
            <p>Brown Cake Mascara</p>
          </Col>
          <Col xs={12} md={4}>
            <Eye src="/resources/eyes/mascara.jpg" className="img-fluid" />
            <p>Black Cake Mascara</p>
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
