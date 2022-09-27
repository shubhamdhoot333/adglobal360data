import express from "express";
import { getvideo, setvideo } from "../cotroller/controller.js";
import multer from "multer";
import fs from "fs";
import path from "path";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync("public")) {
      fs.mkdirSync("public");
    }
    if (!fs.existsSync("public/video")) {
      fs.mkdirSync("public/video");
    }
    cb(null, "public/video");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if (ext !== ".mkv" && ext !== ".mp4") {
      return cb(new Error("only video allow"));
    }
    cb(null, true);
  },
});
const router = express.Router();
router.get("/all", getvideo);
router.post(
  "/create",
  upload.fields([{ name: "videos", maxCount: 5 }]),
  setvideo
);
export default router;
