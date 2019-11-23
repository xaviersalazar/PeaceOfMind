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

const FaceProduct = styled.img`
  margin: 10px 0;
  border-radius: 50%;
  width: 50%;
`;

const FaceProductLastRow = styled.img`
  margin: 10px 0;
  border-radius: 50%;
  width: 50%;

  @media (min-width: 767px) {
    width: 25%;
  }
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

export default class BesameFace extends Component {
  render() {
    return (
      <MainContainer fluid>
        <Col xs={12} className="mt-5">
          <BesameTitle>Face</BesameTitle>
        </Col>
        <Row className="text-center">
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/apricot-cream-rouge.jpg"
              className="img-fluid"
            />
            <p>Apricot Cream Rouge</p>
          </Col>
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/bisque-souffle-foundation.jpg"
              className="img-fluid"
            />
            <p>Bisque Souffle Foundation</p>
          </Col>
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/brightening-violet-powder.jpg"
              className="img-fluid"
            />
            <p>Brigthening Violet Powder</p>
          </Col>
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/crimson-cream-rouge.jpg"
              className="img-fluid"
            />
            <p>Crimson Cream Rouge</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/dark-cashmere-powder-compact.jpg"
              className="img-fluid"
            />
            <p>Dark Cashmere Powder Compact</p>
          </Col>
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/honey-souffle-foundation.jpg"
              className="img-fluid"
            />
            <p>Honey Souffle Foundation</p>
          </Col>
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/light-cashmere-powder-compact.jpg"
              className="img-fluid"
            />
            <p>Light Cashmere Powder Compact</p>
          </Col>
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/medium-beige-souffle-foundation.jpg"
              className="img-fluid"
            />
            <p>Medium Beige Souffle Foundation</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/medium-cashmere-powder-compact.jpg"
              className="img-fluid"
            />
            <p>Medium Cashmere Powder Compact</p>
          </Col>
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/porcelain-cashmere-powder-compact.jpg"
              className="img-fluid"
            />
            <p>Porcelain Cashmere Powder Compact</p>
          </Col>
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/refill-dark.jpg"
              className="img-fluid"
            />
            <p>Cashmere Powder Dark Refill</p>
          </Col>
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/refill-light.jpg"
              className="img-fluid"
            />
            <p>Cashmere Powder Light Refill</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/refill-medium.jpg"
              className="img-fluid"
            />
            <p>Cashmere Powder Medium Refill</p>
          </Col>
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/refill-porcelain.jpg"
              className="img-fluid"
            />
            <p>Cashmere Powder Porcelain Refill</p>
          </Col>
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/refill-violet.jpg"
              className="img-fluid"
            />
            <p>Cashmere Powder Violet Refill</p>
          </Col>
          <Col xs={12} md={3}>
            <FaceProduct
              src="/resources/face/true-beige-souffle-foundation.jpg"
              className="img-fluid"
            />
            <p>True Beige Souffle Foundation</p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={6}>
            <FaceProductLastRow
              src="/resources/face/violet-brightening-powder-compacts.jpg"
              className="img-fluid"
            />
            <p>Violet Brightening Powder Compact</p>
          </Col>
          <Col xs={12} md={6}>
            <FaceProductLastRow
              src="/resources/face/yellow-cameo-souffle-foundation.jpg"
              className="img-fluid"
            />
            <p>Yellow Cameo Souffle Foundation</p>
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
