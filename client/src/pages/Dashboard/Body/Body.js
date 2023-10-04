import React, { useState } from "react";
import MainContent from "./MainContent/MainContent";
import Sidebar from "./Sidebar/Sidebar";
import { ToastContainer } from "react-toastify";

function Body() {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className="h-[calc(100vh-81px)] bg-gray-100 flex overflow-y-scroll overflow-x-hidden">
      <Sidebar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />
      <MainContent toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default Body;
