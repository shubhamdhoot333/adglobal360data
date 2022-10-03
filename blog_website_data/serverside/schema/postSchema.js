import mongoose from "mongoose";

//define schema
const postSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
    required: true,
  },
  heading: { type: String, required: true },
  data: { type: String, required: true },
});

const Post = mongoose.model("post", postSchema);

export default Post;
