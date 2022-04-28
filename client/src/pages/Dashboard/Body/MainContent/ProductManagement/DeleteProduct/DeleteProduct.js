import React from "react";

import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../../../../../components/Modal/Modal";

function DeleteProduct({ showModal, setShowModal, data }) {
  return (
    <Modal show={showModal} setShow={setShowModal}>
      <ModalHeader>
        <h2 className="pt-2 mb-0 h2-text">Xóa sản phẩm</h2>
      </ModalHeader>
      <ModalBody>
        <p>{`Bạn có chắc muốn xóa sản phẩm ${data ? data.name : ""}?`}</p>
      </ModalBody>
      <ModalFooter>
        <div className="flex justify-end mb-2">
          <button
            className="mr-2 button button-success"
            onClick={() => setShowModal(false)}
          >
            Có
          </button>
          <button
            className="button button-danger"
            onClick={() => setShowModal(false)}
          >
            Không
          </button>
        </div>
      </ModalFooter>
    </Modal>
  );
}

export default DeleteProduct;
