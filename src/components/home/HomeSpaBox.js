import React from "react";
import { Col, NavLink } from "reactstrap";
import styled from "styled-components";

const ColoredCol = styled(Col)`
  background: #f3eff5;
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
`;

const ContactButton = styled(NavLink)`
  && {
    border-radius: 8px;
    padding: 1rem 1rem;
    position: relative;
    top: 15px;
    box-shadow: rgba(0, 0, 0, 0.12) 0 3px 13px 1px;
    font-size: 15px;
    background: linear-gradient(-45deg, #b3ffab, #12fff7);
    border: none;
    color: #3d3d3d;
    text-decoration: none;
    width: 75%;
    margin: 0 auto;
    transition: 0.5s all;

    @media (min-width: 768px) {
      width: 50%;
    }

    @media (min-width: 992px) {
      width: 25%;
    }
  }
`;

const Hr = styled.hr`
  width: 50%;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

const PriceText = styled.h6`
  font-size: 0.75rem;
  font-weight: 500 !important;
`;

export const HomeSpaBox = () => {
  return (
    <div>
      <ColoredCol xs={12}>
        <h1 className="text-center">Spa Boxes now available!</h1>
        <Hr />

        <h3 className="text-center mt-5">Large Spa Box</h3>
        <PriceText className="text-center mb-3">$162.00</PriceText>
        <p className="text-center px-5 light-text">
          Peace of Mind Spa Box! The contents include a medical grade hand
          sanitizer, all-in-one organic hand manufactured lotion to use as a
          shaving cream, deodorant, or lotion, CBD bar of soap from Leef
          Organics with an Organic Garden Handmade Spa Detoxifying Body Scrub,
          Leef CBD Bath Detox, and a Organic Body Detox Breathing Treatment
          Spray. Also includes a $10.00 gift card towards any service.
        </p>

        <h3 className="text-center mt-5">Small Spa Box</h3>
        <PriceText className="text-center mb-3">$102.00</PriceText>
        <p className="text-center px-5 light-text">
          We also have a smaller option that comes with the medical grade hand
          sanitizer spray, Organic Body Detox Breathing Treatment Spray,
          all-in-one organic hand manufactured lotion to use a shaving cream,
          deodorant, or lotion, and a Organic Colour Systems Aqua Boost travel
          size take home shampoo and conditioner. Also includes a $5.00 gift
          card towards any service.
        </p>
        <ContactButton href="#contact">Contact us about one!</ContactButton>
      </ColoredCol>
    </div>
  );
};
