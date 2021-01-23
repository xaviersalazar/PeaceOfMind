import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

require("dotenv").config();

const app = express();
const PORT = 5000 || process.env.PORT;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@peaceofmindcluster.ea7su.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.use(cors(), bodyParser.json());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: "/graphql",
  },
});

server.applyMiddleware({ app });

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚡️ Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
