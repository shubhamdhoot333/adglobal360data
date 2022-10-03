import Post from "../schema/postSchema.js";
import jwt from "jsonwebtoken";
import Customer from "../schema/customer-schema.js";
import Comment from "../schema/commentSchema.js";
import Like from "../schema/likeSchema.js";

export const setPost = async (req, res) => {
  const token =
    req.cookies.jwtoken || req.headers.cookies || req.headers.jwtoken;
  const verifyToken = jwt.verify(token, "MYNAMEISSHUBHAMDHOOTFROMJODHPURS");
  const customer_id = verifyToken._id;

  // const file = req.file ? req.filename : null;
  const { filename } = req.file;
  const { data, heading } = req.body;
  console.log(filename);
  if (!filename) {
    return res
      .status(422)
      .json({ error: "plz filled the fields properly", flag: false });
  }
  //find email not present already
  try {
    //console.log(file);
    const newPost = new Post({
      photo: filename,
      userId: customer_id,
      heading,
      data,
    });
    //console.log(newPhoto);
    await newPost.save();
    res.status(201).json({ message: "post upload sucessfully" });
  } catch (error) {
    console.log(error);
  }
};

//get all post
export const getPostdata = async (req, res) => {
  try {
    const Post_data = await Post.find();
    // console.log(Post_data);
    res.status(201).json(Post_data);
  } catch (error) {
    console.log(error);
  }
};

//get one post
export const getPost = async (req, res) => {
  try {
    const { id } = req.body;
    //console.log(">>>>>", id);
    //console.log(">>>>>", req.body);
    const Post_data = await Post.find({ _id: id });
    //console.log(Post_data);
    res.status(201).json(Post_data);
  } catch (error) {
    console.log(error);
  }
};
//delete one post
export const deletePost = async (req, res) => {
  try {
    // const { id } = req.body;
    // console.log(">>>>>", id);
    // console.log(">>>>>", req.params.id);
    const Post_data = await Post.deleteOne({ id: req.params.id });

    // console.log(Post_data);
    res.status(201).json(Post_data);
  } catch (error) {
    console.log(error);
  }
};

//get all post
export const getPostUserdata = async (req, res) => {
  try {
    const token =
      req.cookies.jwtoken || req.headers.cookies || req.headers.jwtoken;
    const verifyToken = jwt.verify(token, "MYNAMEISSHUBHAMDHOOTFROMJODHPURS");
    const customer_id = verifyToken._id;

    const Post_data = await Post.find({ userId: customer_id });
    // console.log(Post_data);
    res.status(201).json(Post_data);
  } catch (error) {
    console.log(error);
  }
};
//comment api

export const getComment = async (req, res) => {
  try {
    const token =
      req.cookies.jwtoken || req.headers.cookies || req.headers.jwtoken;
    const verifyToken = jwt.verify(token, "MYNAMEISSHUBHAMDHOOTFROMJODHPURS");
    const customer_id = verifyToken._id;
    // console.log(customer_id);
    const Post_data = await Customer.find({ _id: customer_id });
    //console.log(Post_data[0].name);
    const username = Post_data[0].name;
    const { data, id } = req.body;
    //console.log(req.body);
    const newComment = new Comment({
      name: username,
      userId: customer_id,
      comment: data,
      postId: id,
    });
    //console.log(newPhoto);
    await newComment.save();
    res.status(201).json({ message: "comment  post sucessfully" });
  } catch (error) {
    console.log(error);
  }
};
//get all post
export const getusercomment = async (req, res) => {
  try {
    const { id } = req.body;
    //console.log(id);
    const comment_data = await Comment.find({ postId: id });
    // console.log(Post_data);
    res.status(201).json(comment_data);
  } catch (error) {
    console.log(error);
  }
};
//like post api
export const userLike = async (req, res) => {
  const token =
    req.cookies.jwtoken || req.headers.cookies || req.headers.jwtoken;
  const verifyToken = jwt.verify(token, "MYNAMEISSHUBHAMDHOOTFROMJODHPURS");
  const c_id = verifyToken._id;
  try {
    const { data, id } = req.body;
    //console.log(data, id);
    const orders = await Like.findOne({ postId: id, userId: c_id });
    // console.log("before>>", orders);
    if (orders === null) {
      const res = new Like({ postId: id, userId: c_id, data });
      const orders1 = await res.save();
      // console.log("after>>", orders1);
    } else {
      const orders1 = await Like.findOneAndUpdate(
        { postId: id, userId: c_id },
        { data }
      );
      // console.log("after>>", orders1);
    }
  } catch (error) {
    console.log(error);
  }
};

//get all post
export const getcountlike = async (req, res) => {
  try {
    const { id } = req.body;
    //console.log(id);
    const count_data = await Like.find({
      postId: id,
      data: "like",
    }).countDocuments();
    //console.log(count_data);
    res.status(201).json(count_data);
  } catch (error) {
    console.log(error);
  }
};
//get all post
export const getcountUnlike = async (req, res) => {
  try {
    const { id } = req.body;
    //console.log(id);
    const count_data = await Like.find({
      postId: id,
      data: "unlike",
    }).countDocuments();
    //console.log(count_data);
    res.status(201).json(count_data);
  } catch (error) {
    console.log(error);
  }
};
