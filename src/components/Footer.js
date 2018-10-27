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
import styled from "styled-components";

const FormInput = styled(Input)`
  && {
    border-top: none;
    border-left: none;
    border-right: none;
    border-radius: 0;
    padding: 1.5rem;
    background: inherit;
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
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
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
      <Row className="py-5">
        <Col xs={12}>
          <h1 className="text-center pb-3">CONTACT US</h1>
        </Col>
        <Col xs={12} md={6} className="p-5">
          <TagLine>
            Open every day so we can work around your schedule because life
            isn’t always easy!
          </TagLine>
          <p className="mb-0">Our Hours:</p>
          <p className="p-0 m-0">Monday - Saturday: 8:30AM - 9:00PM</p>
          <p className="p-0 mt-0">Sunday: By appointment only</p>
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
        <Col xs={12} md={6} className="-3">
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
