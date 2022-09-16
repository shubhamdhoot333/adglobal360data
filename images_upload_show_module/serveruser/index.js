import Routes from "./routes/routes.js";
import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import path from "path";
//import fileupload from "express-fileupload";

const app = express();
app.use(cookieParser());

dotenv.config();
const PORT = 8000;
//use for same port in browser
const corsOptions = {
  origin: true,
  credentials: true,
  ///..other options
};
//by using it we can show our images in frotend
app.use(express.static("./public/"));
app.use(cors(corsOptions));
//app.use(fileupload());
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", Routes);

Connection();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
