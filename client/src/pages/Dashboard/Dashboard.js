import React, { useContext } from "react";
import { SocketContext } from "../App";
import Body from "./Body/Body";
import Header from "./Header/Header";

function Dashboard() {
  const { socket } = useContext(SocketContext);

  socket.emit("newUser", JSON.parse(localStorage.getItem("profile")));

  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

export default Dashboard;
