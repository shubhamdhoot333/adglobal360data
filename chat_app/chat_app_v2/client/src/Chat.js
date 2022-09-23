import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
function Chat({ socket, name, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState("");
  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        auther: name,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);
  return (
    <>
      <div className="chat-window">
        <div className="chat-header">
          <p>Live chat</p>
        </div>
        <div className="chat-body">
          <ScrollToBottom className="message-container">
            {messageList &&
              messageList.map((value, index) => (
                <div
                  className="message"
                  key={index}
                  id={name === value.auther ? "you" : "other"}
                >
                  <div>
                    <div className="message-content">{value.message}</div>
                    <div className="message-meta">
                      <p id="time">{value.time}</p>
                      <p id="auther">{value.auther}</p>
                    </div>
                  </div>
                  {/* <h4>{value.message}</h4> */}
                </div>
              ))}
          </ScrollToBottom>
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            name="name"
            //   className="form-control"
            placeholder="Enter your message"
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
          />
          <button
            //   className="form-control my-2 btn btn-primary"
            type="Submit"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Chat;
