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

const ParagraphsCol = styled(Col)`
  padding: 0 3rem;

  @media (min-width: 1440px) {
    padding: 0 10rem !important;
  }
`;

const deluxeCouplesMassages = [
  {
    row: [
      {
        icon: "/resources/icons/couples/couple1.png",
        title: "Couples #1",
        price: "1 Hour: $220.00 | Upgrade to Deep Tissue: $270.00",
        desc:
          "Swedish Massage with Aromatherapy.Performed in a serene setting, the duet massage encourages unity,connection and collective calm. Ease stress and unwind as two therapists perform side-by-side Swedish Massages that help the two of you relax. With a Cooling Mint Eye mask. Including reflexology and a scalp massage. Breathing treatment & Herbal infused hot towel with a foot detox herbal spray."
      },
      {
        icon: "/resources/icons/couples/couple1.png",
        title: "Couples #2",
        price: "1 Hour &amp; 30 mins: $480.00",
        desc:
          "Hot Stones & Aromatherapy. Performed in a serene setting, the duet massage encourages unity, connection and collective calm. Ease stress and unwind as two therapists perform side-by-side Swedish Massages that help the two of you relax.With a Cooling Mint Eye mask. Including reflexology and a scalp massage. Breathing treatment, with a Herbal infused detox spray."
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/couples/couple3.png",
        title: "Couples #3",
        price: "1 Hour & 30 mins: $480.00",
        desc:
          "Deep Tissue Massage, Hot Stone, Aromatherapy & Indian Scalp Massage. Performed in a serene setting,the duet massage encourages unity, connection and collective calm. Ease stress and unwind as two therapists perform side-by-side Deep Tissue Massages that help the two of you relax.With a Cooling Eye mask. With our own Herbal breathing treatment and herbal foot detox spray."
      },
      {
        icon: "/resources/icons/couples/pampered.png",
        title: "Pampered Party Packet",
        price: "$350.00 Per Person (Party of 3 or More)",
        desc:
          "1 Hour and 35 Minutes of Swedish Massage, Hot Stones, Reflexology, Aromatherapy, and a Pressure Point Release Rain Drop Facial and Pearl Mask."
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/icons/couples/silk.png",
        title: "Silk Spine Massage",
        price: "10 Minutes: $30.00",
        desc:
          "Gliding around spine very gently pushing tired knotted up muscles away from the spine gently caressing the nerves in the surrounding are to relive and relax your central nervous system. Allowing your central nervous system to flow freely and unblocked. Better sleep and fewer headaches along with lowered anxiety. Overall mood improver!"
      },
      {
        icon: "/resources/icons/couples/fourhand.png",
        title: "4 Handed Massage",
        price: "30 Minutes: $90.00 | 1 Hour: $180.00 | 1 Hour ½: $270.00",
        desc:
          "A therapeutic, duet massage is performed by two therapists whose coordinated movements induce relaxation and ease tension. To promote self balance and clarity. A soothing scalp massage and reflexology will leave you with a sense of calm and well-being. The organic,balancing massage oil used during treatment soothes the senses and nourishes the skin. Emerge renewed, refreshed and relaxed."
      }
    ]
  }
];

export default class DeluxeCouplesMassages extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>
            Invigorating Massages and Couples Massages
          </ServiceTitle>
        </ParagraphsCol>
        <ServiceRows rows={deluxeCouplesMassages} />
        <Row>
          <ParagraphsCol xs={12}>
            <Disclaimer>
              NOTICE: Prices Are Subject To Change Without Prior Notice
            </Disclaimer>
          </ParagraphsCol>
        </Row>
      </MainContainer>
    );
  }
}
