import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ReviewCard from "../common/ReviewCard";
import styled from "styled-components";

const MainContainer = styled.div`
  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 992px) {
    padding: 0 5rem;
  }
`;

const ColoredCol = styled(Col)`
  background: ${props => (props.odd ? "#f3eff5" : "#fff")};
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
`;

const Hr = styled.hr`
  width: 50%;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

const reviews = [
  {
    user: "Yvonne Moreno",
    review:
      "Love this place!!!! The atmosphere is so relaxing and soothing......Tyler did a great job on my daughter’s eye waxing.....painless....she was very comfortable. Definitely returning!!",
    feedback:
      "Thank you for letting us help you. Definitely a pleasure to have you and your daughter as our clients. 💖"
  },
  {
    user: "Alejandra S.",
    review:
      "Everyone  is so nice they always take care of me,  this is my  go to place for waxing and manicures because they're  licensed and clean 💜 I was able to get an appointment last minute 😊 since someone had to cancel their appointment!! and also they will work around your schedule💕",
    feedback:
      "We do our best to make sure everyone is happy. We are glad to help you, it is our pleasure. Thank you for picking us we are definitely lucky ones to have you in our life. ‍♀️💖"
  },
  {
    user: "Laura Ybanez",
    review:
      "I enjoyed my time at Peace of Mind. I am so pleased with the service I recommend this place for your therapeutic massage. Thank so much.",
    feedback:
      "So glad to have had you come in and happy we could help. Thank you."
  },
  {
    user: "Brandy Mattox",
    review:
      "I went in for hair therapy and I was not disappointed.  Excellent Service. Calming Atmosphere. I left looking like a million bucks!! I am so happy with the girls at Peace of Mind!",
    feedback:
      "Thank you, we love being able to help any way we can. Thank you for coming in and visiting with us. 😻💅💆‍♀️💇‍♀️ ‍♀️ 🐞💖"
  }
];

export default class Reviews extends Component {
  render() {
    return (
      <MainContainer className="w-100">
        <ColoredCol xs={12} odd={"true"} className="text-center">
          <h1 className="text-center">Some of our reviews</h1>
          <Hr />
          <Row className="justify-content-center">
            {reviews.map(r => {
              return (
                <ReviewCard
                  key={r.user}
                  user={r.user}
                  review={r.review}
                  feedback={r.feedback}
                />
              );
            })}
          </Row>
        </ColoredCol>
      </MainContainer>
    );
  }
}
