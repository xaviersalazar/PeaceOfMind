import React from "react";
import { Container, Row, Col } from "reactstrap";
import { HomeJumbotron } from "./HomeJumbotron";
import { HomeBanner } from "./HomeBanner";
import { HomeServices } from "./HomeServices";
import { HomeSupportLocal } from "./HomeSupportLocal";
import { HomeSpaBox } from "./HomeSpaBox";
import { Reviews } from "./Reviews";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";

const ColoredRow = styled(Row)`
  background: ${(props) => props.color};
`;

const Hr = styled.hr`
  width: 50%;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const Home = () => (
  <Container className="p-0 m-0" fluid>
    <HomeJumbotron />
    <Container fluid>
      <ColoredRow color={"#f3eff5"}>
        <HomeSupportLocal />
      </ColoredRow>
      <ColoredRow color={"#ffffff"}>
        <HomeSpaBox />
      </ColoredRow>
      <ColoredRow color={"#f3eff5"}>
        <HomeBanner />
      </ColoredRow>
      <ColoredRow color={"#ffffff"} style={{ padding: "3rem 0" }}>
        <Col xs={12}>
          <h1 className="text-center px-5 mb-3">Services</h1>
          <Hr />
        </Col>
        <Col xs={12}>
          <HomeServices />
        </Col>
      </ColoredRow>
      <ColoredRow color={"#f3eff5"}>
        <Reviews />
      </ColoredRow>
    </Container>
  </Container>
);
