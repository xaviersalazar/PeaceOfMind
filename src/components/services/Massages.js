import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

const MainContainer = styled(Container)`
  margin: 6rem auto 3rem auto;
`;

const ServiceTitle = styled.h1`
  text-align: center;
  padding: 5rem 0;
`;

const Massage = styled.img`
  margin: 10px 0;
  border-radius: 50%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.12);
  width: 25%;
`;

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

export default class Massages extends Component {
  render() {
    return (
      <MainContainer fluid>
        <Col xs={12} className="mt-5">
          <ServiceTitle>Our Massages We Offer</ServiceTitle>
        </Col>
        <Row className="text-center">
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/chair.png"
              className="img-fluid"
            />
            <h6>Chair Massage</h6>
            <p>
              Receive a 15 minute traditional Swedish massage that will help
              alleviate your stress, tension, pain or stiffness while increasing
              your energy level, alertness and creativity. Our professional
              Massage Therapists perform the massage in a specially designed
              ergonomic massage chair while you’re fully clothed, using
              traditional Swedish massage techniques.
            </p>
          </Col>
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/champagne.png"
              className="img-fluid"
            />
            <h6>Champagne &amp; Rose Massage</h6>
            <p>
              Absorb the rich, romantic, renewing bouquet of the Champagne and
              Rose Collection. The massage oil delivers smooth, long-lasting
              glide and is rich in nutrients. Perfect for couples, Valentine's
              Day or Mother's Day services. Paraben-Free.
            </p>
          </Col>
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/coldstone.png"
              className="img-fluid"
            />
            <h6>Cold Stone Massage</h6>
            <p>
              Cold stone attributes that minimizes soreness, pulls excess heat
              from the body, stregthen the body on a cellular level, easily
              remove heat from the body. It also provides a deep state of
              relaxation, reduction of swelling or inflammation due to scar
              tissue, trauma or injuries to muscles. Cold stone helps alleviate
              anxiety, depression, PMS, sinusitis, high blood pressure, and
              fatigue.
            </p>
          </Col>
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/deeptissue.png"
              className="img-fluid"
            />
            <h6>Deep Tissue</h6>
            <p>
              A style of massage that is designed to get into the connective
              tissue of the body, rather than just the surface muscles. Many
              clients have a more intense experience with a deep tissue massage,
              but also feel that it is more beneficial, because it addresses
              deep-seated muscle pains. Like other types of massage, deep tissue
              is most beneficial when undertaken on a regular basis, so that
              therapist and client can work together to correct long term
              problems, relax the body, and prevent injury.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/himalyan.png"
              className="img-fluid"
            />
            <h6>Himalayan Salt Stone</h6>
            <p>
              An innovative, detoxifying, healing technique using warm salt
              stones to ground and balance the body’s electromagnetic field,
              central nervous system and meridians.
            </p>
          </Col>
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/hotstone.png"
              className="img-fluid"
            />
            <h6>Hot Stone</h6>
            <p>
              Hot stone helps by improve overall mental, spiritual, and physical
              wellness. Native Americans used hot stones to detoxify and to find
              harmony and balance. Basalt stones, polished, hardened lava rocks,
              are heated by hot water. The heated stones are then placed
              strategically along pressure points to help melt away tension
              creating a calming atmosphere. Stress, deadlines, anxiety, and
              other life annoyances disappear long enough for your mind to relax
              at the deepest level. Over all it creates a sense of well being.
            </p>
          </Col>
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/indianscalp.png"
              className="img-fluid"
            />
            <h6>Indian Scalp Massage</h6>
            <p>
              The Indian scalp massage improves blood flow to the head and neck,
              which increases the distribution of nutrients and encourages
              healing throughout the body, beneficial for relieving stress and
              tension, improving concentration, increasing joint mobility and
              flexibility in the neck and shoulders, improving blood circulation
              and lymphatic flow, reducing fatigue, relieving insomnia,
              headaches, migraines and sinusitis. Enjoy a deeply calming and
              relaxing treatment that will also leave you feeling energized and
              revitalized!
            </p>
          </Col>
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/lymphatic.png"
              className="img-fluid"
            />
            <h6>Lymph Drainage</h6>
            <p>
              Manual Lymphatic Drainage is a form of massage that stimulates the
              lymphatic system with gentle massaging strokes. The light
              rhythmical massage encourages the lymphatic system to eliminate
              metabolic waste products, excess fluid and bacteria, promotes
              detoxification, facilitates healing and supports the immune
              system. Studies have shown that it helps stop and reduce the
              production of cellulite after a series of treatments along with a
              healthy diet and exercise.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/medical.png"
              className="img-fluid"
            />
            <h6>Medical Massage</h6>
            <p>
              Medical massage involves therapeutic assessment, manipulation, and
              movement of the locomotor soft tissues to reduce or eliminate pain
              or dysfunction. A unique multidisciplinary approach is utilized to
              restore structural balance throughout the body, which allows focus
              on prevention and rehabilitation of musculoskeletal dysfunctions,
              chronic pain and sports injuries. Primary modalities include
              functional assessment, myofascial release, neuromuscular therapy,
              scar tissue mobilization techniques, neuromuscular re-education,
              PNF stretching, strengthening, and specific client home-care
              protocols.
            </p>
          </Col>
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/myofascial.png"
              className="img-fluid"
            />
            <h6>Myofascial Release Blade Massage</h6>
            <p>
              The focus of myofascial release is on the myofascial, the web of
              interconnected connective tissue that wraps around and surrounds
              every muscle, bone, nerve, blood vessel and organ in the body.
              Trauma, inflammatory responses, and/or surgical procedures create
              Myofascial restrictions that can produce tensile pressures of
              approximately 2,000 pounds per square inch on pain sensitive
              structures that do not show up in many of the standard tests
              (x-rays, myelograms, CAT scans, electromyography, etc.)
            </p>
          </Col>
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/pregnancy.png"
              className="img-fluid"
            />
            <h6>Pregnancy Massage</h6>
            <p>
              (Please consult with your doctor during your first trimester to
              get approval for massage.) Enhance your special time with massage
              therapy. Massage can help alleviate tension, fluid retention,
              fatigue and stress and improve circulation in the feet, legs,
              lower back, hips and neck. You will be lying comfortably on your
              side for a relaxing Swedish massage. Before making an appointment,
              please check with your physician to make sure that massage is
              right for you.
            </p>
          </Col>
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/reflexology.png"
              className="img-fluid"
            />
            <h6>Reflexology</h6>
            <p>
              A holistic therapy that aims to restore and maintain the body’s
              natural balance and encourage healing. According to Chinese
              medicine, the sensory nerves of the internal organs throughout the
              body are mainly gathered around the soles of the feet. Through
              application of pressure on these reflexes without the use of
              tools, reflexology is proven to produce potent therapeutic
              benefits for a wide range of health conditions. It can also
              produce one of the most sublime relaxation experiences while it
              rejuvenates and revitalizes all aspects of our body and being.
            </p>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/sports.png"
              className="img-fluid"
            />
            <h6>Sports Massage</h6>
            <p>
              Originally designed for athletes, to help prepare their bodies for
              optimal performance, recover after a big event, or function well
              during training. However it is useful for anyone with chronic
              pain, injury or range-of-motion issues. Sports Massage Emphasizes
              Prevention and Healing of injuries to the Muscles and Tendons.
            </p>
          </Col>
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/swedish.png"
              className="img-fluid"
            />
            <h6>Swedish Massage</h6>
            <p>
              This classic massage treatment is also known as a Relaxation
              Massage and the goal is to relax the entire body through various
              techniques such as long, flowing strokes using light to medium
              pressure. Your session will address such issues as stress, tension
              and mild to moderate muscle discomfort. Swedish massage is often
              recommended for first time massage clients and is excellent for
              improving circulation and flexibility while easing tension.
            </p>
          </Col>
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/trigger.png"
              className="img-fluid"
            />
            <h6>Trigger Point</h6>
            <p>
              A bodywork technique that involves the applying of pressure to
              tender muscle tissue in order to relieve pain and dysfunction in
              other parts of the body. The purpose of trigger point therapy is
              to eliminate pain and to re-educate the muscles into pain-free
              habits. After several treatments, the swelling and stiffness of
              neuromuscular pain is reduced; range of motion is increased;
              tension is relieved; and circulation, flexibility and coordination
              are improved.
            </p>
          </Col>
          <Col xs={12} md={3}>
            <Massage
              src="/resources/icons/massages/wine.png"
              className="img-fluid"
            />
            <h6>Wine Therapy</h6>
            <p>
              Generally red wine when used in skin care products fights free
              radicals, stimulates blood circulation, rejuvenates, increases
              skin elasticity, eases the nerves, firms, whitens, and leaves your
              skin bright and glowing These stimulating properties also softens
              wrinkles and fine lines and is altogether very useful in battling
              the effects of aging skin. It is thought that the ingredients in
              the wine massage numbs nerve endings and so allows muscles to
              reach a greater state of relaxation. This relaxation then allows a
              vasodilation of the blood vessels that surround muscle tissue and
              means more healing nutrients can get to the damaged tissue.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Disclaimer>
              NOTICE: Prices Are Subject To Change Without Prior Notice
            </Disclaimer>
          </Col>
        </Row>
      </MainContainer>
    );
  }
}
