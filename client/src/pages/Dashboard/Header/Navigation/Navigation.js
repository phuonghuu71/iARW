import React, { useContext, useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { SocketContext } from "../../../App.js";
import "./Navigation.scss";

function Navigation() {
  const [notifications, setNotifications] = useState([]);
  const { socket, setSocket } = useContext(SocketContext);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    socket?.on("getNotification", (data) => {
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  const { result } = JSON.parse(localStorage.getItem("profile"));

  return (
    <div className="flex items-center justify-between pt-2">
      <div className="flex items-center text-green-500">
        <h2 className="text-lg font-bold">iARW |&nbsp;</h2>
        <p className="font-semibold"> Ứng dụng truy xuất nông sản</p>
      </div>
      <div className="flex gap-x-6">
        {/* <div className="relative flex items-center">
          <div onClick={() => setPopup(!popup)}>
            <IoIosNotificationsOutline className="text-3xl" />
            <div className="absolute top-0 right-0 text-sm bg-red-500 rounded-full w-[12px] h-[12px] flex justify-center items-center text-white p-2">
              {notifications.length}
            </div>
          </div>
          {popup ? (
            <div className="noti-popup">
              <div className="flex justify-center">
                <button
                  className="px-4 py-2 text-white bg-green-500 rounded-sm"
                  onClick={() => setNotifications([])}
                >
                  Dọn thông báo
                </button>
              </div>

              {notifications.map((n) => {
                return <div className="mb-2">{n.type}</div>;
              })}
            </div>
          ) : null}
        </div> */}
        <div className="flex items-center gap-x-4">
          <p>{`${result.givenName}`}</p>
          <div className="w-8 h-8 overflow-hidden rounded-full">
            <img
              className="object-cover object-center w-full h-full"
              src={result.imageUrl}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
