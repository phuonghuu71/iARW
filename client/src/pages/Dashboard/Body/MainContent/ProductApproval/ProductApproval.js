import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import DropDown from "../../../../../components/DropDown/DropDown";

import Table from "../../../../../components/Table/Table";
import { tmp_product } from "../../../../../assets/tmp/tmp_product";

function ProductApproval() {
  return (
    <div className="w-full h-full p-4">
      <div className="flex items-center justify-between mx-4 mb-2">
        <h2 className="h2-text">Duyệt sản phẩm</h2>
      </div>
      <div className="flex flex-col m-4">
        {/* <Table title="Sản phẩm của bạn">
          <TableHeader>
            <tr className="border-b">
              <th
                scope="col"
                className="px-6 py-4 text-sm font-medium text-left text-gray-900"
              >
                #
              </th>
              <th className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                Tên sản phẩm
              </th>
              <th className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                Ngày đăng
              </th>
              <th className="px-6 py-4 text-sm font-medium text-center text-gray-900">
                Loại trái cây
              </th>
              <th className="px-6 py-4 text-sm font-medium text-center text-gray-900">
                Người đăng
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
            {tmp_product.map((product) => {
              return (
                <tr className="" key={product.id}>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {product.id}
                  </td>
                  <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                    {product.createdDate}
                  </td>
                  <td className="px-6 py-4 text-sm font-light text-center text-gray-900 whitespace-nowrap">
                    {product.type}
                  </td>
                  <td className="px-6 py-4 text-sm font-light text-center text-gray-900 whitespace-nowrap">
                    {product.user}
                  </td>
                  <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                    <div className="flex justify-end">
                      <div>
                        <button className="px-3 py-1 mr-2 text-white transition-all duration-150 bg-blue-500 rounded-full hover:bg-blue-600">
                          Xem chi tiết
                        </button>
                      </div>
                      <div>
                        <button className="px-3 py-1 mr-2 text-white transition-all duration-150 bg-green-500 rounded-full hover:bg-green-600">
                          Chấp thuận
                        </button>
                      </div>
                      <div>
                        <button className="px-3 py-1 text-white transition-all duration-150 bg-red-500 rounded-full hover:bg-red-600">
                          Từ chối
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </TableContent>
        </Table> */}
      </div>
      <br />
    </div>
  );
}

export default ProductApproval;
