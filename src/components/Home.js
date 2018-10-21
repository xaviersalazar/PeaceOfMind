import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
          <Row className="py-5">
            <Col>
              <h1 className="text-center">
                Massage Therapy &amp; Natural Healing
              </h1>
              <p className="text-center px-5">
                Come in today for a Singles Massage Session or a Couples
                Discounted Massage Packet. We use all organic massage products
                using plants, fresh herbs and oils. We are unlike your everyday
                Day Spa. We are a private practice not corporate. We cater to
                just you when you arrive. We help ease all your aches and pains
                helping you find true Peace Of Mind.
              </p>
            </Col>
          </Row>

          <Row className="odd-row py-5">
            <Col>
              <h1 className="text-center px-5">Testimonials</h1>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
