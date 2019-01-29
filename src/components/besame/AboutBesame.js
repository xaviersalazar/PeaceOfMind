import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const BesameLogo = styled.img`
  width: 25%;
  display: block;
  margin: 6rem auto 3rem auto;

  @media (min-width: 576px) {
    width: 25%;
  }

  @media (min-width: 992px) {
    width: 15%;
  }
`;

const ColoredRow = styled(Row)`
  background: ${props => (props.odd ? "#f3eff5" : "#fff")};
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

export default class AboutBesame extends Component {
  render() {
    return (
      <Container fluid>
        <BesameLogo src="/resources/besameLogo.png" className="img-fluid" />
        <Col xs={12}>
          <h1 className="text-center pb-3">Besame Cosmetics</h1>
        </Col>
        <Col xs={12} className="px-5 text-center">
          <p>
            Bésame Cosmetics was founded in 2004 out of a fascination with art,
            history, and beauty; a vintage makeup brand which honors the style,
            spirit, and sensibility of female beauty. Through a keen eye for
            color and historical expertise, Besame recreates modern
            reproductions of classic luxury makeup from the 1920s, ‘30s, ‘40s,
            and ‘50s, designed to make women feel elegant, inspired, and
            empowered by their beauty. Pairing innovative, cutting edge
            technology with a historical milieu, Besame's colors and
            formulations are painstakingly hand-crafted to a minutia of detail,
            from there custom-designed gold compacts to there signature
            chrysanthemum motifs. Based in Southern California, Bésame
            understands Hollywood’s ongoing fascination with the vintage
            aesthetic, and often helps production designers recreate accurate
            makeup displays for period film and television (catch a glimpse of
            our Crimson Rouge tin in the 2012’s Academy Award-winning film, “The
            Artist”).
          </p>
          <p>
            Besame Cosmetics was also featured on the popular television series
            American Horror Story: Freak Show.
          </p>
        </Col>
      </Container>
    );
  }
}
