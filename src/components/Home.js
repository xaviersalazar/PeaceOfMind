import React, { Component } from "react";
import {
  Jumbotron,
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
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
          <Row>
            <Col>
              <h1 className="text-center pt-3">
                Massage Therapy &amp; Natural Healing
              </h1>
              <p className="text-center pt-2 px-5">
                Come in today for a Singles Massage Session or a Couples
                Discounted Massage Packet. We use all organic massage products
                using plants, fresh herbs and oils. We are unlike your everyday
                Day Spa. We are a private practice not corporate. We cater to
                just you when you arrive. We help ease all your aches and pains
                helping you find true Peace Of Mind.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="text-center pt-5 px-5">Testimonials</h1>
              <Card>
                <CardBody>
                  <CardTitle className="px-5 pt-2">Miranda B.</CardTitle>
                  <CardText className="px-5">
                    My experience was phenomenal! Jynelle &amp; Natalie went
                    above and beyond to make me feel relaxed and comfortable.
                    They took their time and put in a lot of effort with each
                    service I got done. Thank you both so much. I’m a mother to
                    a 11 month old, i haven’t pampered myself lately and today
                    y’all made me feel so so relaxed. I will be going back. I
                    recommend getting a facial, full body massage and pedicure
                  </CardText>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle className="px-5 pt-2">Rich WIIIZ</CardTitle>
                  <CardText className="px-5">
                    Great place, very professional and relaxing environment,
                    very understanding of the body and they work well with
                    injuries. I am definitely going to sleep like a baby
                    tonight, great deep tissue massage. I highly recommend them
                    to anyone in the area.
                  </CardText>
                </CardBody>
              </Card>
              <Card>
                <CardBody>
                  <CardTitle className="px-5 pt-2">Sarah Ortiz</CardTitle>
                  <CardText className="px-5">
                    Calming environment, highly qualified staff, reasonable
                    prices, and great attention was paid to the products used. I
                    did recommend this place to friends and family.
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
