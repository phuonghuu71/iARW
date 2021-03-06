import React, { useState, useEffect } from "react";
import Dropdown from "../../../../../../components/DropDown/DropDown";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../../../../../components/Modal/Modal";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../../../../../actions/product.js";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CreateProduct({ showModal, setShowModal, user, type }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectProd, setSelectProd] = useState([
    {
      id: "",
      value: "",
    },
  ]);

  const [prodData, setProdData] = useState({
    prodName: "",
    prodDescription: "",
    prodIngredient: "",
    prodType: "",
    qty: "",
    unit: "",
    origin: "",
  });

  useEffect(() => {
    setProdData({
      ...prodData,
      prodType: selectProd[0].id,
    });
  }, [selectProd]);

  const clear = () => {
    setProdData({
      ...prodData,
      prodName: "",
      prodDescription: "",
      prodIngredient: "",
      prodType: "",
      qty: "",
      unit: "",
      origin: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let signal = true;

    for (let key in prodData) {
      if (prodData[key] === "") {
        signal = false;
        break;
      }
    }

    if (!signal || selectProd[0].id === "") {
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
      dispatch(
        createProduct({
          ...prodData,
          prodUsr: user?._id,
        })
      );

      toast("Tạo sản phẩm thành công", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      clear();

      navigate("../product-manager", { replace: true });

      setShowModal(false);
    }
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
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
              Tên sản phẩm
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Nhập tên sản phẩm"
              value={prodData.prodName}
              onChange={(e) =>
                setProdData({
                  ...prodData,
                  prodName: e.target.value,
                })
              }
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
              value={prodData.prodDescription}
              onChange={(e) =>
                setProdData({
                  ...prodData,
                  prodDescription: e.target.value,
                })
              }
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
              value={prodData.prodIngredient}
              onChange={(e) =>
                setProdData({
                  ...prodData,
                  prodIngredient: e.target.value,
                })
              }
            />
          </div>
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-2 mb-4">
              <label className="block text-sm font-bold text-gray-700">
                Loại sản phẩm
              </label>
              <div className="w-full">
                <Dropdown
                  title="Trống"
                  items={type}
                  multiSelect={false}
                  position="top"
                  setItem={setSelectProd}
                  showModal={showModal}
                />
              </div>
            </div>

            <div className="col-span-2 mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="qty"
              >
                Khối lượng
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="qty"
                type="text"
                placeholder="Nhập khối lượng"
                value={prodData.qty}
                onChange={(e) =>
                  e.target.value === "" || /^[0-9\b]+$/.test(e.target.value)
                    ? setProdData({
                        ...prodData,
                        qty: e.target.value,
                      })
                    : ""
                }
              />
            </div>

            <div className="col-span-2 mb-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="unit"
              >
                Đơn vị
              </label>
              <input
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="unit"
                type="text"
                placeholder="Nhập đơn vị"
                value={prodData.unit}
                onChange={(e) =>
                  setProdData({
                    ...prodData,
                    unit: e.target.value,
                  })
                }
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
              value={prodData.origin}
              onChange={(e) =>
                setProdData({
                  ...prodData,
                  origin: e.target.value,
                })
              }
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="flex justify-end mb-2">
            <button type="submit" className="mr-2 button button-success">
              Lưu
            </button>
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

export default CreateProduct;
