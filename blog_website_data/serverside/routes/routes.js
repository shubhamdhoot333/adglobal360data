import express from "express";
import {
  addUser,
  getUser,
  getUserdata,
} from "../controller/consumer-controller.js";
import {
  setPost,
  getPostdata,
  getPost,
  deletePost,
  getPostUserdata,
  getComment,
  getusercomment,
  userLike,
  getcountlike,
  getcountUnlike,
} from "../controller/image_controller.js";
import Authenticate from "../middleware/authenticate.js";
import upload from "../middleware/image_auth.js";

const router = express.Router();
router.post("/register", addUser);
router.post("/login", getUser);
router.post("/forgot", getUserdata);
router.get("/getpost", getPostdata);

router.post("/countlike", getcountlike);
router.post("/countunlike", getcountUnlike);
router.post("/usercomment", getusercomment);
router.get("/getpostUser", getPostUserdata);
router.post("/postdata", getPost);
router.post("/comment", getComment);
router.delete("/deletepost/:id", deletePost);
router.post("/upload", Authenticate, upload.single("file"), setPost);

router.put("/userLike", userLike);

router.get("/about", Authenticate, (req, res) => {
  console.log("hello my about");
  res.send("about page");
});

export default router;
