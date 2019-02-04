import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const MainContainer = styled(Container)`
  padding-top: 5rem;
  background: #f3eff5;
`;

const ServiceTitle = styled.h1`
  text-align: center;
  padding: 5rem 0;
`;

const DeluxeMassage = styled.img`
  margin: 10px 0;
  border-radius: 50%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.12);
  width: 25%;
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

export default class DeluxeCouplesMassages extends Component {
  render() {
    return (
      <MainContainer fluid>
        <Col xs={12} className="mt-5">
          <ServiceTitle>
            Invigorating Massages and Couples Massages
          </ServiceTitle>
        </Col>
        <Row className="text-center">
          <Col xs={12} md={4}>
            <DeluxeMassage
              src="/resources/icons/couples/couple1.png"
              className="img-fluid"
            />
            <h6>Couples #1</h6>
            <p>
              Swedish Massage with Aromatherapy.Performed in a serene setting,
              the duet massage encourages unity, connection and collective calm.
              Ease stress and unwind as two therapists perform side-by-side
              Swedish Massages that help the two of you relax. With a Cooling
              Mint Eye mask. Including reflexology and a scalp massage.
              Breathing treatment &amp; Herbal infused hot towel with a foot
              detox herbal spray.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <DeluxeMassage
              src="/resources/icons/couples/couple2.png"
              className="img-fluid"
            />
            <h6>Couples #2</h6>
            <p>
              Hot Stones &amp; Aromatherapy. Performed in a serene setting, the
              duet massage encourages unity, connection and collective calm.
              Ease stress and unwind as two therapists perform side-by-side
              Swedish Massages that help the two of you relax.With a Cooling
              Mint Eye mask. Including reflexology and a scalp massage.
              Breathing treatment, with a Herbal infused detox spray.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <DeluxeMassage
              src="/resources/icons/couples/couple3.png"
              className="img-fluid"
            />
            <h6>Couples #3</h6>
            <p>
              Deep Tissue Massage, Hot Stone, Aromatherapy & Indian Scalp
              Massage. Performed in a serene setting, the duet massage
              encourages unity, connection and collective calm. Ease stress and
              unwind as two therapists perform side-by-side Deep Tissue Massages
              that help the two of you relax.With a Cooling Eye mask. With our
              own Herbal breathing treatment and herbal foot detox spray.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Disclaimer>
              NOTICE: Prices Are Subject To Change Without Prior Notice
            </Disclaimer>
          </Col>
        </Row>
      </MainContainer>
    );
  }
}
