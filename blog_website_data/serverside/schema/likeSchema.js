import mongoose from "mongoose";
//define schema
const likeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  },
  data: { type: String, required: true },
});

const like = mongoose.model("like", likeSchema);

export default like;
