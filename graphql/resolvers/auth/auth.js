import User from "../../../models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

require("dotenv").config();

export const createUser = async (args) => {
  try {
    const { username, password } = args.userInput;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      throw new Error(`User ${username} already exists!`);
    }

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
  } catch (err) {
    throw err;
  }
};
