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

const hairTreatment = [
  {
    row: [
      {
        icon: "/resources/icons/salon/treatments/keepitcurl.png",
        title: "Keep It Curl Organic Colour Systems Treatment",
        price: "$20.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/treatments/moistureaqua.png",
        title: "Moisture Aqua Boost Organic Treatment",
        price: "$20.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/treatments/breakage.png",
        title: "Breakage & Strength Loss Power Build Treatment",
        price: "$20.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/treatments/organicsmoothplus.png",
        title: "Organic Colour Systems Smooth+ Treatment",
        price: "$20.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/treatments/dryscalp.png",
        title: "Dry Scalp & Dandruff",
        price: "$45.00",
        desc: "Organic Custom Blend & Scalp Tonic"
      },
      {
        icon: "/resources/icons/salon/treatments/dryscalp2.png",
        title: "Dry Scalp & Dandruff",
        price: "$20.00",
        desc: "Dry Scalp Tonic"
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/treatments/claryfying.png",
        title: "Organic Colour Systems Intensive Clarifying",
        price: "$20.00",
        desc: ""
      }
    ]
  }
];

export default class HairTreatments extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Hair Treatment</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={hairTreatment} />
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
