import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createProcess } from "../../../../../../../actions/process";
import DropDown from "../../../../../../../components/DropDown/DropDown";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../../../../../../components/Modal/Modal";
// import NoteList from "../../../../../../../components/NoteList/NoteList";

import { toast } from "react-toastify";

import step_items from "../../step_items";
import { useNavigate } from "react-router-dom";

function CreateProcess({ showModal, setShowModal, data }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectProc, setSelectProc] = useState([
    {
      id: "",
      value: "",
    },
  ]);

  const [procData, setProcData] = useState({
    productId: data.id || "",
    step: "",
    note: "",
    description: "",
  });

  useEffect(() => {
    setProcData({
      ...procData,
      step: selectProc[0].value,
    });
  }, [selectProc]);

  useEffect(() => {
    if (!showModal) clear();
  }, [showModal]);

  const clear = () => {
    setProcData({
      ...procData,
      step: "",
      note: "",
      description: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let signal = true;

    for (let key in procData) {
      if (procData[key] === "") {
        signal = false;
        break;
      }
    }

    if (!signal || selectProc[0].id === "") {
      toast("Nhập thiếu thông tin", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      dispatch(createProcess(procData));

      toast("Tạo quy trình thành công", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // navigate("../process-manager", { replace: true });

      setShowModal(false);
    }
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Modal show={showModal} setShow={setShowModal}>
        <ModalHeader>
          <h2 className="pt-2 mb-0 h2-text">Tạo mới quy trình</h2>
        </ModalHeader>
        <ModalBody>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="description"
            >
              Mô tả quy trình
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              placeholder="Nhập mô tả quy trình"
              value={procData.description}
              onChange={(e) =>
                setProcData({
                  ...procData,
                  description: e.target.value,
                })
              }
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
                showModal={showModal}
                setItem={setSelectProc}
                position="top"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              htmlFor="note"
            >
              Ghi chú
            </label>
            <textarea
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="note"
              cols="5"
              type="text"
              placeholder="Nhập ghi chú"
              value={procData.note}
              onChange={(e) =>
                setProcData({
                  ...procData,
                  note: e.target.value,
                })
              }
            />
          </div>

          {/* <NoteList showModal={showModal} /> */}
        </ModalBody>
        <ModalFooter>
          <div className="flex justify-end mb-2">
            <button className="mr-2 button button-success" type="submit">
              Lưu
            </button>
            <button
              className="button button-danger"
              type="button"
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

export default CreateProcess;
