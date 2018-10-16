import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";

export default class Home extends Component {
  render() {
    return (
      <Container className="p-0 m-0" fluid>
        <Jumbotron id="home-jumbotron">
          <img
            className="img-fluid"
            src="/resources/bg.png"
            id="home-jumbotron-bg"
          />
        </Jumbotron>

        <Container fluid>
          <Row>
            <Col>
              <p className="text-center p-5">
                Come in today for a Singles Massage Session or a Couples
                Discounted Massage Packet. We use all organic massage products
                using plants, fresh herbs and oils. We are unlike your everyday
                Day Spa. You won’t walk in and get a headache from all the
                chemicals from the nails and hair. And during your massage you
                won’t be bothered with the noise of others talking. We are a
                private practice not corporate. We cater to just you when you
                arrive. We help ease all your aches and pains helping you find
                true Peace Of Mind.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
