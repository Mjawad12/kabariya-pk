import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  review: String,
  image: String,
  rating: Number,
  phone: String,
  email: String,
  designation: String,
});

export default mongoose.models.Review || mongoose.model("Review", schema);
