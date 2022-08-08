import Home from "components/Home";
import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import "./App.css";

function App() {
  const [mess, setMess] = useState([]);
  const [id, setId] = useState();
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:9999", {
      transports: ["websocket"]
    });

    socket.current.on("getId", (data) => {
      setId(data);
    });

    socket.current.on("receive_message", (data) => {
      console.log("receive_message", data);
      setMess((oldMsgs) => [...oldMsgs, data]);
    });

    socket.current.on("private_message", (data) => {
      console.log("private_message", data);
      // setMess((oldMsgs) => [...oldMsgs, data]);
    });

    socket.current.on("joinedRoom", (data) => {
      console.log("joinedRoom", data);
    });

    return () => {
      socket.current.disconnect();
    };
  }, []);

  const sendMessage = (message) => {
    if (message !== null) {
      socket.current.emit("private", {
        id,
        message
      });
      // socket.current.emit("joinRoom", {
      //   room: "room1",
      //   id,
      //   message
      // });
    }
  };
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Home clientId={id} sendMessage={sendMessage} />
      </main>
    </div>
  );
}

export default App;
