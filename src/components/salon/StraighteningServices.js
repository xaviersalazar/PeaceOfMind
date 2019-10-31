import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import ServiceCardRow from "../common/ServiceCardRow";

const MainContainer = styled(Container)`
  padding: 5rem 2.5rem 0 2.5rem !important;
  background: #f3eff5;

  @media (min-width: 768px) {
    background-attachment: fixed;
    padding: 5rem 3.5rem 0 3.5rem !important;
  }

  @media (min-width: 992px) {
    padding: 5rem 5rem 0 5rem !important;
  }
`;

const Background = styled.div`
  background-image: url("/resources/services/salon/straightening-main.jpg");
  height: 50vh;
  width: 100vw;
  min-width: 100vw;
  background-attachment: scroll;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    background-attachment: fixed;
  }
`;

const Title = styled.div`
  position: absolute;
  top: 25%;
  right: 50%;
  transform: translateX(50%);
  font-size: 4.5rem;
  color: #fff !important;
`;

const Hr = styled.hr`
  background: #fff;
  padding: 0;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 992px) {
    width: 81%;
  }
`;

const ParagraphsCol = styled(Col)`
  padding: 0 3rem;

  @media (min-width: 1440px) {
    padding: 0 10rem !important;
  }
`;

const ServiceTitle = styled.h1`
  color: #fff !important;
  font-size: 3.5rem;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

const straighteningServices = [
  {
    row: [
      {
        icon: "/resources/services/salon/straightening-organic-blowout.jpg",
        title: "Organic Colours Systems Ultimate Blowout",
        price: "$150.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon:
          "/resources/services/salon/straightening-organic-blowout-haircut.jpg",
        title: "Organic Colours Systems Blowout w/ Haircut",
        price: "$170.00 - $180.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon:
          "/resources/services/salon/straightening-organic-thermal-straightening.jpg",
        title: "Organic Colours Systems Thermal Straightening",
        price: "$300.00 - $350.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon:
          "/resources/services/salon/straightening-organic-thermal-straightening-haircut.jpg",
        title: "Organic Colours Systems Thermal Straightening w/ Haircut",
        price: "$325.00 - $350.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/services/salon/straightening-retouch.jpg",
        title: "Retouch",
        price: "$245.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      },
      {
        icon: "/resources/services/salon/straightening-retouch-haircut.jpg",
        title: "Retouch w/ Haircut",
        price: "$260.00",
        desc: "",
        sm: 12,
        md: 6,
        lg: 3
      }
    ]
  }
];

export default class StraighteningServices extends Component {
  render() {
    return (
      <div>
        <Title>
          <ServiceTitle>Straightening Services</ServiceTitle>
          <Hr />
        </Title>
        <Background />
        <MainContainer fluid>
          <ServiceCardRow rows={straighteningServices} />
          <Row>
            <ParagraphsCol xs={12}>
              <Disclaimer>
                NOTICE: Prices Are Subject To Change Without Prior Notice
              </Disclaimer>
            </ParagraphsCol>
          </Row>
        </MainContainer>
      </div>
    );
  }
}
