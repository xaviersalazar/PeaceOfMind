import User from "../models/user";
import Service from "../models/service";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { isUndefined } from "lodash";

require("dotenv").config();

const resolvers = {
  Query: {
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username: username });

      if (!user) throw new Error(`Username ${username} does not exist`);

      const isPasswordValid = await bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) throw new Error("Password invalid");

      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

      return { token, password: null, ...user._doc };
    },
    verifyToken: async (_, { token }) => {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findOne({ _id: decoded.id });

      return { ...user._doc, password: null };
    },
    getService: async (_, { id }) => {
      const service = await Service.findById(id);

      if (!service) throw new Error(`Service with ID ${id} does not exist`);

      return service;
    },
  },
  Mutation: {
    createUser: async (_, { userInput }) => {
      const { username, password } = userInput;
      const existingUser = await User.findOne({ username });

      if (existingUser) throw new Error(`User ${username} already exists!`);

      const hashedPass = await bcrypt.hash(password, 10);

      const user = new User(
        {
          username,
          password: hashedPass,
        },
        (err) => {
          if (err) throw err;
        }
      );

      user.save();

      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

      return { token, password: null, ...user._doc };
    },
    createService: async (_, { serviceInput }) => {
      const { title, description, price } = serviceInput;
      const service = new Service(
        {
          title,
          description,
          price,
        },
        (err) => {
          if (err) throw err;
        }
      );

      service.save();

      return service;
    },
    updateService: async (_, { id, serviceInput }) => {
      const { title, description, price } = serviceInput;
      const update = Object.assign(
        {},
        isUndefined(title) ? null : { title },
        isUndefined(description) ? null : { description },
        isUndefined(price) ? null : { price }
      );

      const service = await Service.findOneAndUpdate({ _id: id }, update, {
        new: true,
      });

      return service;
    },
  },
};

export default resolvers;
