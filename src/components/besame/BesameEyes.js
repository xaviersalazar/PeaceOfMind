import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const MainContainer = styled(Container)`
  margin: 6rem auto 3rem auto;
`;

const Eye = styled.img`
  margin: 10px 0;
  border-radius: 50%;
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
          <h1 className="text-center pb-3">Eyes</h1>
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
        <Disclaimer>All products sold in store only</Disclaimer>
      </MainContainer>
    );
  }
}
