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

const scrubs = [
  {
    row: [
      {
        icon: "/resources/icons/weightloss/honey.png",
        title: "Honey Relax",
        price: "50 Minutes: $115.00 | Add onto any 1 hour massage: $80.00",
        desc:
          "A relaxation ritual richly crafted blend of sugar crystals, nutrient rich antioxidants and essential oils creating a comprehensive exfoliation treatment. Spearmint leaf, organic , Lime, Lavender and Sandalwood are included in the 50 Minute Scrub."
      },
      {
        icon: "/resources/icons/weightloss/polish.png",
        title: "Polish Me Perfect",
        price: "50 Minutes: $115.00 | Add onto any 1 hour massage: $80.00",
        desc:
          "Raw Sugar Cane granules produce glycolic acid, help refine pores, boost collagen and elastin, bind moisture and brighten skin all over along with reducing the sight of cellulite helping you become fully balanced using Grape Seed Oil,Coffee, Fresh Coconut , Geranium, Rosemary and Lavender."
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/weightloss/weightlosswrap.png",
        title: "Weight Loss Body Wraps",
        price: "45 Minutes: $100.00 | 1 Hour: $140.00 | 1 Hour ½: $220.00",
        desc:
          "After the mixture is brushed on the body you are then wrapped in plastic wrap and thermal blanket. Clay body wraps absorb and draw out toxins in skin, bentonite clay particles hold a negative electrical charge, while toxins have a positive charge. The negatively charged particles draw the toxins out of skin through the pores. The theory goes back centuries, and it has been proven that Cleopatra used clay poultices as skin treatments."
      }
    ]
  }
];

export default class ScrubsWeightloss extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Scrub Massages and Weightloss Treatments</ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={scrubs} />
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
