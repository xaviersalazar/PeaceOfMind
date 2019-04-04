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

const setsAndTwists = [
  {
    row: [
      {
        icon: "/resources/icons/salon/setsandtwists/pressandcurl.png",
        title: "Press and Curl",
        price: "$100.00 - $150.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/setsandtwists/shampoo.png",
        title: "Shampoo Services w/ Two-Stand Twist",
        price: "$95.00 - $110.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/setsandtwists/shampoo2.png",
        title: "Shampoo Services w/ Flat-Twist Set",
        price: "$95.00 - $110.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/setsandtwists/singletwist.png",
        title: "Single Twist Comb Twist",
        price: "$90.00 - $200.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/setsandtwists/doubletwist.png",
        title: "Double Twist Two Strand",
        price: "$90.00 - $200.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/setsandtwists/straw.png",
        title: "Straw Set",
        price: "$90.00 - $150.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/setsandtwists/rod.png",
        title: "Rod Set",
        price: "$90.00 - $150.00",
        desc: ""
      }
    ]
  }
];

export default class SetsAndTwists extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Sets &amp; Twists</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={setsAndTwists} />
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
