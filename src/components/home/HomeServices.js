import React, { Component } from "react";
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import { NavLink as RouterNavLink } from "react-router-dom";
import styled from "styled-components";

const ServicesContainer = styled.div`
  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 992px) {
    padding: 0 5rem;
  }
`;

const ServiceCard = styled(Card)`
  && {
    height: 100%;
    border-radius: 8px;
    border: 0;
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0.12) 0 0 70px 6px;
    margin-bottom: 3rem;
  }
`;

const ServiceCardBody = styled(CardBody)`
  && {
    text-align: center;
    height: auto;
    margin-bottom: 0.5rem;
  }
`;

const ServiceCardText = styled(CardText)`
  && {
    margin-bottom: 2rem;
  }
`;

const ServiceButton = styled(RouterNavLink)`
  && {
    border-radius: 8px;
    padding: 0.5rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.12) 0 3px 13px 1px;
    font-size: 12px;
    background: linear-gradient(-45deg, #b3ffab, #12fff7);
    border: none;
    color: #3d3d3d;
    text-decoration: none;
    width: 75%;
    margin: 0 auto;
    transition: 0.5s all;
    position: absolute;
    width: 75%;
    bottom: 5%;
    left: 13%;
  }
`;

const serviceColumn1 = [
  {
    icon: "/resources/services/massage.jpg",
    service: "Massage",
    message: "You will leave completely rejuvenated",
    hrefLink: "/services/massages",
    sm: 12,
    md: 6,
    lg: 3
  },
  {
    icon: "/resources/services/salon.jpg",
    service: "Salon",
    message: "Salon services of the highest quality",
    hrefLink: "/salon/about",
    sm: 12,
    md: 6,
    lg: 3
  },
  {
    icon: "/resources/services/deluxe-couples.jpg",
    service: "Deluxe Couples",
    message: "Stimulating massages for the couples",
    hrefLink: "/services/deluxe-couples",
    sm: 12,
    md: 6,
    lg: 3
  },
  {
    icon: "/resources/services/facials.jpg",
    service: "Facials",
    message: "Treatments surely to make your face radiate",
    hrefLink: "/services/facials",
    sm: 12,
    md: 6,
    lg: 3
  }
];

const serviceColumn2 = [
  {
    icon: "/resources/services/waxes.jpg",
    service: "Waxes",
    message: "Full service waxing",
    hrefLink: "/services/waxes",
    sm: 12,
    md: 6,
    lg: 3
  },
  {
    icon: "/resources/services/weight-scrubs.jpg",
    service: "Scrubs/Weight Loss",
    message: "Our deep scrubs and weight loss treatments",
    hrefLink: "/services/scrubs-weightloss",
    sm: 12,
    md: 6,
    lg: 3
  },
  {
    icon: "/resources/services/sauna.jpg",
    service: "Infrared Sauna",
    message: "Infrared light therapy to help you heal",
    hrefLink: "/services/infrared-sauna",
    sm: 12,
    md: 6,
    lg: 3
  },
  {
    icon: "/resources/services/oxygen-bar.jpg",
    service: "Oxygen Bar",
    message: "Oxygen rejuvenation for the brain",
    hrefLink: "/services/oxygen-bar",
    sm: 12,
    md: 6,
    lg: 3
  }
];

const serviceColumn3 = [
  {
    icon: "/resources/services/oxygen-foot-soak.jpg",
    service: "Oxygen Foot Soak",
    message: "Detox the impurities from your body",
    hrefLink: "/services/oxygen-foot-soak",
    sm: 12,
    md: 6,
    lg: 3
  },
  {
    icon: "/resources/services/addons.jpg",
    service: "Add On Services",
    message: "Services to add onto your massages",
    hrefLink: "/services/addons",
    sm: 12,
    md: 6,
    lg: 3
  }
];

const createServiceColumn = props => {
  return props.map(service => {
    return (
      <Col
        key={service.service}
        xs={service.xs}
        md={service.md}
        lg={service.lg}
        className="mb-4"
      >
        <ServiceCard>
          <CardImg top width="100%" src={service.icon} alt="Massage" />
          <ServiceCardBody>
            <CardTitle>{service.service}</CardTitle>
            <ServiceCardText>{service.message}</ServiceCardText>
            <ServiceButton to={service.hrefLink}>Learn More</ServiceButton>
          </ServiceCardBody>
        </ServiceCard>
      </Col>
    );
  });
};
export default class HomeService extends Component {
  render() {
    return (
      <ServicesContainer>
        <Row>{createServiceColumn(serviceColumn1)}</Row>
        <Row>{createServiceColumn(serviceColumn2)}</Row>
        <Row className="justify-content-center">
          {createServiceColumn(serviceColumn3)}
        </Row>
      </ServicesContainer>
    );
  }
}
