import React from "react";
import Dropdown from "../../../../../../components/DropDown/DropDown";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../../../../../components/Modal/Modal";

import veggies_items from "../veggie_items";

function CreateProduct({ showModal, setShowModal }) {
  return (
    <Modal show={showModal} setShow={setShowModal}>
      <ModalHeader>
        <h2 className="pt-2 mb-0 h2-text">Tạo mới sản phẩm</h2>
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="name"
            >
              Tên sản phẩm
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nhập tên sản phẩm"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="description"
            >
              Mô tả
            </label>
            <textarea
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="description"
              rows="4"
              placeholder="Nhập mô tả"
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="ingredient"
            >
              Thành phần
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="username"
              type="ingredient"
              placeholder="Nhập tên thành phần"
            />
          </div>
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-3 mb-4">
              <label className="block text-sm font-bold text-gray-700">
                Loại sản phẩm
              </label>
              <div className="w-full">
                <Dropdown
                  title="Chọn danh mục"
                  items={veggies_items}
                  multiSelect={false}
                  position="top"
                />
              </div>
            </div>

            <div className="col-span-3 mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="weight"
              >
                Khối lượng
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="weight"
                type="text"
                placeholder="Nhập khối lượng"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="origin"
            >
              Nơi sản xuất
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="origin"
              type="text"
              placeholder="Nhập nơi sản xuất"
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <div className="flex justify-end mb-2">
          <button
            className="mr-2 button button-success"
            onClick={() => setShowModal(false)}
          >
            Lưu
          </button>
          <button
            className="button button-danger"
            onClick={() => setShowModal(false)}
          >
            Đóng
          </button>
        </div>
      </ModalFooter>
    </Modal>
  );
}

export default CreateProduct;
