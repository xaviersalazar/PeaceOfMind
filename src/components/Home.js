import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Button } from "reactstrap";
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
              <h1 className="text-center px-5">Services</h1>
            </Col>
            <Container className="services-container">
              <Row className="text-center">
                <Col xs={12} md={4} className="service-col">
                  <i class="fas fa-hand-holding-heart service-icons" />
                  <h6>Massages</h6>
                  <p>You will leave completely rejuvenated</p>
                  <a href="#" className="service-button">
                    More Info
                  </a>
                </Col>
                <Col xs={12} md={4} className="service-col">
                  <i class="fas fa-users service-icons" />
                  <h6>Deluxe Couples</h6>
                  <p>Stimulating massages for the couples</p>
                  <a href="#" className="service-button">
                    More Info
                  </a>
                </Col>
                <Col xs={12} md={4} className="service-col">
                  <i class="far fa-laugh-beam service-icons" />
                  <h6>Facials</h6>
                  <p>Treatments surely to make your face radiate</p>
                  <a href="#" className="service-button">
                    More Info
                  </a>
                </Col>
              </Row>
              <Row className="text-center">
                <Col xs={12} md={4} className="service-col">
                  <i class="fas fa-diagnoses service-icons" />
                  <h6>Waxes</h6>
                  <p>Full service waxing</p>
                  <a href="#" className="service-button">
                    More Info
                  </a>
                </Col>
                <Col xs={12} md={4} className="service-col">
                  <i class="fas fa-hands service-icons" />
                  <h6>Scrubs/Weight Loss</h6>
                  <p>Our deep scrubs and weight loss treatments</p>
                  <a href="#" className="service-button">
                    More Info
                  </a>
                </Col>
                <Col xs={12} md={4} className="service-col">
                  <i class="far fa-heart service-icons" />
                  <h6>Infrared Sauna</h6>
                  <p>Infrared light therapy to help you heal</p>
                  <a href="#" className="service-button">
                    More Info
                  </a>
                </Col>
              </Row>
              <Row className="text-center">
                <Col xs={12} md={4} className="service-col">
                  <i class="fas fa-brain service-icons" />
                  <h6>Oxygen Bar</h6>
                  <p>Oxygen rejuvenation for the brain</p>
                  <a href="#" className="service-button">
                    More Info
                  </a>
                </Col>
                <Col xs={12} md={4} className="service-col">
                  <i class="fas fa-shoe-prints service-icons" />
                  <h6>Oxygen Foot Soak</h6>
                  <p>Detox the impurities from your body</p>
                  <a href="#" className="service-button">
                    More Info
                  </a>
                </Col>
                <Col xs={12} md={4} className="service-col">
                  <i class="fas fa-plus service-icons" />
                  <h6>Add On Services</h6>
                  <p>Services to add on your massages</p>
                  <a href="#" className="service-button">
                    More Info
                  </a>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
      </Container>
    );
  }
}
