import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    token: String!
  }

  input UserInput {
    username: String!
    password: String!
  }

  type Query {
    login(username: String!, password: String!): User
    verifyToken(token: String!): User
  }

  type Mutation {
    createUser(userInput: UserInput): User
  }
`;

export default typeDefs;
