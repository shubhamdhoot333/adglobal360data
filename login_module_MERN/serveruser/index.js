import Routes from "./routes/routes.js";
import express from "express";
import Connection from "./database/db.js";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

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
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", Routes);

Connection();

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
