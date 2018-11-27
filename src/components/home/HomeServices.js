import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const ServicesContainer = styled(Container)`
  box-shadow: rgba(0, 0, 0, 0.12) 0 0 70px 6px;
  border-radius: 15px;
  margin-left: 25px !important;
  margin-right: 25px !important;

  @media (min-width: 576px) {
    margin-left: auto !important;
    margin-right: auto !important;
  }
`;

const ServiceColumn = styled(Col)`
  padding: 2rem;
  transition: 0.8s all;

  i {
    font-size: 40px;
  }

  &:hover {
    border-radius: 15px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const ServiceButton = styled.a`
  && {
    font-size: 10px;
    background: linear-gradient(-45deg, #b3ffab, #12fff7);
    border-radius: 15px;
    border: none;
    color: #3d3d3d;
    padding: 0.5rem;
    text-decoration: none;
    transition: 0.5s all;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0 3px 13px 1px;
  }
`;

const serviceColumn1 = [
  {
    icon: "fas fa-hand-holding-heart",
    service: "Massage",
    message: "You will leave completely reqjuvenated",
    hrefLink: "#"
  },
  {
    icon: "fas fa-users",
    service: "Deluxe Couples",
    message: "Stimulating massages for the couples",
    hrefLink: "#"
  },
  {
    icon: "far fa-laugh-beam",
    service: "Facials",
    message: "Treatments surely to make your face radiate",
    hrefLink: "#"
  }
];

const serviceColumn2 = [
  {
    icon: "fas fa-diagnoses",
    service: "Waxes",
    message: "Full service waxing",
    hrefLink: "#"
  },
  {
    icon: "fas fa-hands",
    service: "Scrubs/Weight Loss",
    message: "Our deep scrubs and weight loss treatments",
    hrefLink: "#"
  },
  {
    icon: "far fa-heart",
    service: "Infrared Sauna",
    message: "Infrared light therapy to help you heal",
    hrefLink: "#"
  }
];

const serviceColumn3 = [
  {
    icon: "fas fa-brain",
    service: "Oxygen Bar",
    message: "Oxygen rejuvenation for the brain",
    hrefLink: "#"
  },
  {
    icon: "fas fa-shoe-prints",
    service: "Oxygen Foot Soak",
    message: "Detox the impurities from your body",
    hrefLink: "#"
  },
  {
    icon: "fas fa-plus",
    service: "Add On Services",
    message: "Services to add onto your massages",
    hrefLink: "#"
  }
];

const createServiceColumn = props => {
  return props.map(service => {
    return (
      <ServiceColumn key={service.service} xs={12} md={4}>
        <i className={service.icon} />
        <h6>{service.service}</h6>
        <p>{service.message}</p>
        <ServiceButton href={service.hrefLink}>More Info</ServiceButton>
      </ServiceColumn>
    );
  });
};

export default class HomeService extends Component {
  render() {
    return (
      <ServicesContainer>
        <Row className="text-center">{createServiceColumn(serviceColumn1)}</Row>
        <Row className="text-center">{createServiceColumn(serviceColumn2)}</Row>
        <Row className="text-center">{createServiceColumn(serviceColumn3)}</Row>
      </ServicesContainer>
    );
  }
}
