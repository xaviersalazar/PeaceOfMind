import React from "react";
import { Col, NavLink } from "reactstrap";
import styled from "styled-components";

const MainContainer = styled.div`
  @media (min-width: 768px) {
    padding: 0 2rem;
  }

  @media (min-width: 992px) {
    padding: 0 5rem;
  }
`;

const ColoredCol = styled(Col)`
  background: ${(props) => (props.odd ? "#f3eff5" : "#fff")};
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
`;

const Hr = styled.hr`
  width: 50%;

  @media (min-width: 768px) {
    width: 25%;
  }
`;

export const InstagramFeed = () => null;
