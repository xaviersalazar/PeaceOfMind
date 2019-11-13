import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled, { keyframes } from "styled-components";
import ServiceCardRow from "../common/ServiceCardRow";

// Keyframes
const expandHr = keyframes`
  from {
    width: 0%;
  } to {
    width: 50%
  }
`;

// Styles
const MainContainer = styled(Container)`
  padding: 5rem 2.5rem 0 2.5rem !important;
  background: #f3eff5;

  @media (min-width: 768px) {
    background-attachment: fixed;
    padding: 5rem 5rem 0 5rem !important;
  }

  @media (min-width: 992px) {
    padding: 5rem 8rem 0 8rem !important;
  }
`;

const Background = styled.div`
  background-image: url("${props => props.background}");
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
  color: #fff !important;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const Hr = styled.hr`
  background: #fff;
  padding: 0;
  width: 50%;
  margin: 0 auto;
  animation: ${expandHr} 3s linear;
`;

const ParagraphsCol = styled(Col)`
  padding: 0;
`;

const ServiceTitle = styled.h1`
  color: #fff !important;
  font-size: 3rem;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const HeadingHr = styled.hr`
  width: 50%;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

const benefits = [
  {
    row: [
      {
        icon: "/resources/services/massages/oxygen-benefits.jpg",
        title: "Benefits of Oxygen",
        desc:
          "Oxygen is an element of vitality for the body, asthenia, chronic headache and lethargy, increases concentration, thinking power, memory, intellectual development, reduces fatigue, alcohol detoxification and skin care, and strengthens immune system against virus and influenza. Oxygen supports breathing of air in cases of asthma and allergies. Oxygen helps in cases of depression.Oxygen improves physical performance by up to 25%.",
        sm: 12,
        md: 12,
        lg: 6
      }
    ]
  }
];

export default class OxygenBar extends Component {
  render() {
    return (
      <div>
        <Title>
          <ServiceTitle>Oxygen Bar</ServiceTitle>
          <Hr />
        </Title>
        <Background
          background={"/resources/services/massages/oxygen-main.jpg"}
        />
        <MainContainer fluid>
          <Row className="mb-5">
            <ParagraphsCol xs={12} className="text-center">
              <h1 className="text-center">Rejuvinate with our Oxygen Bar</h1>
              <small className="m-0 p-0">$1.50 per minute</small>
              <HeadingHr />
              <ParagraphsCol xs={12} className="text-center">
                <p>
                  A high purity way to get oxygen for recreation and relaxation.
                  Indulge in Aroma O2 oxygen giving you a mild safe euphoric
                  feeling. Oxygen is nutrient for the brain, The brain of an
                  adult accounts for 2 to 3 percent of the whole body in terms
                  of weight but consumes 20% of oxygen absorbed into the body.
                  Brain cells need 200 liters of oxygen a day for proper
                  operation.
                </p>
              </ParagraphsCol>
            </ParagraphsCol>
          </Row>
          <ServiceCardRow rows={benefits} />
          <Row>
            <ParagraphsCol xs={12}>
              <Disclaimer>
                NOTICE: Prices Are Subject To Change Without Prior Notice
              </Disclaimer>
            </ParagraphsCol>
          </Row>
        </MainContainer>
      </div>
    );
  }
}
