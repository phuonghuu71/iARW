import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="w-full py-2 mb-2 transition-all duration-200 rounded-lg cursor-pointer hover:bg-gray-100">
      <div
        className="flex items-center justify-between"
        onClick={() => {
          if (!props.toggleSidebar) {
            props.setToggleSidebar(!props.toggleSidebar);
          }
        }}
      >
        <div className="flex items-center justify-start order-1">
          <Link to={`${props.link}`} replace>
            <h2 className="ml-3 text-sm font-bold text-green-500">
              {props.title}
            </h2>
          </Link>
        </div>

        <div className="z-10 flex items-center order-3 float-left mr-2 min-h-fit min-w-fit">
          {props.children}
          {/* <AiFillHome className="text-3xl text-green-500" /> */}
        </div>
      </div>
    </div>
  );
}

export const Icon = (props) => {
  return <div>{props.children}</div>;
};

export default Item;
