import React, { useState, useEffect } from "react";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../components/Modal/Modal";

function ReviewProduct({ showModal, setShowModal, data }) {
  return (
    <form autoComplete="off" noValidate>
      <Modal show={showModal} setShow={setShowModal} width={"medium"}>
        <ModalHeader>
          <h2 className="pt-2 mb-0 h2-text">Review sản phẩm</h2>
        </ModalHeader>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
            <ModalBody>
              <p className="mb-2">{`Tên sản phẩm: ${data.prodName}`}</p>{" "}
              <p className="mb-2">{`Mô tả: ${data.prodDescription}`}</p>
              <p className="mb-2">{`Nguyên liệu: ${data.prodIngredient}`}</p>
              <p className="mb-2">{`số lượng: ${data.qty} ${data.unit}`}</p>
              <p className="mb-2">{`Xuất xứ: ${data.origin}`}</p>
            </ModalBody>
          </div>
          <div className="col-span-4 mr-3">
            <p>Ảnh minh họa</p>
            <div className="w-full relative block before:pt-[100%] before:block">
              <img
                className="absolute top-0 bottom-0 left-0 object-cover w-full h-full m-auto"
                src={data.img}
                alt=""
              />
            </div>
          </div>
        </div>

        <ModalFooter>
          <div className="flex justify-end mb-2">
            <button
              type="button"
              className="button button-danger"
              onClick={() => setShowModal(false)}
            >
              Đóng
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </form>
  );
}

export default ReviewProduct;
