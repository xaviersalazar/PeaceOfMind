import React, { useState } from "react";
import { Col, Button } from "reactstrap";
import { GiftCardMoal } from "./GiftCardModal";
import styled from "styled-components";

const ColoredCol = styled(Col)`
  background: #ffffff;
  padding-top: 3rem;
  padding-bottom: 3rem;
  text-align: center;
`;

const GiftCardButton = styled(Button)`
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

export const HomeSupportLocal = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <ColoredCol xs={12}>
        <h1 className="text-center">Support your local businesses</h1>
        <Hr />
        <p className="text-center px-5">
          If you want, and are able to, to support them right now, buy a gift
          certificate from them, shop in their online stores, pre book your
          future appointments and check in on them from time to time. Not only
          us, but all small businesses. Together we can as a community overcome
          this in peace and unity. We love you all, you are not only friends but
          our family.
        </p>
        <GiftCardButton onClick={toggle}>
          Purchase about a gift card
        </GiftCardButton>
        <GiftCardMoal modal={modal} toggle={toggle} />
      </ColoredCol>
    </div>
  );
};
