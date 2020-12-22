import React, { Component, useState } from "react";
import { Col, Row, FormGroup, Input, FormFeedback } from "reactstrap";
import { NavLink } from "reactstrap";
import NetlifyForm from "react-netlify-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import styled from "styled-components";

const FormCol = styled(Col)`
  && {
    padding: 2.75rem;

    @media (min-width: 768px) {
      padding: 1rem 3rem 1rem 1rem;
    }
  }
`;

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
    border-radius: 8px;
    padding: 0.5rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.12) 0 3px 13px 1px;
    font-size: 12px;
    background: linear-gradient(-45deg, #b3ffab, #12fff7);
    border: none;
    color: #3d3d3d;
    text-decoration: none;
    width: 100%;
    margin: 0 auto;
    transition: 0.5s all;
    position: relative;
  }
`;

const TagLine = styled.p`
  && {
    font-weight: 400 !important;
  }
`;

const InstaLink = styled(NavLink)`
  && {
    padding: 0 1rem;
    color: #0984e3;
  }
`;

export const Footer = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [validate, setValidate] = useState("");

  const validateEmail = (e) => {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRex.test(e.target.value)) {
      setValidate("has-success");
    } else {
      setValidate("has-danger");
    }
  };

  const handleChange = (e) => {
    e.persist();

    const { target } = e;
    const value = target.value;
    const { name } = target;

    if (name === "name") {
      setName(value);
    }

    if (name === "email") {
      setEmail(value);
    }

    if (name === "message") {
      setMessage(value);
    }
  };

  const onSuccess = () => {
    toast("Thanks! We got your message. Someone will get back to you shortly", {
      type: toast.TYPE.SUCCESS,
    });

    setName("");
    setEmail("");
    setMessage("");
    setValidate("");
  };

  const onError = () => {
    toast("Uh oh! Something went wrong. Please try again", {
      type: toast.TYPE.ERROR,
    });
  };

  return (
    <Row className="py-5" id="contact">
      <Col xs={12}>
        <h1 className="text-center pb-3">CONTACT US</h1>
      </Col>
      <Col xs={12} md={6} className="p-5">
        <TagLine>
          Open every day so we can work around your schedule because life isn’t
          always easy!
        </TagLine>
        <p className="mb-0">Our Hours:</p>
        <p className="p-0 mb-0">Everyday @ 8:30AM - 9:00PM</p>
        <p className="p-0">We also travel to you if needed!</p>
        <p className="p-0 m-0">
          602 N Lower Broadway St Corpus Christi, TX 78401
        </p>
        <p className="p-0 mt-0">361-737-7813</p>
        <p>10% discount for all military!</p>
        <p className="d-inline">Follow us </p>
        <InstaLink
          className="d-inline p-0"
          href="https://www.instagram.com/peaceofmindmassage/"
          target="_blank"
        >
          @peaceofmindmassage
        </InstaLink>
      </Col>

      <FormCol xs={12} md={6}>
        <NetlifyForm
          name="Contact Form"
          onSuccess={onSuccess}
          onError={onError}
        >
          {({ loading, error, success }) => (
            <>
              {
                <>
                  <FormGroup className="py-3">
                    <FormInput
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => handleChange(e)}
                      placeholder="Your name"
                    />
                  </FormGroup>
                  <FormGroup className="py-3">
                    <FormInput
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      valid={validate === "has-success"}
                      invalid={validate === "has-danger"}
                      onChange={(e) => {
                        validateEmail(e);
                        handleChange(e);
                      }}
                      placeholder="Your email"
                    />
                    <FormFeedback valid>That's a valid email</FormFeedback>
                    <FormFeedback>
                      Looks like there is an issue with your email. Please input
                      a correct email.
                    </FormFeedback>
                  </FormGroup>
                  <FormGroup className="py-3">
                    <FormInput
                      type="textarea"
                      name="message"
                      id="message"
                      value={message}
                      onChange={(e) => handleChange(e)}
                      placeholder="Got a question? Need to book an appointment? "
                    />
                  </FormGroup>
                  <SendButton type="submit" disabled={loading}>
                    Send a message!
                  </SendButton>
                </>
              }
            </>
          )}
        </NetlifyForm>
      </FormCol>
    </Row>
  );
};
