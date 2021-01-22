import React from "react";
import { Container, Row, Col } from "reactstrap";
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

const BesameLogo = styled.img`
  width: 25%;
  display: block;
  margin: auto;

  @media (min-width: 576px) {
    width: 25%;
  }

  @media (min-width: 992px) {
    width: 15%;
  }
`;

export const AboutBesame = () => (
  <>
    <Title>
      <ServiceTitle>Besame Cosmetics</ServiceTitle>
      <Hr />
    </Title>
    <Background background={"/resources/about-besame-main.jpg"} />
    <MainContainer fluid>
      <Row>
        <ParagraphsCol xs={12} className="text-center">
          <BesameLogo src="/resources/besameLogo.png" className="img-fluid" />
          <h1 className="text-center mt-3">About Besame Cosmetics</h1>
          <HeadingHr />
          <ParagraphsCol xs={12} className="text-center">
            <p className="light-text">
              Bésame Cosmetics was founded in 2004 out of a fascination with
              art, history, and beauty; a vintage makeup brand which honors the
              style, spirit, and sensibility of female beauty. Through a keen
              eye for color and historical expertise, Besame recreates modern
              reproductions of classic luxury makeup from the 1920s, ‘30s, ‘40s,
              and ‘50s, designed to make women feel elegant, inspired, and
              empowered by their beauty. Pairing innovative, cutting edge
              technology with a historical milieu, Besame's colors and
              formulations are painstakingly hand-crafted to a minutia of
              detail, from there custom-designed gold compacts to there
              signature chrysanthemum motifs. Based in Southern California,
              Bésame understands Hollywood’s ongoing fascination with the
              vintage aesthetic, and often helps production designers recreate
              accurate makeup displays for period film and television (catch a
              glimpse of our Crimson Rouge tin in the 2012’s Academy
              Award-winning film, “The Artist”).
            </p>
          </ParagraphsCol>
          <ParagraphsCol xs={12} className="text-center">
            <p>
              Besame Cosmetics was also featured on the popular television
              series American Horror Story: Freak Show.
            </p>
          </ParagraphsCol>
        </ParagraphsCol>
      </Row>
    </MainContainer>
  </>
);
