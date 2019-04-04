import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const MainContainer = styled(Container)`
  padding-top: 5rem;
  background: #f3eff5;
`;

const ParagraphsCol = styled(Col)`
  padding: 0 3rem;

  @media (min-width: 1440px) {
    padding: 0 10rem !important;
  }
`;

const ServiceIcon = styled.img`
  margin: 10px 0;
  border-radius: 50%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.12);
  width: 20%;

  @media (min-width: 768px) {
    width: 15%;
  }
`;

const ServiceTitle = styled.h1`
  text-align: center;
  padding: 5rem 0 3rem 0;
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

const Price = styled.p`
  font-size: 10px;
`;

export default class HairExtensions extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Hair Extensions</ServiceTitle>
        </ParagraphsCol>
        <Row class="text-center">
          <Col xs={12} style={{ padding: "0 3rem", textAlign: "center" }}>
            <ServiceIcon
              src="/resources/icons/salon/extensions/extensions.png"
              className="img-fluid"
            />
            <Price>
              Preliminary consultation required. Cost of hair extensions
              additional. Price and time quoted at consultation.
              <br />
              Long hair pricing may apply. Additional charge of $15 or $20
            </Price>
          </Col>
        </Row>
        <Row>
          <ParagraphsCol xs={12}>
            <Disclaimer>
              NOTICE: Prices Are Subject To Change Without Prior Notice
            </Disclaimer>
          </ParagraphsCol>
        </Row>
      </MainContainer>
    );
  }
}
