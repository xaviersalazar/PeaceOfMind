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

const locs = [
  {
    row: [
      {
        icon: "/resources/icons/salon/locs/maintainence.png",
        title: "Loc Maintainence",
        price: "$100.00 - $200.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/locs/styling.png",
        title: "Loc Styling",
        price: "$100.00 - $230.00",
        desc: ""
      }
    ]
  }
];

export default class Locs extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Locs</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={locs} />
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
