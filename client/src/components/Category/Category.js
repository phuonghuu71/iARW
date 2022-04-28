import React from "react";
import { TiChevronRight } from "react-icons/ti";
import { GoChevronDown } from "react-icons/go";
import { AiFillFilter, AiOutlineCheck } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import CheckBox from "../CheckBox/CheckBox";

function Category() {
  return (
    <div className="w-[20rem] bg-white p-4 h-full rounded-md shadow-sm">
      <div className="flex items-center mb-4 h1-text">
        <BsListTask />
        <h1>&nbsp; Danh mục sản phẩm</h1>
      </div>
      <hr />
      <br />
      <div className="">
        <div className="flex items-center p-text-1">
          <TiChevronRight />
          <p>&nbsp; Rau lá các loại</p>
        </div>
        <div className="flex items-center p-text-1">
          <TiChevronRight />
          <p className="p-text-1">&nbsp; Rau củ các loại</p>
        </div>
        <div className="flex items-center p-text-1">
          <TiChevronRight />
          <p className="p-text-1">&nbsp; Trái cây các loại</p>
        </div>
      </div>
      <br />
      <div className="flex items-center mb-4 h1-text">
        <AiFillFilter />
        <h1>&nbsp; Bộ lọc tìm kiếm</h1>
      </div>
      <hr />
      <br />
      <div className="">
        <h1 className="text-green-500">Nơi sản xuất</h1>

        <CheckBox content={<p className="p-text-1">TP. Hồ Chí Minh</p>} />
        <CheckBox content={<p className="p-text-1">Hà Nội</p>} />
        <div className="flex items-center ml-4 p-text-1">
          <p className="p-text-1">Thêm &nbsp;</p>
          <GoChevronDown />
        </div>
      </div>
    </div>
  );
}

export default Category;
