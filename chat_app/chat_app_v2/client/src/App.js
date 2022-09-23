import { useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Chat from "./Chat";
const socket = io.connect("http://localhost:8000");
function App() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [show, setShow] = useState(false);
  const joinRoom = () => {
    if (name !== "" && room !== "") {
      socket.emit("join_room", room);
      setShow(true);
    }
  };
  return (
    <>
      {!show ? (
        <div className="App">
          <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid ">
              <h4 className="navbar-brand ">Chat App</h4>
            </div>
          </nav>
          <div className=" my-4 py-5">
            <h4 className="text-center py-4">Join User</h4>
            <div className="container">
              <div className="row ">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                  <i className="fa fa-envelope px-2"></i>
                  <label style={{ fontFamily: "cursive" }}> Name</label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    className="form-control"
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="col-lg-4"></div>
              </div>
              <div className="row mt-4">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                  <i className="fa fa-eye px-2"></i>
                  <label style={{ fontFamily: "cursive" }}>Room Number</label>
                  <input
                    type="text"
                    onChange={(e) => setRoom(e.target.value)}
                    name="room"
                    className="form-control"
                    placeholder="Enter your room Number"
                  />
                </div>
                <div className="col-lg-4"></div>
              </div>

              <div className="row mt-3">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 d-grid gap-2 mx-auto">
                  {/* <Link
                onClick={(e) => (!name || !room ? e.preventDefault() : null)}
                to={`/chat/?name=${name}&room=${room}`}
              > */}
                  <button
                    className="form-control my-2 btn btn-primary"
                    type="Submit"
                    onClick={joinRoom}
                  >
                    Submit Here
                  </button>
                  {/* </Link> */}
                </div>
                <div className="col-lg-4"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row ">
            <div className="col-lg-4"></div>
            <div className="col-lg-4 my-5">
              <Chat socket={socket} name={name} room={room} />
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
