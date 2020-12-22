import React from "react";
import { Col, NavLink } from "reactstrap";
import styled from "styled-components";

const ColoredCol = styled(Col)`
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
`;

const BookButton = styled(NavLink)`
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

export const HomeBanner = () => (
  <>
    <ColoredCol xs={12}>
      <h1 className="text-center">Massage Therapy &amp; Natural Healing</h1>
      <Hr />
      <p className="text-center px-5 light-text">
        Come in today for a Singles Massage Session or a Couples Discounted
        Massage Packet. We use all organic massage products using plants, fresh
        herbs and oils. We are unlike your everyday Day Spa. We are a private
        practice not corporate. We cater to just you when you arrive. We help
        ease all your aches and pains helping you find true Peace Of Mind.
      </p>

      <h1 className="text-center mt-5">Salon</h1>
      <Hr />
      <p className="text-center px-5 light-text">
        We are a Dyson inspired Salon and we are sticking to our organic concept
        in every aspect. We strongly believe in being green and an
        environmentally conscious business. In saying that, we are bringing an
        all organic hair coloring line called Organic Colour Systems from the
        United Kingdom. We will be the only Salon in Corpus Christi and
        throughout the State of Texas offering this Organic Colour System.
      </p>
      <BookButton href="#contact">Book your appointment today!</BookButton>
    </ColoredCol>
  </>
);
