import User from "../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

require("dotenv").config();

const resolvers = {
  Query: {
    async login(_, { username, password }) {
      const user = await User.findOne({ username: username });

      if (!user) throw new Error(`Username ${username} does not exist`);

      const isPasswordValid = await bcrypt.compareSync(password, user.password);

      if (!isPasswordValid) throw new Error("Password invalid");

      const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY);

      return { token, password: null, ...user._doc };
    },
    async verifyToken(_, { token }) {
      const decoded = jwt.verify(token, process.env.SECRET_KEY);
      const user = await User.findOne({ _id: decoded.id });

      return { ...user._doc, password: null };
    },
  },
  Mutation: {
    async createUser(_, { username, password }) {
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
  },
};

export default resolvers;
