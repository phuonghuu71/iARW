import React, { useState, useEffect } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { GiFruitBowl } from "react-icons/gi";
import { AiOutlineScan } from "react-icons/ai";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { MdSupervisorAccount } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

function Sidebar({ toggleSidebar, setToggleSidebar }) {
  const [activeItem, setActiveItem] = useState(false);

  useEffect(() => {
    if (!toggleSidebar && activeItem) {
      setActiveItem(!activeItem);
    }
  }, [toggleSidebar]);

  return (
    <div
      className={`h-full p-3 ${
        toggleSidebar
          ? "translate-x-0"
          : "2xl:-translate-x-[15.5rem] xl:-translate-x-[11.5rem]"
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

      <div className="w-full py-2 transition-all duration-200 rounded-lg cursor-pointer hover:bg-gray-100 mb-2">
        <div
          className="flex items-center justify-between"
          onClick={() => {
            if (!toggleSidebar) {
              setToggleSidebar(!toggleSidebar);
            }
          }}
        >
          <div className="flex items-center justify-start order-1">
            <a href="/dashboard/">
              <h2 className="text-sm font-bold text-green-500 ml-3">
                TRANG CHỦ
              </h2>
            </a>
          </div>

          <div className="z-10 flex items-center order-3 float-left mr-2 min-h-fit min-w-fit">
            <AiFillHome className="text-3xl text-green-500" />
          </div>
        </div>
      </div>

      <div className="w-full py-2 transition-all duration-200 rounded-lg cursor-pointer hover:bg-gray-100 mb-2">
        <div>
          <div
            className="flex items-center justify-between"
            onClick={() => {
              setActiveItem(!activeItem);
              if (!toggleSidebar) {
                setToggleSidebar(!toggleSidebar);
              }
            }}
          >
            <div className="flex items-center justify-start order-1">
              <BsChevronRight
                className={`ml-2 mr-[2px] text-xl font-bold text-green-500 fast-animation ease-in-out ${
                  activeItem ? "rotate-90" : "rotate-0"
                }`}
              />
              <h2 className="text-sm font-bold text-green-500">
                QUẢN LÝ NÔNG SẢN
              </h2>
            </div>

            <div className="z-10 flex items-center order-3 float-left mr-2 min-h-fit min-w-fit">
              <GiFruitBowl className="text-3xl text-green-500" />
            </div>
          </div>

          <ul
            className={`${
              !activeItem ? "h-0" : "h-14"
            } overflow-hidden fast-animation ease-in-out mx-4`}
          >
            <li className="p-2 mt-2 ml-4 text-sm font-semibold text-green-500 rounded-lg hover:bg-gray-300">
              <a href="/dashboard/product-manager">Danh sách nông sản</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full py-2 transition-all duration-200 rounded-lg cursor-pointer hover:bg-gray-100 mb-2">
        <div>
          <div
            className="flex items-center justify-between"
            onClick={() => {
              setActiveItem(!activeItem);
              if (!toggleSidebar) {
                setToggleSidebar(!toggleSidebar);
              }
            }}
          >
            <div className="flex items-center justify-start order-1">
              <BsChevronRight
                className={`ml-2 mr-[2px] text-xl font-bold text-green-500 fast-animation ease-in-out ${
                  activeItem ? "rotate-90" : "rotate-0"
                }`}
              />
              <h2 className="text-sm font-bold text-green-500">
                DUYỆT NÔNG SẢN
              </h2>
            </div>

            <div className="z-10 flex items-center order-3 float-left mr-2 min-h-fit min-w-fit">
              <AiOutlineScan className="text-3xl text-green-500" />
            </div>
          </div>

          <ul
            className={`${
              !activeItem ? "h-0" : "h-14"
            } overflow-hidden fast-animation ease-in-out mx-4`}
          >
            <li className="p-2 mt-2 ml-4 text-sm font-semibold text-green-500 rounded-lg hover:bg-gray-300">
              <a href="/dashboard/product-approval">Danh sách bài</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full py-2 transition-all duration-200 rounded-lg cursor-pointer hover:bg-gray-100 mb-2">
        <div>
          <div
            className="flex items-center justify-between"
            onClick={() => {
              setActiveItem(!activeItem);
              if (!toggleSidebar) {
                setToggleSidebar(!toggleSidebar);
              }
            }}
          >
            <div className="flex items-center justify-start order-1">
              <BsChevronRight
                className={`ml-2 mr-[2px] text-xl font-bold text-green-500 fast-animation ease-in-out ${
                  activeItem ? "rotate-90" : "rotate-0"
                }`}
              />
              <h2 className="text-sm font-bold text-green-500">
                QUẢN LÝ TÀI KHOẢN
              </h2>
            </div>

            <div className="z-10 flex items-center order-3 float-left mr-2 min-h-fit min-w-fit">
              <MdSupervisorAccount className="text-3xl text-green-500" />
            </div>
          </div>

          <ul
            className={`${
              !activeItem ? "h-0" : "h-14"
            } overflow-hidden fast-animation ease-in-out mx-4`}
          >
            <li className="p-2 mt-2 ml-4 text-sm font-semibold text-green-500 rounded-lg hover:bg-gray-300">
              <a href="/dashboard/account-manager">Danh sách tài khoản</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;