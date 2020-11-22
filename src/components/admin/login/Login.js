import React from "react";
import { Row, Col, Form, Input, Button, Image } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import "../Admin.css"
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

const FormUserIcon = styled(UserOutlined)`
  color: rgba(0,0,0,.25);
`;

const FormPasswordIcon = styled(LockOutlined)`
  color: rgba(0,0,0,.25);
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
  return (
    <Container>
      <FormContainer>
        <Row>
          <Col className="text-center" span={24}>
            <Image className="mb-4" width={175} src="/resources/logo_black.png" />
          </Col>
          <Col span={24}>
            <Form labelCol={24} wrapperCol={24} name="login">
              <Form.Item name="username">
                <Input placeholder="Username" prefix={<FormUserIcon />} />
              </Form.Item>
              <Form.Item name="password">
                <Input placeholder="Password" prefix={<FormPasswordIcon />} />
              </Form.Item>
              <Form.Item>
                <LoginButton type="primary">
                  Log in
                </LoginButton>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </FormContainer>
    </Container>
  )
}