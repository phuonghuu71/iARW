import React, { useState, useEffect, useContext } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { GiFruitBowl } from "react-icons/gi";
import { AiOutlineScan, AiFillWechat } from "react-icons/ai";
import { MdSupervisorAccount } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
import Item, { Icon } from "./Item";
import { useDispatch } from "react-redux";
import { SocketContext } from "../../../App";

function Sidebar({ toggleSidebar, setToggleSidebar }) {
  const [activeItem, setActiveItem] = useState(false);

  const dispatch = useDispatch();

  const { socket } = useContext(SocketContext);

  useEffect(() => {
    if (!toggleSidebar && activeItem) {
      setActiveItem(!activeItem);
    }
  }, [toggleSidebar]);

  const { result } = JSON.parse(localStorage.getItem("profile"));

  console.log(result);

  const logout = async () => {
    await socket.emit("logout", result._id);

    dispatch({ type: "LOGOUT" });
  };

  return (
    <div
      className={`h-full p-3 ${
        toggleSidebar
          ? "translate-x-0"
          : "2xl:-translate-x-[12rem] xl:-translate-x-[11.5rem]"
      } fixed z-20 left-0 w-2/12 bg-white border border-solid border-y-0 border-l-0 border-r-[1px] border-gray-200 transition-all duration-300`}
    >
      <div className="w-full py-2">
        <div className="flex items-center justify-between">
          <div className={`z-0 order-1`}>
            <h2 className="text-xl font-bold text-green-500">MENU</h2>
          </div>
          <div className="z-10 order-2 mr-2 cursor-pointer">
            <HiMenuAlt1
              className="text-3xl text-green-500 "
              onClick={() => {
                setToggleSidebar(!toggleSidebar);
              }}
            />
          </div>
        </div>
      </div>

      <br />

      <Item
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
        link={"/dashboard/"}
        title={"TRANG CHỦ"}
      >
        <Icon>
          <AiFillHome className="text-3xl text-green-500" />
        </Icon>
      </Item>

      {result?.role === "user" ? (
        <Item
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
          link={"/dashboard/product-manager"}
          title={"QUẢN LÝ NÔNG SẢN"}
        >
          <Icon>
            <GiFruitBowl className="text-3xl text-green-500" />
          </Icon>
        </Item>
      ) : null}

      {result?.role === "admin" ? (
        <div>
          <Item
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
            link={"/dashboard/product-approval"}
            title={"DUYỆT NÔNG SẢN"}
          >
            <Icon>
              <AiOutlineScan className="text-3xl text-green-500" />
            </Icon>
          </Item>

          <Item
            toggleSidebar={toggleSidebar}
            setToggleSidebar={setToggleSidebar}
            link={"/dashboard/account-manager"}
            title={"QUẢN LÝ TÀI KHOẢN"}
          >
            <Icon>
              <MdSupervisorAccount className="text-3xl text-green-500" />
            </Icon>
          </Item>
        </div>
      ) : null}

      <Item
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
        link={"/dashboard/chat"}
        title={"CHAT"}
      >
        <Icon>
          <AiFillWechat className="text-3xl text-green-500" />
        </Icon>
      </Item>

      <div onClick={logout}>
        <Item
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
          link={"/"}
          title={"ĐĂNG XUẤT"}
        >
          <Icon>
            <ImExit className="text-3xl text-green-500" />
          </Icon>
        </Item>
      </div>
    </div>
  );
}

export default Sidebar;
