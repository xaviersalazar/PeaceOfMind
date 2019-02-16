import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import styled from "styled-components";

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

const Disclaimer = styled.p`
  text-align: center;
  margin-top: 50px;
`;

const ParagraphsCol = styled(Col)`
  padding: 0 3rem;

  @media (min-width: 1440px) {
    padding: 0 10rem !important;
  }
`;

const SectionTitle = styled.h4`
  text-align: center;
  margin-top: 3rem;
`;

export default class OxygenFootSoak extends Component {
  render() {
    return (
      <MainContainer fluid>
        <ParagraphsCol xs={12} className="mt-5">
          <ServiceTitle>Purify your body</ServiceTitle>
          <ServiceSubTitle style={{ textAlign: "center", margin: "0" }}>
            $135 per hour
          </ServiceSubTitle>
        </ParagraphsCol>
        <Row>
          <ParagraphsCol xs={12} className="mb-3">
            <ServiceIcon
              src="/resources/icons/footsoak/foot.png"
              className="img-fluid"
            />
            <SectionTitle>Benefits of a Oxygen Foot Soak</SectionTitle>
            <p style={{ textAlign: "center" }}>
              Is the ionic foot bath machine right for me? With the increase in
              the number of chemicals and hazardous materials introduced in the
              last few decades, there has been a dramatic increase in incidences
              of auto-immune disease, allergies and common infections. Although
              people are living longer, we face new types of diseases and
              infections as we become immune to older ones. There are tens of
              thousands of chemicals in use today and more than a forth of these
              are known to be toxic and nothing is known about their interactive
              effects. Body fat has been tested that contains residue of
              hundreds of chemicals. Metals, such as mercury and cadmium are
              everywhere and impossible to avoid. Lead can block red blood cell
              formation.
            </p>
            <p style={{ textAlign: "center" }}>
              Chemicals can act as toxins that can block receptor sites on
              cells, and cause changes in calcium homeostasis selectively
              killing cells, and alter expression of gene products. Metals and
              chemical toxins weaken the immune system and cause increased
              vulnerability to virus, bacterial fungal and parasitic infections.
              In an attempt to detoxify these substances, our bowels, kidneys
              and liver are being overloaded. Our eliminative channels have
              become blocked or dysfunctional, because, in conjunction with
              these synthetic chemicals, and the western diet that is so acid
              forming and de-vitalized.
            </p>
            <p style={{ textAlign: "center" }}>
              To relieve the strains on the kidneys and liver it is more
              important than ever to maintain a detoxification regimen. The ion
              foot bath is designed to relieve these strains and help the body
              re-balance its energy fields allowing organs to function better.
              After using ionic foot bath machine? Healthy individuals and users
              can feel lighter and experience a greater feeling of well being
              from each session. More energy and youth is felt as well. Some
              people with pain, edema, swollen, and deteriorating joints have
              also reported symptomatic relief from the sessions. Many doctors,
              nurses, professionals and the likes have also recommended this
              machine for their patients. We also found many excerpts stating
              that the machine has helped individuals break free from addiction
              problems.
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
    );
  }
}
