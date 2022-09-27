import express from "express";
import cors from "cors";
import Connection from "./database/db.js";
import Router from "./routes/media.js";
const app = express();
Connection();
const PORT = 8000;

const corsOptions = {
  origin: true,
  credentials: true,
  ///..other options
};
app.use(express.static("./public/"));
app.use(cors(corsOptions));
app.use("/", Router);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
