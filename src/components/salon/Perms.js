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

const perms = [
  {
    row: [
      {
        icon: "/resources/icons/salon/perms/basic.png",
        title: "Basic Wave",
        price: "$90.00 - $120.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/highlighting/ombre-haircut.png",
        title: "Basic Wave w/ Haircut",
        price: "$95.00 - $130.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/perms/specialty.png",
        title: "Specialty Wave",
        price: "$95.00 - $140.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/highlighting/foil-haircut.png",
        title: "Specialty Wave w/ Haircut",
        price: "$110.00 - $150.00",
        desc: ""
      }
    ]
  }
];

export default class Perms extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Perms</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={perms} />
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
