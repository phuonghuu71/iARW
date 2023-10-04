import React, { useEffect, useState } from "react";

import { io } from "socket.io-client";

import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";

import AOS from "aos";
import "./App.css";
import "aos/dist/aos.css";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

function App() {
  AOS.init();

  const socket = io.connect("http://localhost:7000");

  const dispatch = useDispatch();

  const location = useLocation();

  const navigate = useNavigate();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("profile")) || ""
  );

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch({ type: "LOGOUT" });

        navigate("/");

        setUser(null);
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <SocketContext.Provider value={{ socket }}>
      <div>
        {/* <Dashboard /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/dashboard/*"
            element={user ? <Dashboard /> : <Home />}
          />
        </Routes>
      </div>
      <ToastContainer />
    </SocketContext.Provider>
  );
}

export const SocketContext = React.createContext();
export default App;
