import React from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { BsSearch } from "react-icons/bs";

function CardFilter() {
  return (
    <div className="flex items-center justify-between w-full px-4 py-2 mb-2 bg-green-500 rounded-md shadow-sm">
      <div className="flex items-center">
        <p class="h1-text-1 text-white mr-2">Sắp xếp theo</p>
        <button className="px-4 pt-1 pb-2 mr-2 text-green-500 transition-all duration-150 bg-white rounded-sm hover:bg-green-700 hover:text-white">
          <p>Phổ biến</p>
        </button>
        <button className="px-4 pt-1 pb-2 mr-2 text-green-500 transition-all duration-150 bg-white rounded-sm hover:bg-green-700 hover:text-white">
          <p>Mới nhất</p>
        </button>
      </div>

      <div class="relative mx-auto text-gray-600 w-96">
        <input
          class="border-2 border-gray-300 w-full bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Tìm kiếm"
        />
        <button type="submit" class="absolute right-4 top-0 bottom-0">
          <BsSearch className="w-4 h-4 text-gray-600 fill-current" />
        </button>
      </div>

      <div className="flex items-center">
        <p className="mr-2 text-white">1/100</p>
        <button className="p-2 mr-2 text-green-500 transition-all duration-150 bg-white rounded-full hover:bg-green-700 hover:text-white">
          <GoChevronLeft />
        </button>
        <button className="p-2 mr-2 text-green-500 transition-all duration-150 bg-white rounded-full hover:bg-green-700 hover:text-white">
          <GoChevronRight />
        </button>
      </div>
    </div>
  );
}

export default CardFilter;
