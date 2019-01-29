import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const PeaceOfMind = styled.img`
  width: 100%;
  display: block;
  margin: 6rem auto 3rem auto;

  @media (min-width: 576px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 50%;
  }
`;

const ColoredRow = styled(Row)`
  background: ${props => (props.odd ? "#f3eff5" : "#fff")};
  padding-top: 3rem;
  padding-bottom: 3rem;
`;

const BenefitsContainer = styled(Container)`
  && {
    box-shadow: rgba(0, 0, 0, 0.12) 0 0 70px 6px;
    border-radius: 15px;
    margin-left: 25px;
    margin-right: 25px;
    padding: 1rem;

    @media (min-width: 576px) {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default class About extends Component {
  render() {
    return (
      <Container fluid>
        <PeaceOfMind src="/resources/about.png" className="img-fluid" />
        <Row className="px-3">
          <Col xs={12}>
            <h1 className="text-center pb-3">Our Story</h1>
          </Col>
          <Col xs={12} className="px-5 text-center">
            <p>
              Peace of Mind Massage Therapy &amp; Natural Healing is a Woman
              Owned Business based on mother nature's common grounds, located at
              602 N Lower Broadway were Peoples St meets the wall to Upper
              downtown , Opened July 10, 2010.
            </p>
          </Col>
          <Col xs={12} className="px-5 text-center">
            <p>
              Peace of mind will transform all of your aches and pains internal
              and external into comfort, by giving you ease and relief with
              massage therapy and natural healing. LMT: Jynelle Ornelas has made
              massage and natural healing her passion. Her education and
              techniques stemmed from Austin School of Massage Therapy and
              Homeopathic remedies passed down from past generations.
            </p>
          </Col>
          <Col xs={12} className="px-5 text-center">
            <p>
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
          </Col>
          <Col xs={12} className="px-5 text-center">
            <p>
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
          </Col>
        </Row>
        <ColoredRow odd className="px-3">
          <Col xs={12}>
            <h1 className="text-center pb-3">Why a Massage?</h1>
          </Col>
          <Col xs={12} className="px-5 text-center">
            <p>
              We all have stress, tension, aches and pains that we experience
              and need to give attention to, in order to take care of our
              bodies, we only get one body. Everyone experiences stress from
              everyday living, we feel tension laced throughout or muscles
              sometimes accompanied by aches and pain from old accidents,
              medical conditions, and repetitive hard work we put our bodies
              thought daily. No matter what your occupation is working too long
              without a break creates tension in your back, shoulders, and neck
              muscles, tired eyes , and slower,more easily irritated mental
              process.
            </p>
          </Col>
          <Col xs={12} className="px-5 text-center">
            <p>
              Human touch increases the production of endorphins, growth
              hormone, along with DHEA, all of which lengthen your life span and
              lower the negative impact of stress. Studies have found that
              patients who are regularly touched recover faster than those who
              are not touched. So get a massage and feel your mood improve.
            </p>
          </Col>
          <Col xs={12} className="px-5 text-center">
            <p>
              We have heard many people complain of being over medicated, tired
              and stressed. With every massage we give the option to mankind’s
              first medicine which consists of 100% natural oils combined in to
              your massage cream or oils, and other healing earth products.
            </p>
          </Col>
        </ColoredRow>
        <Row className="px-3 py-5">
          <Col xs={12}>
            <h1 className="text-center pb-3">Benefits of Massaging</h1>
          </Col>
          <BenefitsContainer>
            <Row>
              <Col xs={12} md={4} className="p-3">
                <h4 className="text-center">Cardiovascular System</h4>
                <p className="text-center p-0 m-0">
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: 5 }} />
                  Improves Blood Circulation
                </p>
                <p className="text-center p-0 m-0">
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: 5 }} />
                  Decrease Blood Pressure
                </p>
                <p className="text-center p-0 m-0">
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: 5 }} />
                  Reduces Heart Rate
                </p>
                <p className="text-center p-0 m-0">
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: 5 }} />
                  Increases White Blood Cell Count
                </p>
                <p className="text-center p-0 m-0">
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: 5 }} />
                  Replenishes Nutritive Materials
                </p>
              </Col>
              <Col xs={12} md={4} className="p-3">
                <h4 className="text-center">Lymphatic/Immune System</h4>
                <p className="text-center p-0 m-0">
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: 5 }} />
                  Increases The Number and Function of Natural Killer Cells
                </p>
                <p className="text-center p-0 m-0">
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: 5 }} />
                  Promotes Lymph Circulation
                </p>
                <p className="text-center p-0 m-0">
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: 5 }} />
                  Decreases Weight In Patients With Lymph Edema
                </p>
                <p className="text-center p-0 m-0">
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: 5 }} />
                  Reduces Lymph Edema
                </p>
                <p className="text-center p-0 m-0">
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: 5 }} />
                  Increases Lymphocyte Count
                </p>
              </Col>
              <Col xs={12} md={4} className="p-3">
                <h4 className="text-center">Nervous &amp; Endocrine System</h4>
                <p className="text-center p-0 m-0">
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: 5 }} />
                  Reduces Stress
                </p>
                <p className="text-center p-0 m-0">
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: 5 }} />
                  Reduces Anxiety
                </p>
                <p className="text-center p-0 m-0">
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: 5 }} />
                  Promotes Relaxation
                </p>
                <p className="text-center p-0 m-0">
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: 5 }} />
                  Reduces Feelings of Depression
                </p>
                <p className="text-center p-0 m-0">
                  <FontAwesomeIcon icon={faPlus} style={{ paddingRight: 5 }} />
                  Decreases Pain
                </p>
              </Col>
            </Row>
          </BenefitsContainer>
        </Row>
      </Container>
    );
  }
}
