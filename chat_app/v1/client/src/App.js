import "./App.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";
const socket = io.connect("http://localhost:8000");
function App() {
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messageReceive, setMessageReceive] = useState("");
  //create room
  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };
  //send message
  const sendMeaage = () => {
    //console.log("button clicked");
    socket.emit("send Message", { message, room });
  };

  useEffect(
    () => {
      //received message
      socket.on("received_message", (data) => {
        setMessageReceive(data.message);
      });
    }, // eslint-disable-next-line
    [socket]
  );
  return (
    <div className="App">
      <input
        placeholder="Enter room number here ...."
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      />
      <button onClick={joinRoom}>submit room </button>
      <input
        placeholder="Enter message here ...."
        onChange={(event) => {
          setMessage(event.target.value);
        }}
      />
      <button onClick={sendMeaage}>Send Meaage</button>
      <h4>Chat box</h4>
      <p> {messageReceive}</p>
    </div>
  );
}

export default App;
