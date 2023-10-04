import React, { useEffect } from "react";

import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../../../../../components/Modal/Modal";

import {
  deleteProduct,
  getProdsByUsr,
} from "../../../../../../actions/product.js";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

function DeleteProduct({ showModal, setShowModal, data, user }) {
  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();

    dispatch(deleteProduct(data._id));

    toast("Xóa sản phẩm thành công", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    setShowModal(false);
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleDelete}>
      <Modal show={showModal} setShow={setShowModal}>
        <ModalHeader>
          <h2 className="pt-2 mb-0 h2-text">Xóa sản phẩm</h2>
        </ModalHeader>
        <ModalBody>
          <p>{`Bạn có chắc muốn xóa sản phẩm ${data ? data.prodName : ""}?`}</p>
        </ModalBody>
        <ModalFooter>
          <div className="flex justify-end mb-2">
            <button type="submit" className="mr-2 button button-success">
              Có
            </button>
            <button
              type="button"
              className="button button-danger"
              onClick={() => setShowModal(false)}
            >
              Không
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </form>
  );
}

export default DeleteProduct;
