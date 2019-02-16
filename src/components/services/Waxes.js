import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import ServiceRows from "../common/ServiceRows";

const MainContainer = styled(Container)`
  padding-top: 5rem;
  background: #f3eff5;
`;

const ServiceTitle = styled.h1`
  text-align: center;
  padding: 5rem 0;
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

const ParagraphsCol = styled(Col)`
  padding: 0 3rem;

  @media (min-width: 1440px) {
    padding: 0 10rem !important;
  }
`;

const waxes = [
  {
    row: [
      {
        icon: "/resources/icons/waxing/arm.png",
        title: "Arm Waxing",
        price: "$25.00",
        desc: ""
      },
      {
        icon: "/resources/icons/waxing/back.png",
        title: "Back Waxing",
        price: "$70.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/waxing/bikini.png",
        title: "Bikini Waxing",
        price: "$35.00",
        desc: ""
      },
      {
        icon: "/resources/icons/waxing/brazilianbikini.png",
        title: "Brazilian Bikini Waxing",
        price: "$80.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/waxing/chest.png",
        title: "Chest Waxing",
        price: "$50.00",
        desc: ""
      },
      {
        icon: "/resources/icons/waxing/chin.png",
        title: "Chin Waxing",
        price: "$18.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/waxing/extendedbikini.png",
        title: "Extended Bikini Waxing",
        price: "$55.00",
        desc: ""
      },
      {
        icon: "/resources/icons/waxing/eyebrow.png",
        title: "Eyebrow Waxing",
        price: "$25.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/waxing/face.png",
        title: "Face Waxing",
        price: "$50.00",
        desc: ""
      },
      {
        icon: "/resources/icons/waxing/leg.png",
        title: "Full Leg Waxing",
        price: "$70.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/waxing/lip.png",
        title: "Lip Waxing",
        price: "$20.00",
        desc: ""
      },
      {
        icon: "/resources/icons/waxing/lowerlegs.png",
        title: "Lower Leg Waxing",
        price: "$40.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/waxing/underarm.png",
        title: "Underarm Waxing",
        price: "$28.00",
        desc: ""
      },
      {
        icon: "/resources/icons/waxing/upperleg.png",
        title: "Upper Leg Waxing",
        price: "$40.00",
        desc: ""
      }
    ]
  }
];

export default class Waxes extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Full Waxing Services</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={waxes} />
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
