import express from "express";
import cors from "cors";
import http from "http";
import bodyParser from "body-parser";
import { Server } from "socket.io";

const app = express();

const port = process.env.PORT || 8000;
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json());
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    method: ["GET", "POST"],
    credentials: true,
  },
});

//connect with socket
io.on("connect", (socket) => {
  console.log(`new user connection: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`new user id ${socket.id} join the room ${data}`);
  });
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });
  //user disconnect
  socket.on("disconnect", () => {
    console.log(`user disconnection: ${socket.id}`);
  });
});
server.listen(port, () => {
  console.log(`server run on http://localhost:${port}`);
});
