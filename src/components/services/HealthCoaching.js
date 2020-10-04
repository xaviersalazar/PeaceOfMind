import React from "react";
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

export const HealthCoaching = () => {
  return (
    <React.Fragment>
      <Title>
        <ServiceTitle>HEALTH COACHING</ServiceTitle>
        <Hr />
      </Title>
      <Background
        background={"/resources/services/massages/health-coach-main.jpg"}
      />
      <MainContainer fluid>
        <Row className="mb-5">
          <ParagraphsCol xs={12} className="text-center">
            <h1 className="text-center">Health Coaching</h1>
            <small className="m-0 p-0">
              1 Hour: $97.00 | 1 Month: $347.00 | 6 Months: $2,000.00
            </small>
            <HeadingHr />
          </ParagraphsCol>
        </Row>
      </MainContainer>
    </React.Fragment>
  );
};
