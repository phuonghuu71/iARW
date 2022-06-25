import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import CreateProcess from "./CreateProcess/CreateProcess";
import Table from "../../../../../../components/Table/Table";

function ProcessManagement() {
  const [showModalCreate, setShowModalCreate] = useState(false);

  return (
    <div className="w-full h-full p-4">
      <div className="flex items-center justify-between mx-4 mb-2">
        <h2 className="h2-text">Quản lý quy trình 5 bước</h2>
        <div>
          <button
            className="flex items-center button button-warning"
            onClick={() => setShowModalCreate(true)}
          >
            <IoAdd />
            &nbsp;Tạo mới
          </button>
          <CreateProcess
            showModal={showModalCreate}
            setShowModal={setShowModalCreate}
          />
        </div>
      </div>
      <div className="flex flex-col m-4">
        <div className="flex items-center w-full p-4 my-4 ml-auto bg-white rounded-md shadow-md">
          <div className="w-[12rem]">
            <h2 className="h2-text">Khoai tây 1 kg</h2>
          </div>
          <div className="relative ml-auto mr-2 text-gray-600 w-96">
            <input
              className="w-full h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
              type="search"
              name="search"
              placeholder="Nhập nông sản bạn cần tìm"
            />
          </div>
          <button className="flex items-center px-3 py-2 pt-1 text-lg text-white transition-all duration-150 bg-green-500 rounded-md shadow-md hover:bg-green-600">
            <BsSearch />
            &nbsp;Tìm Kiếm
          </button>
        </div>
        {/* <Table title="Sản phẩm của bạn">
          <TableHeader>
            <tr className="border-b">
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left text-gray-900"
              >
                #
              </th>
              <th className="px-6 py-4 text-sm font-medium text-center text-gray-900">
                Tên quy trình
              </th>
              <th className="px-6 py-4 text-sm font-medium text-center text-gray-900">
                Ngày đăng
              </th>
              <th className="px-6 py-4 text-sm font-medium text-center text-gray-900">
                Mốc thời gian
              </th>
              <th className="px-6 py-4 text-sm font-medium text-center text-gray-900">
                Đang ở bước
              </th>
              <th className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                Ghi chú
              </th>
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-right text-gray-900"
              >
                Thao tác
              </th>
            </tr>
          </TableHeader>
          <TableContent>
            <tr className="">
              <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                1
              </td>
              <td className="px-6 py-4 text-sm font-light text-center text-gray-900 whitespace-nowrap">
                <p className="truncate w-36 text-ellipsis">Vận chuyển</p>
              </td>
              <td className="px-6 py-4 text-sm font-light text-center text-gray-900 whitespace-nowrap">
                16/4/2022
              </td>
              <td className="px-6 py-4 text-sm font-light text-center text-gray-900 whitespace-nowrap">
                17h30
              </td>
              <td className="flex justify-center px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                <div className="px-3 py-1 mr-2 text-white bg-orange-500 rounded-full">
                  Bước 4 - Vận chuyển
                </div>
              </td>
              <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                <p className="truncate w-96 text-ellipsis">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Numquam, officiis. Deleniti praesentium, eum odit sit minus
                  repudiandae, et ea eos inventore obcaecati quasi unde vero ab
                  velit harum, iure porro.
                </p>
              </td>
              <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                <div className="flex justify-end">
                  <button className="px-3 py-1 mr-2 text-white transition-all duration-150 bg-blue-500 rounded-full hover:bg-blue-600">
                    Chỉnh sửa
                  </button>
                  <button className="px-3 py-1 text-white transition-all duration-150 bg-red-500 rounded-full hover:bg-red-600">
                    Xóa
                  </button>
                </div>
              </td>
            </tr>
          </TableContent>
        </Table> */}
      </div>
      <br />
    </div>
  );
}

export default ProcessManagement;
