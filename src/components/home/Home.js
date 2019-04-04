import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import HomeJumbotron from "./HomeJumbotron";
import HomeBanner from "./HomeBanner";
import HomeServices from "./HomeServices";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

const ColoredRow = styled(Row)`
  background: ${props => (props.odd ? "#f3eff5" : "#fff")};
`;

export default class Home extends Component {
  render() {
    return (
      <Container className="p-0 m-0" fluid>
        <HomeJumbotron />
        <Container fluid>
          <ColoredRow odd={false}>
            <HomeBanner />
          </ColoredRow>
          <ColoredRow odd={true} style={{ padding: "3rem 0" }}>
            <Col xs={12}>
              <h1 className="text-center px-5">Services</h1>
            </Col>
            <Col xs={12}>
              <HomeServices />
            </Col>
          </ColoredRow>
        </Container>
      </Container>
    );
  }
}
