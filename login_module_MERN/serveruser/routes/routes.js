import express from "express";
import {
  addUser,
  getUser,
  getUserdata,
} from "../controller/consumer-controller.js";
import Authenticate from "../middleware/authenticate.js";

const router = express.Router();
router.post("/register", addUser);
router.post("/login", getUser);
router.post("/forgot", getUserdata);

router.get("/about", Authenticate, (req, res) => {
  console.log("hello my about");
  res.send("about page");
});

export default router;
