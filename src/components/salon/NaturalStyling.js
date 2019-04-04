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

const naturalStyling = [
  {
    row: [
      {
        icon: "/resources/icons/salon/naturalstyling/shampoo.png",
        title: "Shampoo & Diffuse",
        price: "$35.00 - $60.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/setsandtwists/singletwist.png",
        title: "Basic Corn Row",
        price: "$50.00 - $100.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/setsandtwists/doubletwist.png",
        title: "Corn Row w/ Design",
        price: "$60.00 - $150.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/naturalstyling/knot.png",
        title: "Bantu Knots",
        price: "$80.00 - $150.00",
        desc: ""
      }
    ]
  }
];

export default class NaturalStyling extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Natural Styling</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={naturalStyling} />
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
