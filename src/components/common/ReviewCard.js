import React from "react";
import { Col, Card, CardText, CardBody } from "reactstrap";
import styled from "styled-components";

const ReviewCardMain = styled(Card)`
  && {
    height: 100%;
    border-radius: 8px;
    border: 0;
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0.12) 0 0 70px 6px;
    margin-bottom: 3rem;
  }
`;

const ReviewCardBody = styled(CardBody)`
  && {
    text-align: center;
    height: auto;
    margin-bottom: 0.5rem;
  }
`;

const StarRating = styled.i`
  padding: 0 0.25rem;
  color: #f6e58d;

  @media (min-width: 768px) {
    font-size: 2rem;
  }

  @media (min-width: 992px) {
    font-size: 1.5rem;
  }

  @media (min-width: 992px) {
    font-size: 1rem;
  }
`;

const ReviewCardText = styled(CardText)`
  && {
    font-style: italic;
    line-height: 25px;
  }
`;

const Feedback = styled(CardText)`
  && {
    padding: 1rem;
    background: #f3eff5;
    border-radius: 5px;
  }
`;

const Quotes = styled.span`
  font-size: 1.75rem;
  font-weight: bold;
  font-style: normal;
`;

const ReviewCard = ({ ...props }) => {
  return (
    <Col xs={12} sm={12} md={12} lg={6} xl={6} className="mb-4">
      <ReviewCardMain>
        <ReviewCardBody>
          <div className="mt-5">
            {[1, 2, 3, 4, 5].map(x => {
              return <StarRating key={x} className="fas fa-star"></StarRating>;
            })}
          </div>
          <h1 className="mb-5">{props.user}</h1>
          <ReviewCardText>
            <Quotes>"</Quotes>
            {props.review}
            <Quotes>"</Quotes>
          </ReviewCardText>
          <Feedback>Our Response: {props.feedback}</Feedback>
        </ReviewCardBody>
      </ReviewCardMain>
    </Col>
  );
};

export default ReviewCard;
