import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import ServiceRows from "../common/ServiceRows";

const MainContainer = styled(Container)`
  padding-top: 5rem;
  background: #f3eff5;
`;

const ServiceTitle = styled.h1`
  text-align: center;
  padding: 5rem 0;
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

const facials = [
  {
    row: [
      {
        icon: "/resources/icons/facials/cleopatra.png",
        title: "Cleopatra's Dead Sea",
        price: "45 Minutes: $130.00",
        desc:
          "Purifies hydrates and restores elasticity adding moisture to skin for a vibrant complexion. Along with making the skin soft supple and smoother looking. It reaches deep in to the pores, removing grime which slow down the nourishing process. Chamomile, jojoba oil, Maris salt, vitamin B5, Aloe Vera, fruit oil, Vitamin E. With an added Jade Stone Massage to cool down the skin and give it that added natural glow."
      },
      {
        icon: "/resources/icons/facials/customback.png",
        title: "Custom Back Facial",
        price: "45 Minutes: $130.00",
        desc:
          "Purify your neck, shoulders and back, with a custom organic blend made moments before your treatment."
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/facials/dontcrease.png",
        title: "Don't Crease Me Poppy Seed",
        price: "45 Minutes: $125.00",
        desc:
          "Lemons and poppy seed facial wrinkles and fine line reducer. It exfoliates and polishes leaving skin radiant! With all organic products featuring lemon, poppy seeds ,coconut oil rosemary nutmeg and vitamin E and B-5 almond oil , pecan shells, grape fruit and clove."
      },
      {
        icon: "/resources/icons/facials/cupping.png",
        title: "Facial Cupping Face Lift Treatment",
        price: "45 Minutes: $165.00 | 1 Hour: $200.00",
        desc:
          "This gentle, but effective treatment that makes us look and feel youthful and radiant. I use a light suction technique, as an all-natural alternative to a surgical facelift or laser and chemical treatments. It tones your facial muscles and reduces under eye puffiness. The suction created, lifts, tones, and plumps muscles. It relaxes facial muscles and plumps the lines father time has etched on your face. Its deep invigorating action increases elastin and collagen; preserving our youthfulness. It reverses gravity’s effects on your face, like hanging upside would; giving a youthful glow. It gives your face a lymphatic drainage and increases circulation, resulting in a clearer, cleaner, more even complexion with such beautiful color you will forget to wear makeup! It’s completely painless and leaves no marks."
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/facials/fireandice.png",
        title: "Fire & Ice",
        price: "10 Minutes: $30.00",
        desc:
          "Positively stimulating eminence facial. With infusion of fresh apple and grape natural fruit acids for an active organic exfoliation. Paprika and other fresh herbs stimulate circulation and deeply detoxify the skin. With a cold Globe Massage! This facial finishes with cooling application of chilled organic masques suited to your skins needs. Fire & Ice  will leave your skin glowing, toned, detoxified and firm."
      },
      {
        icon: "/resources/icons/facials/goodbye.png",
        title: "Goodbye Pore Me",
        price: "45 Minutes: $125.00",
        desc:
          "Minimize pores and wipes out dead surface from your face. Rare Amazonian white clay, Herbal Moisturizer, cinnamon Bark, Ginger Root, Apricot Kernel Oil, Vitamin E, Avocado Oil Sweet Almond Oil."
      }
    ]
  }
];

export default class Facials extends Component {
  render() {
    return (
      <MainContainer fluid>
        <Col xs={12} className="mt-5">
          <ServiceTitle>Massages For Your Face</ServiceTitle>
        </Col>
        <ServiceRows rows={facials} />
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
