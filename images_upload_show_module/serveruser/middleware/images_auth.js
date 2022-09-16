import multer from "multer";

const storage = multer.diskStorage({
  destination: "./public/images",
  filename: function (req, file, cb) {
    // console.log(">>>>>>>>", file);
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage });

export default upload;
