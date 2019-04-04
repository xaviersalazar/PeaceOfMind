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

const hairColoring = [
  {
    row: [
      {
        icon: "/resources/icons/salon/color/haircolor.png",
        title: "Premium Color",
        price: "$85.00 - $105",
        desc:
          "The ultimate in hair coloring, providing smoothness, protection and brilliant shine for long-lasting color"
      },
      {
        icon: "/resources/icons/salon/color/haircolor2.png",
        title: "Premium Color w/ Haircut",
        price: "$85.00 - $110.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/color/haircolor3.png",
        title: "Single-Process",
        price: "$65.00+",
        desc: ""
      },
      {
        icon: "/resources/icons/salon/color/haircolor4.png",
        title: "Single-Process w/ Haircut",
        price: "$85.00 - $95.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/color/haircolor5.png",
        title: "Double-Process+",
        price: "$90.00 - $120.00+",
        desc: "Bleach & tone or high lift color & tone"
      },
      {
        icon: "/resources/icons/salon/color/haircolor6.png",
        title: "Double-Process w/ Haircut+",
        price: "$105.00 - $120.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/color/gloss.png",
        title: "Glossing+",
        price: "$20.00",
        desc: "Performed following chemical service to add intense shine"
      },
      {
        icon: "/resources/icons/salon/color/color-rinse.png",
        title: "Temporary Color Rinse",
        price: "$15.00",
        desc: ""
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/salon/color/corrective-color.png",
        title: "Corrective Color",
        price: "$90.00 - $120.00+",
        desc: ""
      }
    ]
  }
];

export default class HairColoring extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Hair Coloring</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={hairColoring} />
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
