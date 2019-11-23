import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled, { keyframes } from "styled-components";
import MassageBenefitsCardRow from "../common/MassageBenefitsCardRow";

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
  padding: 5rem 3rem !important;
  background: #f3eff5;

  @media (min-width: 768px) {
    background-attachment: fixed;
    padding: 5rem 5rem !important;
  }

  @media (min-width: 992px) {
    padding: 5rem 8rem !important;
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

const benefits = [
  {
    row: [
      {
        icon: "/resources/services/massages/massage-about-cardio.jpg",
        title: "Cardiovascular System",
        items: [
          "Improves Blood Circulation",
          "Decrease Blood Pressure",
          "Reduces Heart Rate",
          "Increases White Blood Cell Count",
          "Replenishes Nutritive Materials"
        ],
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/massages/massage-about-lymph.jpg",
        title: "Lypmphatic/Immune System",
        items: [
          "Increases The Number and Function of Natural Killer Cells",
          "Promotes Lymph Circulation",
          "Decreases Weight In Patients With Lymph Edema",
          "Reduces Lymph Edema",
          "Increases Lymphocyte Count"
        ],
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/massages/massage-about-nervous.jpg",
        title: "Nervous & Endocrine System",
        items: [
          "Reduces Stress",
          "Reduces Anxiety",
          "Promotes Relaxation",
          "Reduces Feelings of Depression",
          "Decreases Pain"
        ],
        sm: 12,
        xl: 4
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/services/massages/massage-about-skin.jpg",
        title: "Skin & Related Structures",
        items: [
          "Increases Skin Temperature",
          "Improves Skin Condition",
          "Improves Skin Pathologies",
          "Reduces Superficial Skin Formation",
          "Stimulates Sebaceous Glands"
        ],
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/massages/massage-about-muscles.jpg",
        title: "On The Muscles",
        items: [
          "Relieves Muscular Tension",
          "Relaxes Muscles",
          "Reduces Muscle Soreness & Fatigue",
          "Tones Weak Muscles",
          "Improves Balance & Posture"
        ],
        sm: 12,
        xl: 4
      }
    ]
  }
];

export default class AboutMassage extends Component {
  render() {
    return (
      <div>
        <Title>
          <ServiceTitle>About Massages</ServiceTitle>
          <Hr />
        </Title>
        <Background
          background={"/resources/services/massages/massage-about-main.jpg"}
        />
        <MainContainer fluid>
          <Row className="mb-5">
            <ParagraphsCol xs={12} className="text-center">
              <h1 className="text-center">Why a Massage?</h1>
              <HeadingHr />
              <ParagraphsCol xs={12} className="text-center">
                <p>
                  We all have stress, tension, aches and pains that we
                  experience and need to give attention to, in order to take
                  care of our bodies, we only get one body. Everyone experiences
                  stress from everyday living, we feel tension laced throughout
                  or muscles sometimes accompanied by aches and pain from old
                  accidents, medical conditions, and repetitive hard work we put
                  our bodies thought daily. No matter what your occupation is
                  working too long without a break creates tension in your back,
                  shoulders, and neck muscles, tired eyes , and slower,more
                  easily irritated mental process.
                </p>
              </ParagraphsCol>
              <ParagraphsCol xs={12} className="text-center">
                <p>
                  Human touch increases the production of endorphins, growth
                  hormone, along with DHEA, all of which lengthen your life span
                  and lower the negative impact of stress. Studies have found
                  that patients who are regularly touched recover faster than
                  those who are not touched. So get a massage and feel your mood
                  improve.
                </p>
              </ParagraphsCol>
              <ParagraphsCol xs={12} className="text-center">
                <p>
                  We have heard many people complain of being over medicated,
                  tired and stressed. With every massage we give the option to
                  mankind’s first medicine which consists of 100% natural oils
                  combined in to your massage cream or oils, and other healing
                  earth products.
                </p>
              </ParagraphsCol>
            </ParagraphsCol>
          </Row>
          <MassageBenefitsCardRow rows={benefits} />
        </MainContainer>
      </div>
    );
  }
}
