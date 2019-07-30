import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import ServiceRows from "../common/ServiceRows";

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

const ServiceTitle = styled.h1`
  text-align: center;
  padding: 5rem 0 3rem 0;
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

const haircuts = [
  {
    row: [
      {
        icon: "/resources/icons/salon/haircuts/haircut.png",
        title: "Haircut & Blow dry",
        price: "$72.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/haircuts/express.png",
        title: "Express cut",
        price: "$35.00 - $45.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/haircuts/kids.png",
        title: "Kid's Haircut (12 & under)",
        price: "$15.00 - $20.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/haircuts/bandtrim.png",
        title: "Complimentary Band Trim",
        price: "FREE (Service not required)",
        desc: ""
      }
    ]
  }
];

export default class Haircuts extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Haircuts</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={haircuts} />
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
