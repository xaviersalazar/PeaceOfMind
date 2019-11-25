import React from "react";
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import styled from "styled-components";

const ServiceCardMain = styled(Card)`
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

const ServiceCardPrice = styled(CardSubtitle)`
  && {
    font-size: 0.75rem;
    font-weight: 500 !important;
    margin-bottom: 15px;
  }
`;

const ServiceCard = ({ ...props }) => {
  return (
    <Col
      key={props.title}
      xs={props.xs}
      sm={props.sm}
      md={props.md}
      lg={props.lg}
      xl={props.xl}
      className="mb-4"
    >
      <ServiceCardMain>
        <CardImg top width="100%" src={props.icon} alt={props.title} />
        <ServiceCardBody>
          <CardTitle>{props.title}</CardTitle>
          <ServiceCardPrice>{props.price}</ServiceCardPrice>
          <ServiceCardText>{props.desc}</ServiceCardText>
        </ServiceCardBody>
      </ServiceCardMain>
    </Col>
  );
};

export default ServiceCard;
