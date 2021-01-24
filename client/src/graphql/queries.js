import { gql } from "@apollo/client";

export const LOGIN = gql`
  query Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      _id
      token
      username
    }
  }
`;

export const VERIFY_TOKEN = gql`
  query VerifyToken($token: String!) {
    verifyToken(token: $token) {
      _id
      username
    }
  }
`;

export const GET_SERVICE = gql`
  query GetService($serviceInput: ServiceInput) {
    getService(serviceInput: $serviceInput) {
      _id
      title
      description
      price
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($userInput: UserInput) {
    createUser(userInput: $userInput) {
      _id
      token
      username
    }
  }
`;

export const CREATE_SERVICE = gql`
  mutation CreateService($serviceInput: ServiceInput) {
    createService(serviceInput: $serviceInput) {
      _id
      title
      description
      price
    }
  }
`;

export const UPDATE_SERVICE = gql`
  mutation UpdateService($id: ID!, $serviceInput: ServiceInput) {
    updateService(id: $id, serviceInput: $serviceInput) {
      _id
      title
      description
      price
    }
  }
`;
