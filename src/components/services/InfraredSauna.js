import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle
} from "reactstrap";
import styled, { keyframes } from "styled-components";
import ServiceCardRow from "../common/ServiceCardRow";

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
  background-image: url("${props => props.background}");
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

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

const ColorsCards = styled(Card)`
  && {
    height: 100%;
    background-color: ${props => props.background}
    color: #fff;
    border-radius: 8px;
    border: 0;
    outline: 0;
    box-shadow: rgba(0, 0, 0, 0.12) 0 0 70px 6px;
    margin-bottom: 3rem;
  }
`;

const ColorsCardBody = styled(CardBody)`
  && {
    text-align: center;
    height: auto;
    margin-bottom: 0.5rem;
  }
`;

const ColorsCardText = styled(CardText)`
  && {
    margin-bottom: 2rem;
    color: #3d3d3d;
  }
`;

const colors = [
  {
    row: [
      {
        title: "Red",
        color: "#ff7675",
        desc:
          'Red is called "The Great Energizer." It loosens, releases stiffnes and constrictons. It is excellent for areas that have become stiffened. Red is the first visible color we see after the infrared ban is passed. It poromotes cellular growth, stimulating the will aspect, or the circulatory system. It is therefore indicated for all colds, sluggish or dormant conditions, such as pmeumonia, arthritis, anemia, as a liver stimulant, an energy builder, and for increasing circulation. Red links with and stimulates the base of the spine, causing the adrenal glands to release adrenalin. This results in greater strength. Red causes hemoglobin to multiply, thus increasing energy raising body temperature conditions as it stimulates sensory nerves such as hearing, taste, smell and activates metabolism. It is exellecent for anemia or blood-related conditions.'
      },
      {
        title: "Blue",
        color: "#74b9ff",
        desc:
          "Blue on other hand, is at the opposite end of the visible spectrum. Blue can be used for any type of ailments associated with speec, communication, or the throat. This is a mentally relaxing color. Blue has pacifying effect on the nervous system encouraging great relaxtion. It is ideal for sleep problems. Blue light connects us to holistic thought, and gives us wisdom and calrity enhancing communication and speech. Relaxing, soothing blue rays bring great calm and peace to the mind this worried, excited, or in a constant nervous state. It is a very positive color, indicating loyalty and reliability, as expressed in the sentiment of being true blue."
      },
      {
        title: "Yellow",
        color: "#ffeaa7",
        desc:
          "Yellow helps awaken mental inspiration arousing higher mentality. Thus, it is an excellent color for nervous or nerve-related conditions or ailments; fueling the solor plexus. Yellow has very enriching effect upon the intellect. Yellow can be sued for conditions of the stomach, liver, and intestines. It can help the pores of the skin by reparing scarred tissue. These rays have an alkalizing effect whiche strengthens the nerves. Awakening, inspiring and vitally stimulating the higher mind promoting self-control. Typical diseases are treated by yellow are constipation, has, liver troubles, diabetes, eczema, and nervous exhaustion. Providing clarity of thought, increasing awareness, stimulatin interest and curiosity yellow energy is related the ability to perceive or understand. The yellow energy connects us to our mental self."
      }
    ]
  },
  {
    row: [
      {
        title: "Orange",
        color: "#fab1a0",
        desc:
          'Orange has a freeing action upon the mind, relieving repression. Because orange is a blend of red and yellow, it combines physcial energy with mental wisdom, inducing a transformation between lower physical reaction and higher mental response. Thus, it is often referred to as "The Wisdom Ray." Orange is warm, cherring, and con-constricting. Through orange, we are able to heal the physical body (red) and, at the same time, indcue within the mind (yellow) greater understanding. Orange helps assimilate new ideas Orange is the best emotional stimulant helping to remove inhibitions paving independent social behavior. Bring joy to your workday and strengthen your appeitie for life. ORagne aids in repairing inflammation of kineys, gallstones, menstrual cramps, epilepsy, wet cough and all sinus conditions.'
      },
      {
        title: "Green",
        color: "#55efc4",
        desc:
          "Green is the universal healing color. Green is midway in the color spectrum; therefore, it contains both a physical nature and a spiritual nature, in equal balance and in harmony. Thus, green can be used for just about any condition in need of healing. When in doubt, green will always work. Help relaxexmuscles, nervers, and thoughts. The color green cleanses and balances our energy, to give a feeling of renewal, peace and harmony. Used primarily for balancing our whole being it is neither relaxing nor astringent in its impact. In a more practical snese, green affects blood pressure and all conditions of the heart. Having both an energizing effect, moderating, or soothing effect. Green can help heal many illnesses of this nature, specifically including heart troubles, decreasing and stabillizing blood pressure, ulcers, cancer, headaches, nervous disorders and influenza, and acts a general tonic."
      },
      {
        title: "Violet",
        color: "#a29bfe",
        desc:
          "Violet is the last color we can see before light onto ultra-violet. This color is an excellent remedy for neurosis, diseases of the scalp, sciatica, tumors, rheumatism, cerebral-spinal meningitis, concusssion, cramps epilepsy. Violet animates and clean the venous blood. It is generally not used for physical conditions; however, some color experts believe that it does provide nourishment to the cells i the upper brain. Violet pruifies our thoughts and feelings giving us inspiration in all undertakings. The violet energy connects us to our spiritual self bringing guidance, wisdom and inner strength, and enhances artistic talent and creativity. Leonardo da Vinci proclaimed that you cna increase the power of meditation ten fold by meditating under the gentle rays of violet, as found in church windows."
      }
    ]
  }
];

const advantages = [
  {
    row: [
      {
        icon: "/resources/services/massages/infrared-sauna-impr-circ.jpg",
        title: "Improved Circulation",
        desc:
          "Consistent infrared sauna sessions, especially in the middle-infrared level, can stimulate blood flow, improve muscle recovery, and decrease pain and inflammation after intense exercise.",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/massages/infrared-sauna-detox.jpg",
        title: "Detoxification",
        desc:
          "Sweating is one of the body's most natural ways to eliminate toxins, making it a crucial part of detoxification. When compared to traditional Swedish saunas, infrared saunas allow you to eliminate about seven times more toxins.",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/massages/infrared-sauna-pain-relief.jpg",
        title: "Pain Relief",
        desc:
          "If you suffer from muscle aches or joint pain, infrared saunas can relive this form of inflammation by increasing circulation and relaxing your muscles.",
        sm: 12,
        xl: 4
      }
    ]
  },
  {
    row: [
      {
        icon: "/resources/services/massages/infrared-sauna-skin-pur.jpg",
        title: "Skin Purification",
        desc:
          "Infrared sauna technology can help purify your skin by eliminating toxins from your pores and increasing circulation, resulting in clearer, softer, and healthier-looking skin.",
        sm: 12,
        xl: 4
      },
      {
        icon: "/resources/services/massages/infrared-sauna-relaxation.jpg",
        title: "Relaxtion",
        desc:
          "Infrared sauna therapy promotes relaxtion by helping to balance your body's level of cortisol, your body's primary stress hormone. The heat generated by the sauna will also help to relax muscles and relieve tension throughout the body, allowing you to relax and de-stress.",
        sm: 12,
        xl: 4
      }
    ]
  }
];

const ColorsRow = ({ rows }) => {
  return rows.map((row, i) => {
    return (
      <Row key={i}>
        {row.row.map(s => {
          return (
            <Col sm={12} xl={4} key={s.title} className="mb-4">
              <ColorsCards background={s.color}>
                <ColorsCardBody>
                  <CardTitle>{s.title}</CardTitle>
                  <ColorsCardText>{s.desc}</ColorsCardText>
                </ColorsCardBody>
              </ColorsCards>
            </Col>
          );
        })}
      </Row>
    );
  });
};

export default class InfraredSauna extends Component {
  render() {
    return (
      <div>
        <Title>
          <ServiceTitle>Infrared Sauna</ServiceTitle>
          <Hr />
        </Title>
        <Background
          background={"/resources/services/massages/infrared-sauna-main.jpg"}
        />
        <MainContainer fluid>
          <Row className="mb-5">
            <ParagraphsCol xs={12} className="text-center">
              <h1 className="text-center">
                Infrared Sauna Color Light Therapy
              </h1>
              <small className="m-0 p-0">
                15 minutes: $15.00 | 30 minutes: $30.00
              </small>
              <HeadingHr />
            </ParagraphsCol>
            <ParagraphsCol xs={12} className="text-center mt-5">
              <h3 className="text-center">Medical Benefits</h3>
              <HeadingHr />
              <p>
                Light Therapy has been reported to reduce swelling, relieve
                pain, decrease inflammation, accelerate open wound healing and
                greatly reduce overall recovery after medical/surgical
                preocedures. Patients have demonstrated increased range of
                motion, decreased muscle tension and spasm, and improved
                circulation.
              </p>
              <p>
                Rejuvenating LED light therapy can be used pain management such
                as joint and back pain, sore or torn muscles, sprains,
                arthritis, post-surgical scars, burns, wounds and more. When
                used with infrared technology, light therapy (phototherapy) is
                one of the most effective and non-invasive ways to repair the
                body.
              </p>
              <p>
                Light therapy is also used to relieve Seasonal Affective
                Disorder (SAD). SAD effects individuals when the lack of
                sunlight results in seasonal depression. Phototherapy helps with
                SAD by resetting the internal biological (Circadian rhythms),
                helping individuals sleep better and regulate their mood. Even
                companies, such as GE and Philips, have created phototherapeutic
                products to improve and regulate mood.
              </p>
            </ParagraphsCol>
            <ParagraphsCol xs={12} className="text-center mt-5">
              <h3 className="text-center">Cosmetic Benefits</h3>
              <HeadingHr />
              <p>
                Light therapy is also a growing treatment for anti-aging. Many
                individuals have seen a reduction in the appearance of fine
                lines, wrinkles, crow's feet, and age spots.
              </p>
              <p>
                Light therapy is "effective at improving the appearance of the
                face, neck, and chest by reducing the signs of aging, wrinkles,
                and age spots", says Web M.D. Combined with infrared therapy,
                LED phototherapy can be a great way to revitalize skin. Light
                therapy energizes skin cells, stimulating the production of
                collagen and elastin, giving skin back it's youthful look.
              </p>
            </ParagraphsCol>
            <ParagraphsCol xs={12} className="text-center mt-5">
              <h3 className="text-center">Healing with Color</h3>
              <HeadingHr />
              <p>
                Color is light; split into different wavelength vibrating at
                different speeds and at different frequencies. Objects that
                ABSORB all wavelengths adn DO NOT reflect are black in nature.
                Objects that RELFLECT all wavelengths and DO reflect are white
                in nature. Between black and white lies COLOR. Colors are
                wavelenghts of energy that, to us, appear as color because of
                the potential and capabilities of the object to either absorb or
                reflect the energy.
              </p>
              <p>
                Light therapy uses colors for their proposed healing abilites in
                treating emotional and physical disturbances. Light therapy is
                based on the premise that different colors evoke different
                respones in poeple. For example, some colors are considered to
                be stimulating, whereas others may be soothin. Color therapy has
                been suggested for many uses, based on tradition or on
                scientific theories. Consult with a health care provider before
                using color therapy for any use.
              </p>
              <ColorsRow rows={colors} />
            </ParagraphsCol>
          </Row>
          <Row>
            <ParagraphsCol xs={12} className="text-center mt-5">
              <h3 className="text-center">
                Advantages of Infrared Light Therapy
              </h3>
              <HeadingHr />
              <ServiceCardRow rows={advantages} />
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
      </div>
    );
  }
}
