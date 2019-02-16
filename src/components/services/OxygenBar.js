import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const MainContainer = styled(Container)`
  padding-top: 5rem;
  background: #f3eff5;
`;

const ServiceTitle = styled.h1`
  text-align: center;
  padding: 5rem 0 0 0;
`;

const ServiceSubTitle = styled.p`
  text-align: center;
  padding: 0 0 5rem 0;
`;

const ServiceIcon = styled.img`
  position: relative;
  margin: 25px 0 0 0;
  border-radius: 50%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.12);
  width: 35%;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 576px) {
    width: 20%;
  }

  @media (min-width: 992px) {
    width: 8%;
  }
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

const SectionTitle = styled.h4`
  text-align: center;
  margin-top: 3rem;
`;

export default class OxygenBar extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Rejuvinate with our Oxygen Bar</ServiceTitle>
          <ServiceSubTitle style={{ textAlign: "center", margin: "0" }}>
            $1.50 per minute
          </ServiceSubTitle>
        </ParagraphsCol>
        <Row>
          <ParagraphsCol xs={12} className="mb-3">
            <p style={{ textAlign: "center" }}>
              A high purity way to get oxygen for recreation and relaxation.
              Indulge in Aroma O2 oxygen giving you a mild safe euphoric
              feeling. Oxygen is nutrient for the brain, The brain of an adult
              accounts for 2 to 3 percent of the whole body in terms of weight
              but consumes 20% of oxygen absorbed into the body. Brain cells
              need 200 liters of oxygen a day for proper operation.
            </p>
          </ParagraphsCol>
        </Row>
        <Row>
          <ParagraphsCol xs={12}>
            <ServiceIcon
              src="/resources/icons/oxygen/brain.png"
              className="img-fluid"
            />
            <SectionTitle>Benefits of Oxygen</SectionTitle>
            <p style={{ textAlign: "center" }}>
              Oxygen is an element of vitality for the body, asthenia, chronic
              headache and lethargy, increases concentration, thinking power,
              memory, intellectual development, reduces fatigue, alcohol
              detoxification and skin care, and strengthens immune system
              against virus and influenza. Oxygen supports breathing of air in
              cases of asthma and allergies. Oxygen helps in cases of
              depression.Oxygen improves physical performance by up to 25%.
            </p>
          </ParagraphsCol>
        </Row>
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
