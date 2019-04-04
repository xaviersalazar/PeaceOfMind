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

const straighteningServices = [
  {
    row: [
      {
        icon: "/resources/icons/salon/straightening/organic-blowout.png",
        title: "Organic Colours Systems Ultimate Blowout",
        price: "$150.00",
        desc: ""
      },
      {
        icon:
          "/resources/icons/salon/straightening/organic-blowout-haircut.png",
        title: "Organic Colours Systems Blowout w/ Haircut",
        price: "$170.00 - $180.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/straightening/organic-straightening.png",
        title: "Organic Colours Systems Thermal Straightening",
        price: "$300.00 - $350.00",
        desc: ""
      },
      {
        icon:
          "/resources/icons/salon/straightening/organic-straightening-haircut.png",
        title: "Organic Colours Systems Thermal Straightening w/ Haircut",
        price: "$325.00 - $350.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/relaxer/retouch.png",
        title: "Retouch",
        price: "$245.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/haircuts/bandtrim.png",
        title: "Retouch w/ Haircut",
        price: "$260.00",
        desc: ""
      }
    ]
  }
];

export default class StraighteningServices extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Straightening Services</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={straighteningServices} />
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
