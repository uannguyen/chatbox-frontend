import { useState } from "react";
import Sidebar from "./sidebar";

const Home = (props: any) => {
  const { clientId, sendMessage } = props;
  const [message, setMessage] = useState("");

  const handlesSendMessage = () => {
    sendMessage(message);
    setMessage("");
  };

  const handlePressKeyEnter = (e: any) => {
    if (e.keyCode === 13) handlesSendMessage();
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <div className="message-content">
          <p className="themselves-message">The WebSockets</p>
          <p className="yourself-message">
            The WebSockets module is platform-agnostic
          </p>
          <p className="yourself-message">you can bring your own library</p>
          <p className="yourself-message">
            The socket.io package is wrapped in an IoAdapter class. What if you
            would like to enhance the basic functionality of the adapter? For
            instance, your technical requirements require a capability to
            broadcast events across multiple load-balanced instances of your web
            service.
          </p>
          <p className="themselves-message">The WebSockets</p>
        </div>
        <div className="typing-wrapper">
          <textarea
            className="message-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write a message ..."
          />
          <button
            type="button"
            className="send-btn"
            onClick={handlesSendMessage}
            onKeyDown={(e) => handlePressKeyEnter(e)}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
