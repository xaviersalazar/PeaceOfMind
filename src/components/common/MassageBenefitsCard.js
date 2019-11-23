import React from "react";
import {
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import styled from "styled-components";

const BenefitsCardMain = styled(Card)`
  && {
    height: 100%;
    border-radius: 8px;
    border: 0;
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0.12) 0 0 70px 6px;
    margin-bottom: 3rem;
  }
`;

const BenefitsCardBody = styled(CardBody)`
  && {
    text-align: center;
    height: auto;
    margin-bottom: 0.5rem;
  }
`;

const BenefitsCardItem = styled(ListGroupItem)`
  && {
    border-left: 0;
    border-right: 0;

    :first-child {
      border-top: 0;
    }
  }
`;

const ServiceCard = ({ ...props }) => {
  return (
    <Col
      key={props.title}
      xs={props.xs}
      md={props.md}
      lg={props.lg}
      className="mb-4"
    >
      <BenefitsCardMain>
        <CardImg top width="100%" src={props.icon} alt={props.title} />
        <BenefitsCardBody>
          <CardTitle>{props.title}</CardTitle>
          <ListGroup>
            {props.items.map(item => {
              return <BenefitsCardItem key={item}>{item}</BenefitsCardItem>;
            })}
          </ListGroup>
        </BenefitsCardBody>
      </BenefitsCardMain>
    </Col>
  );
};

export default ServiceCard;
