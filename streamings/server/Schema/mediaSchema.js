import mongoose from "mongoose";
//define schema
const mediaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  videos: [{ type: String }],
});

//model

const media = mongoose.model("media", mediaSchema);

export default media;
