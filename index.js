import express from "express";
import bodyParser from "body-parser";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose";
import cors from "cors";
import schema from "./graphql/schema";
import resolvers from "./graphql/resolvers";

require("dotenv").config();

const app = express();
const PORT = 5000 || process.env.PORT;
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@peaceofmindcluster.ea7su.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

app.use(cors(), bodyParser.json());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

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
