import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ServiceCardRow } from "../common/ServiceCardRow";
import styled, { keyframes } from "styled-components";

const venusLegacy = [
  {
    row: [
      {
        icon: "/resources/services/massages/breast-buttlift-venus.jpg",
        price: "30 Minutes: $250.00 | 1 Hour: $300.00",
        desc:
          "What is Venus Legacy? Venus Legacy is an advanced non-invasive medical device that effectively resolves challenging Face and body aesthetic needs, such as nonsurgical circumferential reduction, cellulite reduction, skin tightening, and wrinkle reduction. It decreases swelling and helps tighten the skin. We also advise all our patients receiving laser treatments that they too should improve the tightening of their skin. (We will have packets available when you purchase 6 you'll get the 7th one free.)",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

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
    background-size: auto;
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

export const BreastButtLiftFatEliminator = () => (
  <React.Fragment>
    <Title>
      <ServiceTitle>
        Non-surgical Breast/Butt Lift and Fat Eliminator
      </ServiceTitle>
      <Hr />
    </Title>
    <Background
      background={"/resources/services/massages/breast-buttlift-main.jpg"}
    />
    <MainContainer fluid>
      <Row className="mb-5">
        <ParagraphsCol xs={12} className="text-center">
          <h1 className="text-center">Prices</h1>
          <small className="m-0 p-0">
            30 Minutes: $102.00 | 1 Hour: $202.00
          </small>
          <HeadingHr />
        </ParagraphsCol>
        <ParagraphsCol xs={12} className="text-center mt-5">
          <h3 className="text-center">Breast Enhancement</h3>
          <HeadingHr />
          <p className="light-text">
            The specially designed vacuum pump can improve size and shape or
            breast safely and comfortably. The vacuum pulls fat toward the
            breast tissue, permeating the breast cells, leaving them fuller.
          </p>
        </ParagraphsCol>
        <ParagraphsCol xs={12} className="text-center mt-5">
          <h3 className="text-center">Butt Lifting</h3>
          <HeadingHr />
          <p className="light-text">
            Cupping is all the rage for lifting and enhancing the butt. 2
            sessions per week for 10 weeks, and the results will be noticeable.
          </p>
        </ParagraphsCol>
        <ParagraphsCol xs={12} className="text-center mt-5">
          <h3 className="text-center">Fat Eliminator Sculpting</h3>
          <HeadingHr />
          <p className="light-text">
            Safely and effectively improve the shape of the belly, thighs, butt,
            and back by using point percussion therapy with the scrub cup to
            help eliminate fat on the body. Cupping has been used for overall
            health by the negative pressure and suction causing the nervous
            system to sedate, treating high blood pressure, relieving pain in
            the back and neck, loosening stiff muscles, and treating anxiety,
            fatigue, and even rheumatism.
          </p>
          <p className="light-text">
            For <span style={{ fontWeight: 700 }}>cellulite</span>: It was
            noticed during cupping treatments for other health issues that the
            area was smoother in the appearance of cellulite. Smooth cellulite
            and massage fat for easy lymphatic drainage by moving the cups back
            and forth over an area.
          </p>
          <p className="light-text">
            For the <span style={{ fontWeight: 700 }}>face</span>: Use cupping
            for a facial massage to plump skin and increase cellular turnover.
          </p>
          <p className="light-text">
            For the <span style={{ fontWeight: 700 }}>skin</span>: The
            stimulation of the middle layers of the skin makes skin more toned.
          </p>
        </ParagraphsCol>
      </Row>
      <Row>
        <ParagraphsCol xs={12} className="text-center mt-5">
          <h3 className="text-center">Venus Legacy</h3>
          <HeadingHr />
          <ServiceCardRow rows={venusLegacy} />
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
  </React.Fragment>
);
