import React from "react";
import { Container, Row, Col } from "reactstrap";
import styled, { keyframes } from "styled-components";
import { MassageBenefitsCardRow } from "../common/MassageBenefitsCardRow";

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

const benefits = [
  {
    row: [
      {
        icon: "/resources/services/salon/about-salon-benefits.jpg",
        title: "Organic Hair Colour Systems® Benefits ",
        items: [
          "No nasty chemical smell",
          "Cruelty-free",
          "No damage to your client’s hair",
          "Complete grey coverage",
          "A healthier salon environment",
          "A unique talking point with your clients",
          "An ethical product range which you can use ‘guilt free’",
          "Offer a personalised service for each and every client",
          "Stand out from the competition",
          "Attract new audiences of clients",
        ],
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const Salon = () => (
  <>
    <Title>
      <ServiceTitle>About our Salon</ServiceTitle>
      <Hr />
    </Title>
    <Background background={"/resources/services/salon/about-salon-main.jpg"} />
    <MainContainer fluid>
      <Row className="mb-5">
        <ParagraphsCol xs={12} className="text-center">
          <h1 className="text-center">We use trusted organic products</h1>
          <HeadingHr />
          <ParagraphsCol xs={12} className="text-center">
            <p className="light-text">
              That trusted product is Organic Hair Colour Systems®. This color
              system gives hairdressers a less toxic and more naturally based
              salon professional color, care and styling range. Co-founded by
              hairdresser Stephen Landreth, who was forced to give up
              hairdressing when he developed a severe allergy to conventional
              hair color, soon realized there were not many alternatives
              available. The solution? He made it himself. After years of
              research and development Organic Colour Systems was born.
            </p>
          </ParagraphsCol>
          <ParagraphsCol xs={12} className="text-center">
            <p className="light-text">
              Our dermatological tested and patented permanent hair color
              formula, contains the lowest possible levels of oxidative pigment
              (PPD/PTD) and is packed full of high grade, natural and certified
              organic ingredients. Uniquely, our permanent color works at a
              lower level pH than traditional chemical colors, meaning that
              there is no damage to the hair. The System is supported by our
              class-leading range of hair care products, which repair and
              restore the health of your clients’ hair before you even begin to
              color, then re-balance and close the cuticle of the hair after
              coloring.
            </p>
          </ParagraphsCol>
          <ParagraphsCol>
            <p className="light-text">
              This system also offers a follicle strengthening system called
              Rep-Hair®. Our dermatological tested and patented permanent hair
              color formula, contains the lowest possible levels of oxidative
              pigment (PPD/PTD) and is packed full of high grade, natural and
              certified organic ingredients. Uniquely, our permanent color works
              at a lower level pH than traditional chemical colors, meaning that
              there is no damage to the hair. The System is supported by our
              class-leading range of hair care products, which repair and
              restore the health of your clients’ hair before you even begin to
              color, then re-balance and close the cuticle of the hair after
              coloring.
            </p>
          </ParagraphsCol>
          <ParagraphsCol>
            <p className="light-text">
              Rep-Hair® Follicle Strengthening System is a natural and
              scientifically formulated daily scalp and hair care regime,
              designed to improve the strength and condition of the scalp and
              hair, providing an optimum follicular environment for hair growth.
              Rep-Hair® combines natural and organic extracts which have been
              carefully selected for their nourishing, strengthening,
              conditioning and cleansing properties, as well as their ability to
              protect the scalp and reduce inflammation of the hair follicle.
              This highly effective and natural system harnesses the unique
              benefits of Capixyl™, an elite hair care complex which has been
              proven to reduce hair loss and stimulate natural hair growth. If
              used continuously as directed, noticeable results should be seen
              within 4 – 16 weeks.
            </p>
          </ParagraphsCol>
          <ParagraphsCol>
            <p className="light-text">
              Our unique system &amp; green science is revolutionary, high
              performance and unlike any other professional line. Organic Colour
              Systems® is exactly that, a ‘System’. Our range of high
              performance, professional salon products, have been designed to
              work harmoniously with one another to give you and your clients
              outstanding results in the most natural way possible. Our
              dermatological tested and patented permanent hair colour formula,
              contains the lowest possible levels of oxidative pigment (PPD/PTD)
              and is packed full of high grade, natural and certified organic
              ingredients. Uniquely, our permanent colour works at a lower level
              pH than traditional chemical colours, meaning that there is no
              damage to the hair. The System is supported by our class-leading
              range of hair care products, which repair and restore the health
              of your clients’ hair before you even begin to colour, then
              re-balance and close the cuticle of the hair after colouring.
            </p>
          </ParagraphsCol>
        </ParagraphsCol>
      </Row>
      <MassageBenefitsCardRow rows={benefits} />
    </MainContainer>
  </>
);
