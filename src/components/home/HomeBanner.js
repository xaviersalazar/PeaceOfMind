import React, { Component } from "react";
import { Col } from "reactstrap";
import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

const ColoredCol = styled(Col)`
  background: ${props => (props.odd ? "#f3eff5" : "#fff")};
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
`;

const ServiceButton = styled(RouterNavLink)`
  && {
    font-size: 10px;
    background: linear-gradient(-45deg, #b3ffab, #12fff7);
    border-radius: 15px;
    border: none;
    color: #3d3d3d;
    padding: 0.5rem 3rem;
    text-decoration: none;
    width: 25%;
    margin: 0 auto;
    color: #000;
    transition: 0.5s all;
  }

  &:hover {
    background-color: inherit !important;
    box-shadow: rgba(0, 0, 0, 0.12) 0 3px 13px 1px;
    color: #3d3d3d !important;
  }
`;

export default class HomeBanner extends Component {
  render() {
    return (
      <div>
        <ColoredCol xs={12} odd={true}>
          <h1 className="text-center">We are now a certified Salon! 💇‍</h1>
          <p className="text-center px-5">
            We are a Dyson inspired Salon and we are sticking to our organic
            concept in every aspect. We strongly believe in being green and an
            environmentally conscious business. In saying that, we are bringing
            an all organic hair coloring line called Organic Colour Systems from
            the United Kingdom. We will be the only Salon in Corpus Christi and
            throughout the State of Texas offering this Organic Colour System.
          </p>
          <ServiceButton to="/salon/about">Learn More</ServiceButton>
        </ColoredCol>
        <ColoredCol xs={12} odd={false}>
          <h1 className="text-center">Massage Therapy &amp; Natural Healing</h1>
          <p className="text-center px-5">
            Come in today for a Singles Massage Session or a Couples Discounted
            Massage Packet. We use all organic massage products using plants,
            fresh herbs and oils. We are unlike your everyday Day Spa. We are a
            private practice not corporate. We cater to just you when you
            arrive. We help ease all your aches and pains helping you find true
            Peace Of Mind.
          </p>
        </ColoredCol>
      </div>
    );
  }
}
