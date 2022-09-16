import Image from "../schema/images_schema.js";
//import User from "../schema/customer-schema.js";
import jwt from "jsonwebtoken";
//import multer from "multer";
//images upload
export const setUserprofile = async (req, res) => {
  const token =
    req.cookies.jwtoken || req.headers.cookies || req.headers.jwtoken;
  const verifyToken = jwt.verify(token, "MYNAMEISSHUBHAMDHOOTFROMJODHPURS");
  const customer_id = verifyToken._id;

  // const file = req.file ? req.filename : null;
  const { filename } = req.file;
  console.log(filename);
  if (!filename) {
    return res
      .status(422)
      .json({ error: "plz filled the fields properly", flag: false });
  }
  //find email not present already
  try {
    //console.log(file);
    const newPhoto = new Image({ photo: filename, userId: customer_id });
    //console.log(newPhoto);
    await newPhoto.save();
    res.status(201).json({ message: "photo upload sucessfully" });
  } catch (error) {
    console.log(error);
  }
};

//get images
export const getPhotodata = async (req, res) => {
  const token =
    req.cookies.jwtoken || req.headers.cookies || req.headers.jwtoken;
  const verifyToken = jwt.verify(token, "MYNAMEISSHUBHAMDHOOTFROMJODHPURS");

  try {
    const user_data = await Image.find({
      user_id: verifyToken._id,
    });

    res.status(201).json(user_data);
  } catch (error) {
    console.log(error);
  }
};
