import { buildSchema } from "graphql";

export default buildSchema(`

type User {
  _id: ID!
  username: String!
  token: String!
}

input UserInput {
  username: String!
  password: String!
}

type RootQuery {
  login(username: String!, password: String!): User
  verifyToken(token: String!): User
}

type RootMutation {
  createUser(userInput: UserInput): User
}

schema {
  query: RootQuery
  mutation: RootMutation
}

`);
