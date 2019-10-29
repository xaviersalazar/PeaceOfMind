import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import ServiceCardRow from "../common/ServiceCardRow";

const MainContainer = styled(Container)`
  padding: 5rem 2.5rem 0 2.5rem !important;
  background: #f3eff5;

  @media (min-width: 768px) {
    background-attachment: fixed;
    padding: 5rem 3.5rem 0 3.5rem !important;
  }

  @media (min-width: 992px) {
    padding: 5rem 5rem 0 5rem !important;
  }
`;

const Background = styled.div`
  background-image: url("/resources/services/salon/highlight-main.jpg");
  height: 50vh;
  width: 100vw;
  min-width: 100vw;
  background-attachment: scroll;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    background-attachment: fixed;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 25%;
  right: 50%;
  transform: translateX(50%);
  font-size: 4.5rem;
  color: #fff !important;
`;

const Hr = styled.hr`
  background: #fff;
  padding: 0;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 992px) {
    width: 81%;
  }
`;

const ParagraphsCol = styled(Col)`
  padding: 0 3rem;

  @media (min-width: 1440px) {
    padding: 0 10rem !important;
  }
`;

const ServiceTitle = styled.h1`
  color: #fff !important;
  font-size: 3.5rem;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;
const hairHighlighting = [
  {
    row: [
      {
        icon: "/resources/services/salon/highlight-foil.jpg",
        title: "Foil+",
        price: "$120.00 - $140.00",
        desc:
          "The ultimate in hair coloring, providing smoothness, protection and brilliant shine for long-lasting color",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/highlight-foil-haircut.jpg",
        title: "Foil w/ Haircut+",
        price: "$120.00 - $150.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/highlight-partial-foil.jpg",
        title: "Partial Foil+",
        price: "$60.00 - 80.00",
        desc: "Up to 12 foils",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/highlight-partial-foil-haircut.jpg",
        title: "Partial Foil w/ Haircut+",
        price: "$70.00 - $90.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/services/salon/highlight-accent-foil.jpg",
        title: "Accent Foil+",
        price: "$40.00 - $60.00+",
        desc: "Up to 4 foils",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/highlight-dimensional.jpg",
        title: "Dimensional Color+",
        price: "$120.00 - $140.00",
        desc: "Two or more colors to create a unique, multi-dimensional look",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/highlight-ombre.jpg",
        title: "Ombre Hair",
        price: "$130.00 - $160.00",
        desc:
          "Coloring technique where a gradual fading of color from dark to light, or vice-versa, is achieved",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/highlight-ombre-haircut.jpg",
        title: "Ombre w/ Haircut",
        price: "$150.00 - $180.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/services/salon/highlight-balayage.jpg",
        title: "Balayage Freehand+",
        price: "$120.00 - $160.00+",
        desc:
          "Technique of applying highlights, or lowlights, with select pieces of hair receiving the color enhancement",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/highlight-balayage-haircut.jpg",
        title: "Balayage w/ Haircut+",
        price: "$140.00 - $160.00+",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      }
    ]
  }
];

export default class HairHighlights extends Component {
  render() {
    return (
      <div>
        <Title>
          <ServiceTitle>Hair Highlighting</ServiceTitle>
          <Hr />
        </Title>
        <Background />
        <MainContainer fluid>
          <ServiceCardRow rows={hairHighlighting} />
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
      </div>
    );
  }
}
