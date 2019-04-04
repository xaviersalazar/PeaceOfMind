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

const specialtyExtensions = [
  {
    row: [
      {
        icon: "/resources/icons/salon/specialty/kinky.png",
        title: "Kinky Twist",
        price: "$150.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/specialty/rope.png",
        title: "Rope Twist",
        price: "$170.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/specialty/micro.png",
        title: "Micro Braids",
        price: "$300.00 - $450.00",
        desc: ""
      }
    ]
  }
];

export default class SpecialtyExtensions extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Specialty w/ Extensions</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={specialtyExtensions} />
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
