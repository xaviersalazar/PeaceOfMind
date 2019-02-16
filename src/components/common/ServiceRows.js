import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import styled from "styled-components";

const ServiceIcon = styled.img`
  margin: 10px 0;
  border-radius: 50%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.12);
  width: 20%;
`;

const Title = styled.h6`
  color: ${props => (props.color ? props.color : "inherit")};
`;

const Price = styled.p`
  font-size: 10px;
`;

const ServiceRows = ({ rows }) => {
  return rows.map((row, i) => {
    return (
      <Row key={i} className="text-center">
        {row.row.map(item => {
          return (
            <Col key={item.title} xs={12} md={6} style={{ padding: "0 3rem" }}>
              <ServiceIcon src={item.icon} className="img-fluid" />
              <Title color={item.color}>{item.title}</Title>
              <Price>{item.price}</Price>
              <p>{item.desc}</p>
            </Col>
          );
        })}
      </Row>
    );
  });
};

export default ServiceRows;
