import React, { useEffect } from "react";

import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../../../../../../components/Modal/Modal";

import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {
  deleteProcess,
  getProcByProds,
} from "../../../../../../../actions/process";

function DeleteProcess({ showModal, setShowModal, data }) {
  const dispatch = useDispatch();

  const handleDelete = async (e) => {
    e.preventDefault();

    dispatch(deleteProcess(data._id));

    dispatch(getProcByProds(data.productId));

    toast("Xóa quy trình thành công", {
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
          <h2 className="pt-2 mb-0 h2-text">Xóa quy trình</h2>
        </ModalHeader>
        <ModalBody>
          <p>{`Bạn có chắc muốn xóa quy trình ${
            data ? data.description : ""
          }?`}</p>
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

export default DeleteProcess;
