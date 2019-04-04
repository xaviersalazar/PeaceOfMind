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

const relaxers = [
  {
    row: [
      {
        icon: "/resources/icons/salon/relaxer/relax.png",
        title: "Relaxer",
        price: "$100.00 - $120.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/haircuts/haircut.png",
        title: "Relaxer w/ Haircut",
        price: "$135.00 - $145.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/color/haircolor5.png",
        title: "Relaxer w/ Color",
        price: "$150.00 - $200.00",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/highlighting/ombre-haircut.png",
        title: "Relaxer w/ Haircut & Color",
        price: "$170.00 - $225.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/relaxer/retouch.png",
        title: "Retouch",
        price: "$55.00 - $65.00",
        desc: 'Up to 1"'
      },
      {
        icon: "/resources/icons/salon/haircuts/bandtrim.png",
        title: "Retouch w/ Haircut",
        price: "$80.00 - $100.00",
        desc: 'Up to 1"'
      }
    ]
  }
];

export default class Relaxer extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Relaxer</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={relaxers} />
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
