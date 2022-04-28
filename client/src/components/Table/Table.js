import React from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from "react-icons/fi";
import cols_items from "../../assets/tmp/cols_items";
import Dropdown from "../DropDown/DropDown";

function Table(props) {
  return (
    <div className="flex flex-col bg-white rounded-md shadow-md">
      <div className="flex items-center justify-between p-4">
        <h2 className="h2-text">{props.title}</h2>
        <div className="flex items-center justify-end">
          <p className="mr-2 font-bold p-text-1">Đi tới trang</p>
          <input
            type="text"
            className="w-1/4 px-2 border border-green-500 rounded-md outline-none"
          />
        </div>
      </div>
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">{props.children}</table>
            <div className="flex items-center p-4">
              <div className="w-[12rem]">
                <Dropdown
                  title="Chọn số hàng"
                  items={cols_items}
                  multiSelect={false}
                  position="bottom"
                />
              </div>
              <p className="ml-auto mr-2 font-bold p-text-1">Trang 1 trên 1</p>
              <div className="flex items-center">
                <button className="p-2 mr-2 text-white transition-all duration-150 bg-green-500 rounded-full hover:bg-green-600">
                  <FiChevronsLeft className="text-lg" />
                </button>
                <button className="p-2 mr-2 text-white transition-all duration-150 bg-green-500 rounded-full hover:bg-green-600">
                  <FiChevronLeft className="text-lg" />
                </button>
                <button className="p-2 mr-2 text-white transition-all duration-150 bg-green-500 rounded-full hover:bg-green-600">
                  <FiChevronRight className="text-lg" />
                </button>
                <button className="p-2 text-white transition-all duration-150 bg-green-500 rounded-full hover:bg-green-600">
                  <FiChevronsRight className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;

export const TableHeader = (props) => {
  return <thead>{props.children}</thead>;
};

export const TableContent = (props) => {
  return <tbody>{props.children}</tbody>;
};
