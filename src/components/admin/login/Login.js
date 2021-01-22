import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Row } from "reactstrap";
import styled from "styled-components";

const Container = styled.div`
  background: linear-gradient(-45deg, #b3ffab, #12fff7);
  height: 100vh;
  width: 100vw;
`;

const FormContainer = styled.div`
  padding: 24px;
  margin: 0;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 85%;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.12) 0 0 70px 6px;

  @media (min-width: 576px) {
    width: 75%;
  }

  @media (min-width: 768px) {
    width: 65%;
  }

  @media (min-width: 992px) {
    width: 55%;
  }

  @media (min-width: 1200px) {
    width: 50%;
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

const LoginButton = styled(Button)`
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

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    e.persist();

    const { target } = e;
    const value = target.value;
    const { name } = target;

    if (name === "name") {
      setUsername(value);
    }

    if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <Container>
      <FormContainer>
        <Row>
          <Col className="text-center" xs={12}>
            <img
              className="mb-4"
              width={175}
              src="/resources/logo_black.png"
              alt="logo"
            />
          </Col>
          <Col xs={12}>
            <Form>
              <FormGroup className="py-3">
                <FormInput
                  name="username"
                  value={username}
                  onChange={(e) => handleChange(e)}
                  placeholder="Username"
                />
              </FormGroup>
              <FormGroup className="py-3">
                <FormInput
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => handleChange(e)}
                  placeholder="Password"
                />
              </FormGroup>
              <LoginButton type="primary">Log in</LoginButton>
            </Form>
          </Col>
        </Row>
      </FormContainer>
    </Container>
  );
};
