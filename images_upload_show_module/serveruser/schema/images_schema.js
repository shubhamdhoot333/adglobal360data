import mongoose from "mongoose";

//define schema
const profileSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
    required: true,
  },
});

const Image = mongoose.model("Image", profileSchema);

export default Image;
