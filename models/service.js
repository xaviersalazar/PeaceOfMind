import mongoose, { Schema } from "mongoose";

const service = new Schema({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: String,
  },
});

export default mongoose.model("Service", service);
