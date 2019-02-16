import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";
import ServiceRows from "../common/ServiceRows";

const MainContainer = styled(Container)`
  padding-top: 5rem;
  background: #f3eff5;
`;

const ServiceTitle = styled.h1`
  text-align: center;
  padding: 5rem 0 0 0;
`;

const ServiceSubTitle = styled.p`
  text-align: center;
  padding: 0 0 5rem 0;
`;

const SectionTitle = styled.h4`
  text-align: center;
  margin-top: 3rem;
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

const ParagraphsCol = styled(Col)`
  padding: 0 3rem;

  @media (min-width: 1440px) {
    padding: 0 10rem !important;
  }
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

const BenefitsContainer = styled(Container)`
  && {
    box-shadow: rgba(0, 0, 0, 0.12) 0 0 70px 6px;
    border-radius: 15px;
    margin-left: 25px;
    margin-right: 25px;
    padding: 3rem;

    @media (min-width: 576px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

const BenefitsIcon = styled.img`
  margin: 10px 0;
  border-radius: 50%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.12);
  width: 25%;
`;

const BenefitsIconLastTwoRows = styled.img`
  margin: 10px 0;
  border-radius: 50%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.12);
  width: 25%;

  @media (min-width: 992px) {
    width: 20%;
  }
`;

const colors = [
  {
    row: [
      {
        icon: "",
        title: "Red",
        price: "",
        color: "#ff7675 !important",
        desc:
          'Red is called "The Great Energizer." It loosens, releases stiffnes and constrictons. It is excellent for areas that have become stiffened. Red is the first visible color we see after the infrared ban is passed. It poromotes cellular growth, stimulating the will aspect, or the circulatory system. It is therefore indicated for all colds, sluggish or dormant conditions, such as pmeumonia, arthritis, anemia, as a liver stimulant, an energy builder, and for increasing circulation. Red links with and stimulates the base of the spine, causing the adrenal glands to release adrenalin. This results in greater strength. Red causes hemoglobin to multiply, thus increasing energy raising body temperature conditions as it stimulates sensory nerves such as hearing, taste, smell and activates metabolism. It is exellecent for anemia or blood-related conditions.'
      },
      {
        icon: "",
        title: "Blue",
        price: "",
        color: "#74b9ff !important",
        desc:
          "Blue on other hand, is at the opposite end of the visible spectrum. Blue can be used for any type of ailments associated with speec, communication, or the throat. This is a mentally relaxing color. Blue has pacifying effect on the nervous system encouraging great relaxtion. It is ideal for sleep problems. Blue light connects us to holistic thought, and gives us wisdom and calrity enhancing communication and speech. Relaxing, soothing blue rays bring great calm and peace to the mind this worried, excited, or in a constant nervous state. It is a very positive color, indicating loyalty and reliability, as expressed in the sentiment of being true blue."
      }
    ]
  },
  {
    row: [
      {
        icon: "",
        title: "Yellow",
        price: "",
        color: "#ffeaa7 !important",
        desc:
          "Yellow helps awaken mental inspiration arousing higher mentality. Thus, it is an excellent color for nervous or nerve-related conditions or ailments; fueling the solor plexus. Yellow has very enriching effect upon the intellect. Yellow can be sued for conditions of the stomach, liver, and intestines. It can help the pores of the skin by reparing scarred tissue. These rays have an alkalizing effect whiche strengthens the nerves. Awakening, inspiring and vitally stimulating the higher mind promoting self-control. Typical diseases are treated by yellow are constipation, has, liver troubles, diabetes, eczema, and nervous exhaustion. Providing clarity of thought, increasing awareness, stimulatin interest and curiosity yellow energy is related the ability to perceive or understand. The yellow energy connects us to our mental self."
      },
      {
        icon: "",
        title: "Orange",
        price: "",
        color: "#fab1a0 !important",
        desc:
          'Orange has a freeing action upon the mind, relieving repression. Because orange is a blend of red and yellow, it combines physcial energy with mental wisdom, inducing a transformation between lower physical reaction and higher mental response. Thus, it is often referred to as "The Wisdom Ray." Orange is warm, cherring, and con-constricting. Through orange, we are able to heal the physical body (red) and, at the same time, indcue within the mind (yellow) greater understanding. Orange helps assimilate new ideas Orange is the best emotional stimulant helping to remove inhibitions paving independent social behavior. Bring joy to your workday and strengthen your appeitie for life. ORagne aids in repairing inflammation of kineys, gallstones, menstrual cramps, epilepsy, wet cough and all sinus conditions.'
      }
    ]
  },
  {
    row: [
      {
        icon: "",
        title: "Green",
        price: "",
        color: "#55efc4 !important",
        desc:
          "Green is the universal healing color. Green is midway in the color spectrum; therefore, it contains both a physical nature and a spiritual nature, in equal balance and in harmony. Thus, green can be used for just about any condition in need of healing. When in doubt, green will always work. Help relaxexmuscles, nervers, and thoughts. The color green cleanses and balances our energy, to give a feeling of renewal, peace and harmony. Used primarily for balancing our whole being it is neither relaxing nor astringent in its impact. In a more practical snese, green affects blood pressure and all conditions of the heart. Having both an energizing effect, moderating, or soothing effect. Green can help heal many illnesses of this nature, specifically including heart troubles, decreasing and stabillizing blood pressure, ulcers, cancer, headaches, nervous disorders and influenza, and acts a general tonic."
      },
      {
        icon: "",
        title: "Violet",
        price: "",
        color: "#a29bfe !important",
        desc:
          "Violet is the last color we can see before light onto ultra-violet. This color is an excellent remedy for neurosis, diseases of the scalp, sciatica, tumors, rheumatism, cerebral-spinal meningitis, concusssion, cramps epilepsy. Violet animates and clean the venous blood. It is generally not used for physical conditions; however, some color experts believe that it does provide nourishment to the cells i the upper brain. Violet pruifies our thoughts and feelings giving us inspiration in all undertakings. The violet energy connects us to our spiritual self bringing guidance, wisdom and inner strength, and enhances artistic talent and creativity. Leonardo da Vinci proclaimed that you cna increase the power of meditation ten fold by meditating under the gentle rays of violet, as found in church windows."
      }
    ]
  }
];

export default class InfraredSauna extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Infrared Sauna Color Light Therapy</ServiceTitle>
          <ServiceSubTitle style={{ textAlign: "center", margin: "0" }}>
            15 Minutes: $15.00 | 30 Minutes: $30.00
          </ServiceSubTitle>
        </ParagraphsCol>
        <Row>
          <ParagraphsCol xs={12} className="mb-3">
            <p style={{ textAlign: "center" }}>
              Light Therapy has been valued throughout history as remarkable
              source of healing. Today, the therapeutic applications fo light
              and color are being investigated in major hospitals and research
              centers worldwide. Results indicate that full-spectrum,
              ultra-violet, colored, and laser light can have therapeutic value
              for a range of conditions from chronic pain and depression to
              immune disorders.
            </p>
          </ParagraphsCol>
        </Row>
        <Row>
          <ParagraphsCol xs={12}>
            <ServiceIcon
              src="/resources/icons/sauna/medical.png"
              className="img-fluid"
            />
            <SectionTitle>Medical Benefits</SectionTitle>
            <p style={{ textAlign: "center" }}>
              Light Therapy has been reported to reduce swelling, relieve pain,
              decrease inflammation, accelerate open wound healing and greatly
              reduce overall recovery after medical/surgical preocedures.
              Patients have demonstrated increased range of motion, decreased
              muscle tension and spasm, and improved circulation.
            </p>
            <p style={{ textAlign: "center" }}>
              Rejuvenating LED light therapy can be used pain management such as
              joint and back pain, sore or torn muscles, sprains, arthritis,
              post-surgical scars, burns, wounds and more. When used with
              infrared technology, light therapy (phototherapy) is one of the
              most effective and non-invasive ways to repair the body.
            </p>
            <p style={{ textAlign: "center" }}>
              Light therapy is also used to relieve Seasonal Affective Disorder
              (SAD). SAD effects individuals when the lack of sunlight results
              in seasonal depression. Phototherapy helps with SAD by resetting
              the internal biological (Circadian rhythms), helping individuals
              sleep better and regulate their mood. Even companies, such as GE
              and Philips, have created phototherapeutic products to improve and
              regulate mood.
            </p>
          </ParagraphsCol>
        </Row>
        <Row>
          <ParagraphsCol xs={12}>
            <ServiceIcon
              src="/resources/icons/sauna/cosmetic.png"
              className="img-fluid"
            />
            <SectionTitle>Cosmetic Benefits</SectionTitle>
            <p style={{ textAlign: "center" }}>
              Light therapy is also a growing treatment for anti-aging. Many
              individuals have seen a reduction in the appearance of fine lines,
              wrinkles, crow's feet, and age spots.
            </p>
            <p style={{ textAlign: "center" }}>
              Light therapy is "effective at improving the appearance of the
              face, neck, and chest by reducing the signs of aging, wrinkles,
              and age spots", says Web M.D. Combined with infrared therapy, LED
              phototherapy can be a great way to revitalize skin. Light therapy
              energizes skin cells, stimulating the production of collagen and
              elastin, giving skin back it's youthful look.
            </p>
          </ParagraphsCol>
        </Row>
        <Row>
          <ParagraphsCol xs={12}>
            <ServiceIcon
              src="/resources/icons/sauna/colors.png"
              className="img-fluid"
            />
            <SectionTitle>Healing With Color</SectionTitle>
            <p style={{ textAlign: "center" }}>
              Color is light; split into different wavelength vibrating at
              different speeds and at different frequencies. Objects that ABSORB
              all wavelengths adn DO NOT reflect are black in nature. Objects
              that RELFLECT all wavelengths and DO reflect are white in nature.
              Between black and white lies COLOR. Colors are wavelenghts of
              energy that, to us, appear as color because of the potential and
              capabilities of the object to either absorb or reflect the energy.
            </p>
          </ParagraphsCol>
        </Row>
        <Container style={{ padding: 0, margin: "0 auto" }}>
          <ServiceRows rows={colors} />
        </Container>
        <Row style={{ marginTop: "25px" }}>
          <ParagraphsCol xs={12}>
            <p style={{ textAlign: "center" }}>
              Light therapy uses colors for their proposed healing abilites in
              treating emotional and physical disturbances. Light therapy is
              based on the premise that different colors evoke different
              respones in poeple. For example, some colors are considered to be
              stimulating, whereas others may be soothin. Color therapy has been
              suggested for many uses, based on tradition or on scientific
              theories. Consult with a health care provider before using color
              therapy for any use.
            </p>
          </ParagraphsCol>
        </Row>
        <Row className="px-3 py-5">
          <Col xs={12}>
            <h1 className="text-center pb-3">
              Advantages Of Infrared Light Therapy
            </h1>
          </Col>
          <BenefitsContainer>
            <Row>
              <Col xs={12} lg={4} className="p-3">
                <Row>
                  <Col xs={12} className="text-center">
                    <BenefitsIcon
                      src="/resources/icons/sauna/cirulation.png"
                      className="img-fluid"
                    />
                  </Col>
                </Row>
                <h4 className="text-center">Improved Circulation</h4>
                <p className="text-center p-0 m-0">
                  Consistent infrared sauna sessions, especially in the
                  middle-infrared level, can stimulate blood flow, improve
                  muscle recovery, and decrease pain and inflammation after
                  intense exercise.
                </p>
              </Col>
              <Col xs={12} lg={4} className="p-3">
                <Row>
                  <Col xs={12} className="text-center">
                    <BenefitsIcon
                      src="/resources/icons/sauna/detox.png"
                      className="img-fluid"
                    />
                  </Col>
                </Row>
                <h4 className="text-center">Detoxification</h4>
                <p className="text-center p-0 m-0">
                  Sweating is one of the body's most natural ways to eliminate
                  toxins, making it a crucial part of detoxification. When
                  compared to traditional Swedish saunas, infrared saunas allow
                  you to eliminate about seven times more toxins.
                </p>
              </Col>
              <Col xs={12} lg={4} className="p-3">
                <Row>
                  <Col xs={12} className="text-center">
                    <BenefitsIcon
                      src="/resources/icons/sauna/relax.png"
                      className="img-fluid"
                    />
                  </Col>
                </Row>
                <h4 className="text-center">Relaxtion</h4>
                <p className="text-center p-0 m-0">
                  Infrared sauna therapy promotes relaxtion by helping to
                  balance your body's level of cortisol, your body's primary
                  stress hormone. The heat generated by the sauna will also help
                  to relax muscles and relieve tension throughout the body,
                  allowing you to relax and de-stress.
                </p>
              </Col>
            </Row>
            <Row>
              <Col xs={12} lg={6} className="p-3">
                <Row>
                  <Col xs={12} className="text-center">
                    <BenefitsIconLastTwoRows
                      src="/resources/icons/sauna/relief.png"
                      className="img-fluid"
                    />
                  </Col>
                </Row>
                <h4 className="text-center">Pain Relief</h4>
                <p className="text-center p-0 m-0">
                  If you suffer from muscle aches or joint pain, infrared saunas
                  can relive this form of inflammation by increasing circulation
                  and relaxing your muscles.
                </p>
              </Col>
              <Col xs={12} lg={6} className="p-3">
                <Row>
                  <Col xs={12} className="text-center">
                    <BenefitsIconLastTwoRows
                      src="/resources/icons/sauna/skin.png"
                      className="img-fluid"
                    />
                  </Col>
                </Row>
                <h4 className="text-center">Skin Purification</h4>
                <p className="text-center p-0 m-0">
                  Infrared sauna technology can help purify your skin by
                  eliminating toxins from your pores and increasing circulation,
                  resulting in clearer, softer, and healthier-looking skin.
                </p>
              </Col>
            </Row>
          </BenefitsContainer>
        </Row>
        <Row>
          <ParagraphsCol xs={12} style={{ padding: "0 3rem" }}>
            <Disclaimer>
              NOTICE: Prices Are Subject To Change Without Prior Notice
            </Disclaimer>
          </ParagraphsCol>
        </Row>
      </MainContainer>
    );
  }
}
