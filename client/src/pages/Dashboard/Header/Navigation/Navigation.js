import React from "react";
import { BsSearch } from "react-icons/bs";

function Navigation() {
  return (
    <div className="flex items-center justify-between pt-2">
      <div className="flex items-center text-green-500">
        <h2 className="text-lg font-bold">iARW |&nbsp;</h2>
        <p className="font-semibold"> Ứng dụng truy xuất nông sản</p>
      </div>
      <div>
        <div className="w-8 h-8 bg-gray-500 rounded-full"></div>
      </div>
    </div>
  );
}

export default Navigation;
