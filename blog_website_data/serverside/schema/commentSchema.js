import mongoose from "mongoose";
//define schema
const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
    required: true,
  },
  comment: { type: String, required: true },
});

const Comment = mongoose.model("Comment", commentSchema);

export default Comment;
