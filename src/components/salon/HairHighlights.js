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

const hairHighlighting = [
  {
    row: [
      {
        icon: "/resources/icons/salon/highlighting/foil.png",
        title: "Foil+",
        price: "$120.00 - $140.00",
        desc:
          "The ultimate in hair coloring, providing smoothness, protection and brilliant shine for long-lasting color"
      },
      {
        icon: "/resources/icons/salon/highlighting/foil-haircut.png",
        title: "Foil w/ Haircut+",
        price: "$120.00 - $150.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/highlighting/partial-foil.png",
        title: "Partial Foil+",
        price: "$60.00 - 80.00",
        desc: "Up to 12 foils"
      },
      {
        icon: "/resources/icons/salon/highlighting/partial-foil-haircut.png",
        title: "Partial Foil w/ Haircut+",
        price: "$70.00 - $90.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/highlighting/accent-foil.png",
        title: "Accent Foil+",
        price: "$40.00 - $60.00+",
        desc: "Up to 4 foils"
      },
      {
        icon: "/resources/icons/salon/highlighting/dimensional.png",
        title: "Dimensional Color+",
        price: "$120.00 - $140.00",
        desc: "Two or more colors to create a unique, multi-dimensional look"
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/highlighting/ombre.png",
        title: "Ombre Hair",
        price: "$130.00 - $160.00",
        desc:
          "Coloring technique where a gradual fading of color from dark to light, or vice-versa, is achieved"
      },
      {
        icon: "/resources/icons/salon/highlighting/ombre-haircut.png",
        title: "Ombre w/ Haircut",
        price: "$150.00 - $180.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/highlighting/balayage.png",
        title: "Balayage Freehand+",
        price: "$120.00 - $160.00+",
        desc:
          "Technique of applying highlights, or lowlights, with select pieces of hair receiving the color enhancement"
      },
      {
        icon: "/resources/icons/salon/highlighting/balayage-haircut.png",
        title: "Balayage w/ Haircut+",
        price: "$140.00 - $160.00+",
        desc: ""
      }
    ]
  }
];

export default class HairHighlights extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Hair Highlighting</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={hairHighlighting} />
        <Row>
          <ParagraphsCol xs={12}>
            <Disclaimer>
              NOTICE: Prices Are Subject To Change Without Prior Notice
              <br />
              <small style={{ fontWeight: "inherit" }}>
                +Upcharge of $20 for premium color
              </small>
            </Disclaimer>
          </ParagraphsCol>
        </Row>
      </MainContainer>
    );
  }
}
