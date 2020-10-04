import React from "react";
import { Container, Row, Col } from "reactstrap";
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

const yogaExpectations = [
  {
    row: [
      {
        icon: "/resources/services/massages/kids-yoga-breath.jpg",
        title: "Awareness of Breath",
        desc:
          "Breathing exercises can energize kids or encourage relaxation, depending on what you teach. Different games and techniques help kids connect to how their bodies feel as a result of deep breathing. Focus increases, as does their breathing and lung capacity. Stress is naturally reduced and healthy hormones are released.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/kids-yoga-strength.jpg",
        title: "Strengthening and Energizing",
        desc:
          "Kids think that yoga is great for stretching, but doesn't build strength. It's important for a teacher to include conversations, as well as exercises around how helpful yoga is for building strength. Talking about the different muscles used in poses and incorporating games and sequences will help build strength as well as body awareness and coordination. Bodies that are strong digest food better, maintain a healthy weight and can support the stress of carrying heavy loads, like a backpack. Bodies will also breathe better, work more efficiently and protect the more fragile joints.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/kids-yoga-balancing.jpg",
        title: "Balancing",
        desc:
          "Balancing poses teach children that with increased focus, you can increase attention naturally, even in kids who struggle with different attention challenges. Poses and games focused on balancing skills, develop an intrinsic strength, evoke a meditative feeling, and promote stillness and quieting of the mind. This can help kids deal with the stress of living in a chaotic world where constant stimulation is a regular part of life.",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/massages/kids-yoga-stretching.jpg",
        title: "Stretching and Lengthening",
        desc:
          "It's great for kids to be strong, but a body that's only based on strength has no way to yield under pressure. Strong muscles without accompanying flexibility can't move quickly, pulling on bones and joints. Yoga poses stretch muscles and through integrating breathing and movement, muscles become warm and become more flexible. They can yield when they need to, and support tender joints in a more functional way..",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/kids-yoga-focus.jpg",
        title: "Awareness and Focus",
        desc:
          "Yoga helps create awareness in the body through deep breathing and movement. It gives kids a way to express themselves, build a strong connection between what they hear and what they do. Children that have healthy body awareness are more confident and strong, have better posture, breathe better and have a sense of quiet strength.",
        sm: 12,
        xl: 4,
      },
      {
        icon: "/resources/services/massages/kids-yoga-flowing.jpg",
        title: "Flowing, Connecting, and Integrating",
        desc:
          "When we string poses together, we give kids a taste of what it means to move with ease. It also helps them build the awareness that all our movements are a series of coordinated efforts between muscles, bones, joints, and nerves. Older kids are more able to isolate different muscle groups and get more sophisticated about movements; things like keeping the arms lifted in Warrior 1, while at the same time, dropping the shoulders to relax them. All these things together increase a child's sense of feeling integrated.",
        sm: 12,
        xl: 4,
      },
    ],
  },
  {
    row: [
      {
        icon: "/resources/services/massages/kids-yoga-meditation.jpg",
        title: "Improved Circulation",
        desc:
          "Yoga is meditative by nature. So whether a child is holding a balancing posture, sitting in meditation, or moving through a series of poses, there's going to be a calming, soothing quality. Giving younger kids something to do as they rest on their mats will help with their attention, such as suggesting they think of a favorite color or toy. Older kids will find it easier to rest longer with less structure.",
        sm: 12,
        xl: 4,
      },
    ],
  },
];

export const KidsYoga = () => {
  return (
    <React.Fragment>
      <Title>
        <ServiceTitle>KIDS YOGA</ServiceTitle>
        <Hr />
      </Title>
      <Background
        background={"/resources/services/massages/kids-yoga-main.jpg"}
      />
      <MainContainer fluid>
        <Row className="mb-5">
          <ParagraphsCol xs={12} className="text-center">
            <h1 className="text-center">Kids Yoga</h1>
            <small className="m-0 p-0">
              Class Session: $27.00 | Private Session: $67.00
            </small>
            <HeadingHr />
          </ParagraphsCol>
          <ParagraphsCol xs={12} className="text-center mt-5">
            <h3 className="text-center">Yoga Helps Kids</h3>
            <HeadingHr />
            <p class="light-text">
              The kids develop body awareness and learn how to use their bodies
              in a healthy way. It helps them manage stress through breathing,
              awareness, meditation, and healthy movement. They are able to
              build concentration and increase their confidence and create a
              positive self-image. The kids participating in yoga are able to
              feel part of a healthy, non-competitive group while giving them
              alternative to constantly being attached to electronic devices.
            </p>
          </ParagraphsCol>
          <ParagraphsCol xs={12} className="text-center mt-5">
            <h3 className="text-center">
              Yoga For Kids Also Benefits Teachers
            </h3>
            <HeadingHr />
            <p class="light-text">
              The teachers can have an alternative way to handle challenges they
              may face in the classroom. It also gives the teachers a healthy
              activity to integrate into the daily lesson plan while benefiting
              from blending exercise into the class.
            </p>
          </ParagraphsCol>
        </Row>
        <Row>
          <ParagraphsCol xs={12} className="text-center mt-5">
            <h3 className="text-center">What to expect in our yoga class</h3>
            <HeadingHr />
            <ServiceCardRow rows={yogaExpectations} />
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
};
