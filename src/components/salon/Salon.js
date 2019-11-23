import React, { Component } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import styled from "styled-components";

const MainContainer = styled(Container)`
  padding-top: 5rem;
  background: #f3eff5;
`;

const ParagraphsCol = styled(Col)`
  padding: 0 3rem;

  @media (min-width: 1440px) {
    padding: 0 10rem !important;
  }
`;

const ServiceIcon = styled.img`
  position: relative;
  margin: 25px 0 0 0;
  border-radius: 50%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.12);
  width: 35%;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 576px) {
    width: 20%;
  }

  @media (min-width: 992px) {
    width: 8%;
  }
`;

const ServiceTitle = styled.h1`
  text-align: center;
  padding: 5rem 0 3rem 0;
`;

const SectionTitle = styled.h4`
  text-align: center;
  margin-top: 3rem;
`;

const CustomListGroup = styled(ListGroup)`
  border: none;
  width: 50%;
  margin: 0 auto;
  text-align: center;
`;

const CustomListGroupItem = styled(ListGroupItem)`
  border: none !important;
  background: #f3eff5 !important;
  font-weight: 200;
  padding: 0 0 5px 0 !important;
`;

const ColoredAt = styled.span`
  background: linear-gradient(-45deg, #b3ffab, #12fff7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const systemBenefits = [
  "No nasty chemical smell.",
  "Cruelty-free.",
  "No damage to your client’s hair.",
  "Complete grey coverage.",
  "A healthier salon environment.",
  "A unique talking point with your clients.",
  "An ethical product range which you can use ‘guilt free’.",
  "Offer a personalised service for each and every client.",
  "Stand out from the competition.",
  "Attract new audiences of clients."
];

export default class Salon extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>
            Salon <ColoredAt>@</ColoredAt> Peace Of Mind
          </ServiceTitle>
        </ParagraphsCol>
        <Row>
          <ParagraphsCol xs={12} className="mb-3">
            <ServiceIcon
              src="/resources/icons/salon/salon.png"
              className="img-fluid mb-3"
            />
            <SectionTitle style={{ marginTop: "1rem" }}>
              Organic Hair Colour Systems
            </SectionTitle>
            <p style={{ textAlign: "center" }}>
              This color system gives hairdressers a less toxic and more
              naturally based salon professional color, care and styling range.
              Co-founded by hairdresser Stephen Landreth, who was forced to give
              up hairdressing when he developed a severe allergy to conventional
              hair color, soon realized there were not many alternatives
              available. The solution? He made it himself. After years of
              research and development Organic Colour Systems was born.
            </p>
            <p style={{ textAlign: "center" }}>
              Our dermatologically tested and patented permanent hair color
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
        </Row>
        <Row>
          <ParagraphsCol xs={12} className="mb-3">
            <ServiceIcon
              src="/resources/icons/salon/haircolor.png"
              className="img-fluid"
            />
            <SectionTitle style={{ marginTop: "1rem" }}>
              This system offers a follicle strengthening system called Rep-Hair
            </SectionTitle>
            <p style={{ textAlign: "center" }}>
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
            <p style={{ textAlign: "center" }}>
              Our unique system &amp; green science. Revolutionary , high
              performance and unlike any other professional line. Organic Colour
              Systems is exactly that, a ‘System’. Our range of high
              performance, professional salon products, have been designed to
              work harmoniously with one another to give you and your clients
              outstanding results in the most natural way possible. Our
              dermatologically tested and patented permanent hair colour
              formula, contains the lowest possible levels of oxidative pigment
              (PPD/PTD) and is packed full of high grade, natural and certified
              organic ingredients. Uniquely, our permanent colour works at a
              lower level pH than traditional chemical colours, meaning that
              there is no damage to the hair. The System is supported by our
              class-leading range of hair care products, which repair and
              restore the health of your clients’ hair before you even begin to
              colour, then re-balance and close the cuticle of the hair after
              colouring.
            </p>
          </ParagraphsCol>
        </Row>
        <Row>
          <ParagraphsCol xs={12} className="mb-3">
            <ServiceIcon
              src="/resources/icons/salon/benefits.png"
              className="img-fluid"
            />
            <SectionTitle style={{ marginTop: "1rem" }}>
              System Benefits
            </SectionTitle>
            <CustomListGroup flush>
              {systemBenefits.map(b => (
                <CustomListGroupItem>
                  <i className="fas fa-plus" style={{ fontSize: "8px" }} /> {b}
                </CustomListGroupItem>
              ))}
            </CustomListGroup>
          </ParagraphsCol>
        </Row>
      </MainContainer>
    );
  }
}
