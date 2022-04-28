import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  useCallback,
} from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineMail, AiOutlineUser, AiOutlineCheck } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import { LoginContext } from "../../pages/Home/Home";
import CheckBox from "../CheckBox/CheckBox";

import { useNavigate } from "react-router-dom";

function Login() {
  // open login menu modal
  const { loginMenuModal, setLoginMenuModal } = useContext(LoginContext);
  useEffect(() => {
    console.log(loginMenuModal);
  }, [loginMenuModal]);

  const loginRef = useRef();

  useEffect(() => {
    const clickOutsideContent = (e) => {
      if (e.target === loginRef.current) setLoginMenuModal(false);
    };
    window.addEventListener("click", clickOutsideContent);
    return () => {
      window.removeEventListener("click", clickOutsideContent);
    };
  }, [loginMenuModal]);

  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/dashboard", { replace: true }),
    [navigate]
  );

  return (
    <div
      ref={loginRef}
      className={`flex items-center justify-center dim ${
        loginMenuModal ? "active" : ""
      }`}
    >
      <div
        className={`relative w-4/12 p-8 bg-white rounded-xl h-4/6 -translate-y-10 transition-all duration-300 ease-in-out ${
          loginMenuModal ? "translate-y-0" : ""
        }`}
      >
        <div
          className="absolute top-4 right-6"
          onClick={() => setLoginMenuModal(!loginMenuModal)}
        >
          <span className="text-3xl text-gray-500 cursor-pointer hover:text-green-500">
            &times;
          </span>
        </div>

        <div className="absolute flex items-center justify-center w-32 h-32 -translate-x-1/2 bg-green-500 rounded-full -top-16 left-1/2">
          <AiOutlineUser className="text-6xl text-white" />
        </div>

        <h2 className="mt-16 text-xl font-bold text-center text-green-500">
          Đăng Nhập
        </h2>

        <br />

        <div>
          <p className="text-lg font-semibold text-green-600">Email</p>
          <div className="relative w-full pt-2 mx-auto text-gray-600">
            <AiOutlineMail className="absolute top-5 left-3" />
            <input
              className="w-full h-10 px-8 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
              type="search"
              name="search"
              placeholder="Nhập Email"
            />
          </div>
        </div>

        <br />

        <div>
          <p className="text-lg font-semibold text-green-600">Mật khẩu</p>
          <div className="relative w-full pt-2 mx-auto text-gray-600">
            <RiLockPasswordLine className="absolute top-5 left-3" />
            <input
              className="w-full h-10 px-8 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
              type="search"
              name="search"
              placeholder="Nhập mật khẩu"
            />
          </div>
        </div>

        <br />

        <div className="flex items-center justify-between">
          <CheckBox content={"Ghi nhớ mật khẩu"} />
          <div className="transition-all duration-300 hover:text-green-500">
            <a href="#">Quên mật khẩu?</a>
          </div>
        </div>

        <br />

        <div>
          <button
            className="w-full py-3 text-xl font-bold text-white bg-green-500 hover:bg-green-600 rounded-xl"
            onClick={handleOnClick}
          >
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
