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

const finishingTouches = [
  {
    row: [
      {
        icon: "/resources/icons/salon/finishing/blowdry.png",
        title: "Blow Dry",
        price: "$25.00 - $45.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/finishing/formal.png",
        title: "Formal Up-do",
        price: "$80.00 - $100.00",
        desc: "Braiding, up-styles and curls"
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/finishing/ironworks.png",
        title: "Ironworks",
        price: "$25.00",
        desc: ""
      }
    ]
  }
];

export default class FinishingTouches extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Finishing Touches</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={finishingTouches} />
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
