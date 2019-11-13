import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled, { keyframes } from "styled-components";
import ServiceCardRow from "./ServiceCardRow";

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
    padding: 5rem 3.5rem 0 3.5rem !important;
  }

  @media (min-width: 992px) {
    padding: 5rem 5rem 0 5rem !important;
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
  width: auto;
`;

const Hr = styled.hr`
  background: #fff;
  padding: 0;
  width: 50%;
  margin: 0 auto;
  animation: ${expandHr} 3s linear;
`;

const ParagraphsCol = styled(Col)`
  padding: 0 3rem;

  @media (min-width: 1440px) {
    padding: 0 10rem !important;
  }
`;

const ServiceTitle = styled.h1`
  color: #fff !important;
  font-size: 2rem;
  margin: 0;
  padding: 0;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

const ServicePage = ({ ...props }) => {
  return (
    <div>
      <Title>
        <ServiceTitle>{props.title}</ServiceTitle>
        <Hr />
      </Title>
      <Background background={props.background} />
      <MainContainer fluid>
        <ServiceCardRow rows={props.rows} />
        <Row>
          <ParagraphsCol xs={12}>
            <Disclaimer>
              NOTICE: Prices Are Subject To Change Without Prior Notice
              {props.smallNotice ? (
                <div>
                  <small style={{ fontWeight: "inherit" }}>
                    {props.smallNotice}
                  </small>
                </div>
              ) : (
                ""
              )}
            </Disclaimer>
          </ParagraphsCol>
        </Row>
      </MainContainer>
    </div>
  );
};

export default ServicePage;
