import React, { useState, useRef, useEffect, useContext } from "react";

import { AiFillHome, AiFillContacts } from "react-icons/ai";
import { BsNewspaper } from "react-icons/bs";
import { GiFruitBowl } from "react-icons/gi";

import { LoginContext } from "../../../Home/Home";

function Navigation() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [offset, setOffset] = useState(0);
  const navWideEl = useRef(null);
  const ulEl = useRef(null);
  const liEl = useRef([]);

  const activateMenu = (index_item) => {
    const list = [...ulEl.current.querySelectorAll(".list")];
    list.map((item) => {
      item.classList.remove("active");
      return list;
    });
    liEl.current[index_item].classList.add("active");
  };

  // on scroll event
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  // change green nav on scroll
  useEffect(() => {
    const getNav = navWideEl.current;
    if (offset > 50) getNav.classList.add("active");
    else getNav.classList.remove("active");
  }, [navWideEl, offset]);

  // open login menu modal
  const { loginMenuModal, setLoginMenuModal } = useContext(LoginContext);
  useEffect(() => {
    console.log(loginMenuModal);
  }, [loginMenuModal]);

  return (
    <div>
      <nav className="nav-wide" ref={navWideEl}>
        <div className="nav-wide-logo">
          <h2 className="text-lg font-bold">iARW</h2>
          <span className="mx-1">|</span>
          <p data-aos="fade-right" data-aos-duration="1000" className="text-sm">
            Ứng dụng truy xuất nông sản
          </p>
        </div>

        <div
          className="nav-wide-main-function-container"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <ul className="nav-wide-main-function-ul">
            <li className="mr-6">
              <a className="nav-wide-main-function-li">
                <i className="fa-solid fa-house"></i> Trang Chủ
              </a>
            </li>

            <li className="mr-6">
              <a className="nav-wide-main-function-li">
                <i className="fa-brands fa-apple"></i> Sản Phẩm
              </a>
            </li>

            <li className="mr-6">
              <a className="nav-wide-main-function-li">
                <i className="fa-solid fa-newspaper"></i> Tin Tức
              </a>
            </li>

            <li>
              <a className="nav-wide-main-function-li">
                <i className="fa-solid fa-address-card"></i> Liên Hệ
              </a>
            </li>
          </ul>
        </div>

        <div className="register-login-container">
          <a href="" className="register-button">
            Đăng ký
          </a>
          <button
            className="login-button"
            onClick={() => setLoginMenuModal(!loginMenuModal)}
          >
            Đăng Nhập
          </button>
        </div>
      </nav>

      <nav className="fixed top-0 left-0 z-20 flex items-center justify-between w-full h-16 px-5 2xl:hidden xl:hidden">
        <div>
          <div
            className={activeMenu ? "menu_button active" : "menu_button"}
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <div className="menu_item_top"></div>
            <div className="menu_item_middle"></div>
            <div className="menu_item_bottom"></div>
          </div>
        </div>
        <div className="text-lg font-bold text-white 2xl:hidden xl:hidden">
          <h2>iARW</h2>
        </div>
        <div>
          <a href="#" className="login-button">
            Đăng nhập
          </a>
        </div>
      </nav>

      <div className={activeMenu ? "navigation active" : "navigation"}>
        <div className="navigation-container">
          <ul ref={ulEl}>
            <li
              className="list active"
              ref={(el) => (liEl.current[0] = el)}
              onClick={() => activateMenu(0)}
            >
              <a href="#">
                <span className="icon">
                  <AiFillHome />
                </span>
                <span className="text">Trang Chủ</span>
              </a>
            </li>

            <li
              className="list"
              ref={(el) => (liEl.current[1] = el)}
              onClick={() => activateMenu(1)}
            >
              <a href="#">
                <span className="icon">
                  <BsNewspaper />
                </span>
                <span className="text">Tin Tức</span>
              </a>
            </li>

            <li
              className="list"
              ref={(el) => (liEl.current[2] = el)}
              onClick={() => activateMenu(2)}
            >
              <a href="#">
                <span className="icon">
                  <GiFruitBowl />
                </span>
                <span className="text">Sản Phẩm</span>
              </a>
            </li>

            <li
              className="list"
              ref={(el) => (liEl.current[3] = el)}
              onClick={() => activateMenu(3)}
            >
              <a href="#">
                <span className="icon">
                  <AiFillContacts />
                </span>
                <span className="text">Liên Hệ</span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
