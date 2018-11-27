import React, { Component } from "react";
import {
  Col,
  Row,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button
} from "reactstrap";
import styled, { keyframes } from "styled-components";

const FormInput = styled(Input)`
  && {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    padding: 1.5rem;
    background: inherit;
    transition: 0.8s all;

    &:focus {
      background: inherit;
      border-top-color: none;
      border-left-color: none;
      border-right-color: none;
      border-bottom-color: #b3ffab;
      box-shadow: none;
    }
  }
`;

const SendButton = styled.button`
  && {
    display: block;
    width: 50%;
    margin: 0 auto;
    border-radius: 15px;
    border: none;
    font-size: 15px;
    background: linear-gradient(-45deg, #b3ffab, #12fff7);
    padding: 5px;
    transition: 0.8s all;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.12) 0 3px 13px 1px;
  }
`;

const TagLine = styled.p`
  && {
    font-weight: 400 !important;
    text-align: center;
  }
`;

export default class Footer extends Component {
  render() {
    return (
      <Row className="py-5" id="contact">
        <Col xs={12}>
          <h1 className="text-center pb-3">CONTACT US</h1>
        </Col>
        <Col xs={12} md={6} className="p-5">
          <TagLine>
            Open every day so we can work around your schedule because life
            isn’t always easy!
          </TagLine>
          <p className="mb-0">Our Hours:</p>
          <p className="p-0">Everyday @ 8:30AM - 9:00PM</p>
          <p className="p-0 m-0">
            <i className="far fa-building" />
            &nbsp;602 N Lower Broadway St Corpus Christi, TX 78401
          </p>
          <p className="p-0 mt-0">
            <i class="fas fa-phone" />
            &nbsp;361-737-7813
          </p>
          <p>
            <span role="img" aria-label="sheep">
              🇺🇸
            </span>
            10% discount for all military!
          </p>
        </Col>
        <Col xs={12} md={6} className="p-3">
          <Form>
            <FormGroup className="py-3">
              <FormInput
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
              />
            </FormGroup>
            <FormGroup className="py-3">
              <FormInput
                type="email"
                name="email"
                id="email"
                placeholder="Your email"
              />
            </FormGroup>
            <FormGroup className="py-3">
              <FormInput
                type="textarea"
                name="message"
                id="message"
                placeholder="Got a question?"
              />
            </FormGroup>
            <SendButton type="submit">Send a message!</SendButton>
          </Form>
        </Col>
      </Row>
    );
  }
}
