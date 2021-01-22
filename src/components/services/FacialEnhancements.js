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
  padding: 5rem 2.5rem 0 2.5rem !important;
  background: #f3eff5;

  @media (min-width: 768px) {
    background-attachment: fixed;
    padding: 5rem 5rem 0 5rem !important;
  }

  @media (min-width: 992px) {
    padding: 5rem 8rem 0 8rem !important;
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
    background-size: auto;
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

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

export const FacialEnhancements = () => (
  <React.Fragment>
    <Title>
      <ServiceTitle>Facial Enhancements</ServiceTitle>
      <Hr />
    </Title>
    <Background
      background={"/resources/services/massages/facial-enhancements-main.jpg"}
    />
    <MainContainer fluid>
      <Row className="mb-5">
        <ParagraphsCol xs={12} className="text-center mt-5">
          <h3 className="text-center">Vacuum and Spray Unit</h3>
          <small className="m-0 p-0">20 Minutes: $45.00</small>
          <HeadingHr />
          <p className="light-text">
            The Vacuum and Spray unit both cleanses the skin and helps removes
            impurities
          </p>
          <p className="light-text">
            <span style={{ fontWeight: 700 }}>VACUUM</span>: Cleans the pores by
            suctioning out deeply embedded dirt and oil while simultaneously
            giving the client a deep penetrating mechanical massage. It also
            helps stimulate blood flow, when blood flow is stimulated it brings
            nutrients and oxygen to the skin and removes toxins
          </p>
          <p className="light-text">
            <span style={{ fontWeight: 700 }}>SPRAY</span>: In combination to
            the vacuum, the spray unit is used to flush out the freshly vacuumed
            pores after the vacuum treatment. It also helps create a fine, even
            mist and can be used during treatments to rinse, moisten, soothe the
            skin, or apply product
          </p>
        </ParagraphsCol>
        <ParagraphsCol xs={12} className="text-center mt-5">
          <h3 className="text-center">High Frequency Unit</h3>
          <small className="m-0 p-0">20 Minutes: $47.00</small>
          <HeadingHr />
          <p className="light-text">
            A high frequency machine used to send electrical currents and strong
            vibrations through a person’s skin to help in healing and relieving
            pain. It is used as one of the final steps of a facial extraction.
            It can be warming and soothing or stimulating and can deliver a mild
            antiseptic effect.
          </p>
          <p className="light-text">
            It benefits the skin in many ways such as increasing metabolism,
            producing heat inside the body tissues, stimulating glandular
            activity, increasing the circulation of blood, aids in the
            elimination and absorption, penetrates more deeply into the skin,
            and creates a germicidal action while it is being used in the direct
            method mode helping kill bacteria on the skin.
          </p>
        </ParagraphsCol>
        <ParagraphsCol xs={12} className="text-center mt-5">
          <h3 className="text-center">Galvanic Unit</h3>
          <small className="m-0 p-0">20 Minutes: $47.00</small>
          <HeadingHr />
          <p className="light-text">
            A versatile tool thats primarily used to introduce water-soluble
            materials into the skin and disincrustation. Skincare professionals
            have used it for 50 years to refresh and energize the skin. It also
            provides a gentle massage that helps focus cellular energy and
            enhance circulation.
          </p>
          <p className="light-text">
            <span style={{ fontWeight: 700 }}>Disincrustation</span>: The
            galvanic current creates a chemical reaction that softens or
            emulsifies (liquefies) sebum, turning it into soap (a process known
            as saponification). Soap is made of fat and lye (sodium hydroxide).
            After liquefying the sebum, the electrical current form the galvanic
            unit interacts with the salts (sodium chloride) in the skin,
            creating the chemical sodium hydroxide or lye. The lye and fatty
            liquefied sebum combine to form a soapy substance that helps
            dissolve grease deposits, debris, and blackheads in the hair
            follicles, making comedones much easier to extract. A deep pore
            cleansing, and a particularly beneficial for acne or oily skin.
            Disincrustation means the introduction of ions that assist the
            penetration of the water-soluble product into the skin. Those 2
            types are Cataphoresis and Anaphoresis.
          </p>
          <p className="light-text">
            <span style={{ fontWeight: 700 }}>Cataphoresis</span>: It uses
            galvanic current flowing from positive to the negative pole to force
            acidic products into the deeper tissue
          </p>
          <p className="light-text">
            <span style={{ fontWeight: 700 }}>Anaphoresis</span>: It uses
            galvanic current flowing from the negative to the positive pole to
            force liquids that are based (alkaline) into the tissues
          </p>
        </ParagraphsCol>
      </Row>
      <Row>
        <ParagraphsCol xs={12}>
          <Disclaimer>
            NOTICE: Prices Are Subject To Change Without Prior Notice
          </Disclaimer>
        </ParagraphsCol>
      </Row>
    </MainContainer>
  </React.Fragment>
);
