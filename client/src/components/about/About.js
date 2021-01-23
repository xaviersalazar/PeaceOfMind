import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled, { keyframes } from "styled-components";

// Keyframes
const expandHr = keyframes`
  from {
    width: 0%;
  } to {
    width: 50%
  }
`;

// Styles
const MainContainer = styled(Container)`
  padding: 5rem 3rem !important;
  background: #f3eff5;

  @media (min-width: 768px) {
    background-attachment: fixed;
    padding: 5rem 5rem !important;
  }

  @media (min-width: 992px) {
    padding: 5rem 8rem !important;
  }
`;

const Background = styled.div`
  background-image: url("${(props) => props.background}");
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
  color: #fff !important;
  width: 100%;

  @media (min-width: 768px) {
    width: auto;
  }
`;

const Hr = styled.hr`
  background: #fff;
  padding: 0;
  width: 50%;
  margin: 0 auto;
  animation: ${expandHr} 3s linear;
`;

const ParagraphsCol = styled(Col)`
  padding: 0;
`;

const ServiceTitle = styled.h1`
  color: #fff !important;
  font-size: 3rem;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const HeadingHr = styled.hr`
  width: 50%;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const About = () => (
  <>
    <Title>
      <ServiceTitle>About Us</ServiceTitle>
      <Hr />
    </Title>
    <Background background={"/resources/about-us-main.jpg"} />
    <MainContainer fluid>
      <Row>
        <ParagraphsCol xs={12} className="text-center">
          <h1 className="text-center">Our Story</h1>
          <HeadingHr />
          <ParagraphsCol xs={12} className="text-center">
            <p className="light-text">
              Peace of Mind Massage Therapy &amp; Natural Healing is a Woman
              Owned Business based on mother nature's common grounds, located at
              602 N Lower Broadway were Peoples St meets the wall to Upper
              downtown, Opened July 10, 2010.
            </p>
          </ParagraphsCol>
          <ParagraphsCol xs={12} className="text-center">
            <p className="light-text">
              Peace of mind will transform all of your aches and pains internal
              and external into comfort, by giving you ease and relief with
              massage therapy and natural healing. LMT: Jynelle Ornelas has made
              massage and natural healing her passion. Her education and
              techniques stemmed from Austin School of Massage Therapy and
              Homeopathic remedies passed down from past generations.
            </p>
          </ParagraphsCol>
          <ParagraphsCol xs={12} className="text-center">
            <p className="light-text">
              Peace of Mind Promises to Corpus Christi is to help, encourage and
              beautify our sparkling city through community service volunteering
              while informing people about natural healing and massage therapy
              helping you get on a wellness plan. We are involved with the Art
              Walk, Corpus Christi Medical Center- Spirit of women, Boken camp,
              The American Heart Association, The American Cancer Society,
              SCORE, Del-Mar College Small Business Development Center,
              Spaulding for Children, The Corpus Christi Hispanic Chamber and
              CASA.
            </p>
          </ParagraphsCol>
          <ParagraphsCol xs={12} className="text-center">
            <p className="light-text">
              We invite you to come in anytime or call to schedule your massage
              to get your kick start in your wellness plan. We offer chair
              massage, table massage, weight loss wraps and cellulite fighting
              wraps, wrinkle reducers and skin tighten wraps along with facials.
              And the power of the hot stone massage, hot-cupping, and hot wax
              treatments for relief of arthritis and skin soften. Deep tissue
              massage, reflexology, pressure point release, and couples massage.
              Massage parties and Office chair massage packets. Our services are
              available 7 days a week with appointment; walk-ins are also
              welcomed open from 8:30 am till 9:00 pm every day, to fit your
              busy hectic schedule.
            </p>
          </ParagraphsCol>
        </ParagraphsCol>
      </Row>
    </MainContainer>
  </>
);
