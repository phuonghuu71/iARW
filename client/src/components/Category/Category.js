import React, { useState } from "react";
import { TiChevronRight } from "react-icons/ti";
import { GoChevronDown } from "react-icons/go";
import { AiFillFilter, AiOutlineCheck } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import CheckBox from "../CheckBox/CheckBox";
import CheckBoxGroup from "../CheckBoxGroup/CheckBoxGroup";

function Category({ searchType, setSearchType }) {
  const [searchByProvince, setSearchByProvince] = useState(false);

  return (
    <div className="w-[20rem] bg-white p-4 h-full rounded-md shadow-sm">
      <div className="flex items-center mb-4 h1-text">
        <BsListTask />
        <h1>&nbsp; Danh mục</h1>
      </div>
      <hr />
      <br />
      <div className="">
        {/* <div
          onClick={() => setSearchType("")}
          className="flex items-center cursor-pointer p-text-1"
        >
          <TiChevronRight />
          <p>&nbsp; Không tìm kiếm theo danh mục</p>
        </div> */}
        <div
          onClick={() => setSearchType("Rau lá")}
          className="flex items-center cursor-pointer p-text-1"
        >
          <TiChevronRight />
          <p>&nbsp; Rau lá các loại</p>
        </div>
        <div
          onClick={() => setSearchType("Rau củ")}
          className="flex items-center cursor-pointer p-text-1"
        >
          <TiChevronRight />
          <p className="p-text-1">&nbsp; Rau củ các loại</p>
        </div>
        <div
          onClick={() => setSearchType("Trái cây")}
          className="flex items-center cursor-pointer p-text-1"
        >
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
        <CheckBoxGroup toggle={searchByProvince} />
        <div
          className="flex items-center ml-4 cursor-pointer p-text-1"
          onClick={() => setSearchByProvince(!searchByProvince)}
        >
          <p className="p-text-1">
            {`${!searchByProvince ? "Thêm" : "Ẩn bớt"}`} &nbsp;
          </p>
          <GoChevronDown />
        </div>
      </div>
    </div>
  );
}

export default Category;
