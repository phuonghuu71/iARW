import React, { useEffect, useState } from "react";
import DropDown from "../../../../../../../components/DropDown/DropDown";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../../../../../../components/Modal/Modal";
import NoteList from "../../../../../../../components/NoteList/NoteList";

import step_items from "../../step_items";

function CreateProcess({ showModal, setShowModal }) {
  return (
    <Modal show={showModal} setShow={setShowModal}>
      <ModalHeader>
        <h2 className="pt-2 mb-0 h2-text">Tạo mới sản phẩm</h2>
      </ModalHeader>
      <ModalBody>
        <div className="mb-4">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="name"
          >
            Tên quy trình
          </label>
          <input
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Nhập tên quy trình"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold text-gray-700">
            Chọn bước
          </label>
          <div className="w-full">
            <DropDown
              title="Chọn bước"
              items={step_items}
              multiSelect={false}
              position="top"
            />
          </div>
        </div>

        <NoteList showModal={showModal} />
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

export default CreateProcess;
