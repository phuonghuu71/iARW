import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";

import Table, {
  TableContent,
  TableHeader,
} from "../../../../../components/Table/Table";
import { tmp_acc } from "../../../../../assets/tmp/tmp_acc";

function AccountManagement() {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [fetchData, setFetchData] = useState();

  return (
    <div className="w-full h-full p-4">
      <div className="flex items-center justify-between mx-4 mb-2">
        <h2 className="h2-text">Quản lý tài khoản</h2>
        <div>
          <button
            onClick={() => setShowModalCreate(true)}
            className="flex items-center button button-success"
          >
            <IoAdd />
            &nbsp;Tạo mới
          </button>
        </div>
      </div>
      <div className="flex flex-col m-4">
        <div className="flex items-center w-full p-4 my-4 ml-auto bg-white rounded-md shadow-md">
          <div className="w-[12rem]"></div>
          <div className="relative ml-auto mr-2 text-gray-600 w-96">
            <input
              className="w-full h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:outline-none"
              type="search"
              name="search"
              placeholder="Nhập tên tài khoản  bạn cần tìm"
            />
          </div>
          <button className="flex items-center px-3 py-2 pt-1 text-lg text-white transition-all duration-150 bg-green-500 rounded-md shadow-md hover:bg-green-600">
            <BsSearch />
            &nbsp;Tìm Kiếm
          </button>
        </div>
        <Table title="Sản phẩm của bạn">
          <TableHeader>
            <tr className="border-b">
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left text-gray-900"
              >
                #
              </th>
              <th className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                Tên tài khoản
              </th>
              <th className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                Vai trò
              </th>
              <th className="px-6 py-4 text-sm font-medium text-center text-gray-900">
                Tình trạng
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
            {tmp_acc.map((acc) => {
              return (
                <tr className="" key={acc.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {acc.id}
                  </td>
                  <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                    {acc.username}
                  </td>
                  <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                    {acc.role}
                  </td>
                  <td className="flex justify-center px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                    <div className="px-3 py-1 mr-2 text-white bg-green-500 rounded-full">
                      {acc.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                    <div className="flex justify-end">
                      <button className="px-3 py-1 mr-2 text-white transition-all duration-150 bg-orange-500 rounded-full hover:bg-orange-600">
                        Đổi mật khẩu
                      </button>
                      <div>
                        <button className="px-3 py-1 mr-2 text-white transition-all duration-150 bg-blue-500 rounded-full hover:bg-blue-600">
                          Chỉnh sửa quyền truy cập
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </TableContent>
        </Table>
      </div>
      <br />
    </div>
  );
}

export default AccountManagement;
