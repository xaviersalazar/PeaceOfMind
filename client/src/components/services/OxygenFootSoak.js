import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ServiceCardRow } from "../common/ServiceCardRow";
import styled, { keyframes } from "styled-components";

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
  background-image: url("${(props) => props.background}");
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
        icon: "/resources/services/massages/oxygen-foot-soak-benefits.jpg",
        title: "Benefits of a Oxygen Foot Soak",
        desc:
          "To relieve the strains on the kidneys and liver it is more important than ever to maintain a detoxification regimen. The ion foot bath is designed to relieve these strains and help the body re-balance its energy fields allowing organs to function better. After using ionic foot bath  machine healthy individuals and users can feel lighter and experience a greater feeling of well being from each session. More energy and youth is felt as well. Some people with pain, edema, swollen, and deteriorating joints have also reported symptomatic relief from the sessions. Many doctors, nurses, professionals and the likes have also recommended this machine for their patients. We also found many excerpts stating that the machine has helped individuals break free from addiction problems.",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const OxygenFootSoak = () => (
  <>
    <Title>
      <ServiceTitle>Oxygen Foot Soak</ServiceTitle>
      <Hr />
    </Title>
    <Background
      background={"/resources/services/massages/oxygen-foot-soak-main.jpg"}
    />
    <MainContainer fluid>
      <Row className="mb-5">
        <ParagraphsCol xs={12} className="text-center">
          <h1 className="text-center">Purify your body</h1>
          <small className="m-0 p-0">
            30 minutes: $87.00 | $137.00 per hour
          </small>
          <HeadingHr />
        </ParagraphsCol>
        <ParagraphsCol xs={12} className="text-center">
          <p className="light-text">
            Is the ionic foot bath machine right for me? With the increase in
            the number of chemicals and hazardous materials introduced in the
            last few decades, there has been a dramatic increase in incidences
            of auto-immune disease, allergies and common infections. Although
            people are living longer, we face new types of diseases and
            infections as we become immune to older ones. There are tens of
            thousands of chemicals in use today and more than a forth of these
            are known to be toxic and nothing is known about their interactive
            effects. Body fat has been tested that contains residue of hundreds
            of chemicals. Metals, such as mercury and cadmium are everywhere and
            impossible to avoid. Lead can block red blood cell formation.
          </p>
        </ParagraphsCol>
        <ParagraphsCol xs={12} className="text-center">
          <p className="light-text">
            Chemicals can act as toxins that can block receptor sites on cells,
            and cause changes in calcium homeostasis selectively killing cells,
            and alter expression of gene products. Metals and chemical toxins
            weaken the immune system and cause increased vulnerability to virus,
            bacterial fungal and parasitic infections. In an attempt to detoxify
            these substances, our bowels, kidneys and liver are being
            overloaded. Our eliminative channels have become blocked or
            dysfunctional, because, in conjunction with these synthetic
            chemicals, and the western diet that is so acid forming and
            de-vitalized.
          </p>
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
  </>
);
