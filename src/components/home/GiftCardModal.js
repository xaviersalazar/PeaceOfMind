import React, { useState } from "react";
import {
  Col,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Input,
  FormFeedback
} from "reactstrap";
import NetlifyForm from "react-netlify-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import styled from "styled-components";

const FormCol = styled(Col)`
  && {
    padding: 1rem;
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
    transition: 0.5s all;
    position: relative;
  }
`;

const CancelButton = styled.button`
  && {
    border-radius: 8px;
    padding: 0.5rem 2rem;
    box-shadow: rgba(0, 0, 0, 0.12) 0 3px 13px 1px;
    font-size: 12px;
    background: #f3eff5;
    border: none;
    color: #3d3d3d;
    text-decoration: none;
    width: 100%;
    transition: 0.5s all;
    position: relative;
  }
`;

export const GiftCardMoal = ({ ...props }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [giftName, setGiftName] = useState("");
  const [giftAmount, setGiftAmount] = useState("");
  const [validate, setValidate] = useState({ emailState: "" });

  const validateEmail = e => {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (emailRex.test(e.target.value)) {
      setValidate({ emailState: "has-success" });
    } else {
      setValidate({ emailState: "has-danger" });
    }
  };

  const handleChange = e => {
    e.persist();

    const { target } = e;
    const value = target.value;
    const { name } = target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "phone") {
      setPhone(value);
    } else if (name === "giftName") {
      setGiftName(value);
    } else if (name === "giftAmount") {
      setGiftAmount(value);
    }
  };

  const onSuccess = () => {
    toast(
      "Thank you! We'll get back with you shortly with a confirmation about your Gift Card",
      {
        type: toast.TYPE.SUCCESS
      }
    );

    setName("");
    setEmail("");
    setPhone("");
    setGiftName("");
    setGiftAmount("");
    setValidate({ emailState: "" });

    props.toggle();
  };

  const onError = () => {
    toast("Uh oh! Something went wrong. Please try again", {
      type: toast.TYPE.ERROR
    });
  };

  return (
    <div>
      <Modal isOpen={props.modal} toggle={props.toggle}>
        <ModalHeader toggle={props.toggle}>Gift Card</ModalHeader>
        <ModalBody>
          <FormCol xs={12}>
            <NetlifyForm
              name="Gift Card Form"
              onSuccess={() => onSuccess()}
              onError={() => onError()}
            >
              {({ loading, error, success }) => (
                <div>
                  {
                    <div>
                      <FormGroup className="py-3">
                        <FormInput
                          type="text"
                          name="name"
                          id="name"
                          value={name}
                          onChange={e => handleChange(e)}
                          placeholder="Your name"
                        />
                      </FormGroup>
                      <FormGroup className="py-3">
                        <FormInput
                          type="email"
                          name="email"
                          id="email"
                          value={email}
                          valid={validate.emailState === "has-success"}
                          invalid={validate.emailState === "has-danger"}
                          onChange={e => {
                            validateEmail(e);
                            handleChange(e);
                          }}
                          placeholder="Your email"
                        />
                        <FormFeedback valid>That's a valid email</FormFeedback>
                        <FormFeedback>
                          Looks like there is an issue with your email. Please
                          input a correct email.
                        </FormFeedback>
                      </FormGroup>
                      <FormGroup className="py-3">
                        <FormInput
                          type="text"
                          name="phone"
                          id="phone"
                          value={phone}
                          onChange={e => handleChange(e)}
                          placeholder="Your phone number"
                        />
                      </FormGroup>
                      <FormGroup className="py-3">
                        <FormInput
                          type="text"
                          name="giftName"
                          id="giftName"
                          value={giftName}
                          onChange={e => handleChange(e)}
                          placeholder="Name of person receiving Gift Card"
                        />
                      </FormGroup>
                      <FormGroup className="py-3">
                        <FormInput
                          type="text"
                          name="giftAmount"
                          id="giftAmount"
                          value={giftAmount}
                          onChange={e => handleChange(e)}
                          placeholder="Amount on Gift Card"
                        />
                      </FormGroup>
                      <Row className="mt-4">
                        <Col xs={12} md={6} className="mb-3">
                          <SendButton type="submit" disabled={loading}>
                            Send
                          </SendButton>
                        </Col>
                        <Col xs={12} md={6}>
                          <CancelButton onClick={props.toggle}>
                            Cancel
                          </CancelButton>
                        </Col>
                      </Row>
                    </div>
                  }
                </div>
              )}
            </NetlifyForm>
          </FormCol>
        </ModalBody>
      </Modal>
    </div>
  );
};
