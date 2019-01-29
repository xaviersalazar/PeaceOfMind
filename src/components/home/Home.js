import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import HomeJumbotron from "./HomeJumbotron";
import HomeBanner from "./HomeBanner";
import HomeServices from "./HomeServices";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const ColoredRow = styled(Row)`
  background: ${props => (props.odd ? "#f3eff5" : "#fff")};
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export default class Home extends Component {
  render() {
    return (
      <Container className="p-0 m-0" fluid>
        <HomeJumbotron />
        <Container fluid>
          <ColoredRow>
            <HomeBanner />
          </ColoredRow>
          <ColoredRow odd>
            <Col>
              <h1 className="text-center px-5">Services</h1>
            </Col>
            <HomeServices />
          </ColoredRow>
        </Container>
      </Container>
    );
  }
}
