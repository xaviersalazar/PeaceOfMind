import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    token: String!
  }

  type Service {
    _id: ID!
    title: String
    description: String
    price: String
  }

  input UserInput {
    username: String!
    password: String!
  }

  input ServiceInput {
    title: String
    description: String
    price: String
  }

  type Query {
    login(username: String!, password: String!): User
    verifyToken(token: String!): User
    getService(id: ID!): Service
  }

  type Mutation {
    createUser(userInput: UserInput): User
    createService(serviceInput: ServiceInput): Service
    updateService(id: ID!, serviceInput: ServiceInput): Service
  }
`;

export default typeDefs;
