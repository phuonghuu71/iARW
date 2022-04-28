import React, { useCallback, useState } from "react";
import { IoAdd } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import DropDown from "../../../../../components/DropDown/DropDown";
import CreateProduct from "./CreateProduct/CreateProduct";
import EditProduct from "./EditProduct/EditProduct";

import veggies_items from "./veggie_items";
import DeleteProduct from "./DeleteProduct/DeleteProduct";
import Table, {
  TableContent,
  TableHeader,
} from "../../../../../components/Table/Table";
import { tmp_product } from "../../../../../assets/tmp/tmp_product";
import { useNavigate } from "react-router-dom";

function ProductManagement() {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [fetchData, setFetchData] = useState();

  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/dashboard/processmanager", { replace: true }),
    [navigate]
  );

  return (
    <div className="w-full h-full p-4">
      <div className="flex items-center justify-between mx-4 mb-2">
        <h2 className="h2-text">Quản lý sản phẩm của bạn</h2>
        <div>
          <button
            onClick={() => setShowModalCreate(true)}
            className="flex items-center button button-success"
          >
            <IoAdd />
            &nbsp;Tạo mới
          </button>
          <CreateProduct
            showModal={showModalCreate}
            setShowModal={setShowModalCreate}
          />
        </div>
      </div>
      <div className="flex flex-col m-4">
        <div className="flex items-center w-full p-4 my-4 ml-auto bg-white rounded-md shadow-md">
          <div className="w-[12rem]">
            <DropDown
              title="Chọn danh mục"
              items={veggies_items}
              multiSelect={false}
              position="top"
            />
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
                Tên sản phẩm
              </th>
              <th className="px-6 py-4 text-sm font-medium text-left text-gray-900">
                Ngày đăng
              </th>
              <th className="px-6 py-4 text-sm font-medium text-center text-gray-900">
                Tình trạng
              </th>
              <th className="px-6 py-4 text-sm font-medium text-center text-gray-900">
                Loại trái cây
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
                  <td className="flex justify-center px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                    <div className="px-3 py-1 mr-2 text-white bg-yellow-500 rounded-full">
                      {product.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-light text-center text-gray-900 whitespace-nowrap">
                    {product.type}
                  </td>
                  <td className="px-6 py-4 text-sm font-light text-gray-900 whitespace-nowrap">
                    <div className="flex justify-end">
                      <button
                        onClick={handleOnClick}
                        className="px-3 py-1 mr-2 text-white transition-all duration-150 bg-orange-500 rounded-full hover:bg-orange-600"
                      >
                        Quản lý quy trình 5 bước
                      </button>
                      <div>
                        <button
                          onClick={() => {
                            setFetchData(product);
                            setShowModalEdit(true);
                          }}
                          className="px-3 py-1 mr-2 text-white transition-all duration-150 bg-blue-500 rounded-full hover:bg-blue-600"
                        >
                          Chỉnh sửa
                        </button>
                      </div>
                      <div>
                        <button
                          onClick={() => {
                            setFetchData(product);
                            setShowModalDelete(true);
                          }}
                          className="px-3 py-1 text-white transition-all duration-150 bg-red-500 rounded-full hover:bg-red-600"
                        >
                          Xóa
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

      <EditProduct
        data={fetchData}
        showModal={showModalEdit}
        setShowModal={setShowModalEdit}
      />

      <DeleteProduct
        data={fetchData}
        showModal={showModalDelete}
        setShowModal={setShowModalDelete}
      />
    </div>
  );
}

export default ProductManagement;
