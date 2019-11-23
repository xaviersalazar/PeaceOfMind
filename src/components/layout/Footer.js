import React, { Component } from "react";
import { Col, Row, FormGroup, Input, FormFeedback } from "reactstrap";
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

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      validate: {
        emailState: ""
      }
    };
  }

  validateEmail = e => {
    const emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { validate } = this.state;

    if (emailRex.test(e.target.value)) {
      validate.emailState = "has-success";
    } else {
      validate.emailState = "has-danger";
    }

    this.setState({ validate });
  };

  handleChange = e => {
    e.persist();

    const { target } = e;
    const value = target.value;
    const { name } = target;

    this.setState({
      [name]: value
    });
  };

  onSuccess = () => {
    toast("Thanks! We got your message. Someone will get back to you shortly", {
      type: toast.TYPE.SUCCESS
    });

    this.setState({
      name: "",
      email: "",
      message: "",
      validate: {
        emailState: ""
      }
    });
  };

  onError = () => {
    toast("Uh oh! Something went wrong. Please try again", {
      type: toast.TYPE.ERROR
    });
  };

  render() {
    const { name, email, message } = this.state;

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
            602 N Lower Broadway St Corpus Christi, TX 78401
          </p>
          <p className="p-0 mt-0">361-737-7813</p>
          <p>10% discount for all military!</p>
        </Col>

        <FormCol xs={12} md={6}>
          <NetlifyForm
            name="Contact Form"
            onSuccess={() => this.onSuccess()}
            onError={() => this.onError()}
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
                        onChange={e => this.handleChange(e)}
                        placeholder="Your name"
                      />
                    </FormGroup>
                    <FormGroup className="py-3">
                      <FormInput
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        valid={this.state.validate.emailState === "has-success"}
                        invalid={
                          this.state.validate.emailState === "has-danger"
                        }
                        onChange={e => {
                          this.validateEmail(e);
                          this.handleChange(e);
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
                        type="textarea"
                        name="message"
                        id="message"
                        value={message}
                        onChange={e => this.handleChange(e)}
                        placeholder="Got a question? Need to book an appointment? "
                      />
                    </FormGroup>
                    <SendButton type="submit" disabled={loading}>
                      Send a message!
                    </SendButton>
                  </div>
                }
              </div>
            )}
          </NetlifyForm>
        </FormCol>
      </Row>
    );
  }
}
