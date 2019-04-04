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

const mensServices = [
  {
    row: [
      {
        icon: "/resources/icons/salon/mens/haircut.png",
        title: "Haircut",
        price: "$30.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/mens/gray.png",
        title: "Gray Blending",
        price: "$45.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/mens/shaving.png",
        title: "Signature Experience",
        price: "$65.00",
        desc: "Includes scalp massage, hot towel, haircut, and facial hair trim"
      }
    ]
  }
];

export default class MensServices extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Mens Services</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={mensServices} />
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
