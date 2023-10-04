import React, { useContext, useEffect, useState } from "react";

import { AiOutlineSend } from "react-icons/ai";
import { SocketContext } from "../../../../App";

import ScrollToBottom from "react-scroll-to-bottom";

function Chat() {
  const { socket } = useContext(SocketContext);
  const [users, setUsers] = useState([]);

  const { result } = JSON.parse(localStorage.getItem("profile"));

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: "common",
        author: result.givenName,
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
    socket.emit("join_room", "common");

    socket.on("receive_message", (data) => {
      console.log(data);

      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("getUsers", (data) => {
      const newSet = data.filter(
        (value, index, self) =>
          self.findIndex((v) => v.user.result._id === value.user.result._id) ===
          index
      );

      setUsers(newSet);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <div className="flex justify-between w-full h-full p-4 gap-x-4">
      <div className="w-[80%] h-full bg-white rounded-md shadow-sm p-4 flex flex-col">
        <h2 className="h2-text">SẢNH CHAT</h2>

        <ScrollToBottom className="mb-4 overflow-y-hidden grow">
          {messageList
            // .filter(
            //   (value, index, self) =>
            //     self.findIndex((v) => v.author === value.author) === index
            // )
            .map((messageContent, index) => {
              return (
                <div
                  className={`flex flex-col justify-center ${
                    messageContent.author === result.givenName
                      ? "items-end"
                      : "items-start"
                  } mb-4 ml-2 mr-6`}
                  key={index}
                  id={
                    result.givenName === messageContent.author ? "you" : "other"
                  }
                >
                  <div className="flex mb-1 gap-x-1">
                    <p className="text-sm text-gray-500 " id="author">
                      {messageContent.author}
                    </p>
                    <p className="text-sm italic text-gray-500" id="time">
                      {messageContent.time}
                    </p>
                  </div>
                  <div
                    className={`bg-${
                      messageContent.author === result.givenName
                        ? "green"
                        : "blue"
                    }-500 rounded-full px-6 py-2 text-white`}
                  >
                    <p>{messageContent.message}</p>
                  </div>
                </div>
              );
            })}
        </ScrollToBottom>

        <div className="flex items-center w-full h-12 pl-4 pr-1 mt-auto bg-gray-200 rounded-full gap-x-10">
          <input
            type="text"
            value={currentMessage}
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
            onKeyPress={(event) => {
              event.key === "Enter" && sendMessage();
            }}
            placeholder="Nhập nội dung chat"
            className="w-full text-gray-500 bg-gray-200 outline-none"
          />
          <button
            onClick={sendMessage}
            className="p-3 text-lg font-bold text-white bg-green-500 rounded-full shadow-lg"
          >
            <AiOutlineSend />
          </button>
        </div>
      </div>
      <div className="w-[20%] h-full bg-white rounded-md shadow-sm p-4">
        <h2 className="h2-text">DANH SÁCH ONLINE</h2>
        {users?.map((user, index) => {
          return (
            <div className="flex flex-col items-end" key={index}>
              <p className="mr-3">{`${user.user.result.role}`}</p>
              <div className="flex items-center justify-end p-2 mb-4 rounded-md cursor-pointer gap-x-4 hover:bg-gray-200">
                <p>{`${user.user.result.givenName}`}</p>
                <div className="w-10 h-10 overflow-hidden rounded-full">
                  <img
                    className="object-cover w-full h-full"
                    src={`${user.user.result.imageUrl}`}
                    alt=""
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chat;
