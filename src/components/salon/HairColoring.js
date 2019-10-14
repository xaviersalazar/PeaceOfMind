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
  background-image: url("/resources/services/salon/haircolor-main.jpg");
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

const hairColoring = [
  {
    row: [
      {
        icon: "/resources/services/salon/haircolor-premium.jpg",
        title: "Premium Color",
        price: "$85.00 - $105.00",
        desc:
          "The ultimate in hair coloring, providing smoothness, protection and brilliant shine for long-lasting color",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/haircolor-premium-haircut.jpg",
        title: "Premium Color w/ Haircut",
        price: "$85.00 - $110.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/haircolor-single.jpg",
        title: "Single-Process",
        price: "$65.00+",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/haircolor-single-haircut.jpg",
        title: "Single-Process w/ Haircut",
        price: "$85.00 - $95.00",
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
        icon: "/resources/services/salon/haircolor-double.jpg",
        title: "Double-Process+",
        price: "$90.00 - $120.00",
        desc: "Bleach & tone or high lift color & tone",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/haircolor-double-haircut.jpg",
        title: "Double-Process w/ Haircut+",
        price: "$105.00 - $120.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/haircolor-gloss.jpg",
        title: "Glossing+",
        price: "$20.00",
        desc: "Performed following chemical service to add intense shine",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/haircolor-rinse.jpg",
        title: "Temporary Color Rinse",
        price: "$15.00",
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
        icon: "/resources/services/salon/haircolor-corrective.jpg",
        title: "Corrective Color",
        price: "$90.00 - $120.00+",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      }
    ]
  }
];

export default class HairColoring extends Component {
  render() {
    return (
      <div>
        <Title>
          <ServiceTitle>Hair Coloring</ServiceTitle>
          <Hr />
        </Title>
        <Background />
        <MainContainer fluid>
          <ServiceCardRow rows={hairColoring} />
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
