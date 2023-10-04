import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateProduct } from "../../../../../../actions/product.js";
import {
  getProdTypeById,
  getProdTypes,
} from "../../../../../../actions/product_type";
import Dropdown from "../../../../../../components/DropDown/DropDown";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../../../../../components/Modal/Modal";

import FileBase64 from "react-file-base64";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditProduct({ showModal, setShowModal, data, type }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [img, setImg] = useState({ img: "" });

  const [item, setItem] = useState([]);

  const [prodData, setProdData] = useState({
    prodName: "",
    prodDescription: "",
    prodIngredient: "",
    prodType: "",
    qty: "",
    unit: "",
    origin: "",
    createdAt: "",
    img: "",
  });

  useEffect(() => {
    setProdData({
      ...prodData,
      img: img?.img,
    });
  }, [img]);

  useEffect(() => {
    setProdData({
      ...prodData,
      prodName: data?.prodName,
      prodDescription: data?.prodDescription,
      prodIngredient: data?.prodIngredient,
      prodType: data?.prodType,
      qty: data?.qty,
      unit: data?.unit,
      origin: data?.origin,
      createdAt: data?.createdAt,
      img: data?.img,
    });

    setImg({
      ...img,
      img: data?.img,
    });
  }, [data]);

  useEffect(() => {
    if (item.length > 0) {
      setProdData({
        ...prodData,
        prodType: item[0].value,
      });
    }
  }, [item]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(updateProduct(prodData, data._id));

    toast("Sửa sản phẩm thành công", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    navigate("../product-manager", { replace: true });

    setShowModal(false);
  };

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Modal show={showModal} setShow={setShowModal} width="wide">
        <ModalHeader>
          <h2 className="pt-2 mb-0 h2-text">Tùy chỉnh sản phẩm</h2>
        </ModalHeader>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-8">
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
                  value={prodData ? prodData.prodName : ""}
                  onChange={(e) =>
                    setProdData({
                      ...prodData,
                      prodName: e.target.value,
                    })
                  }
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
                  value={prodData ? prodData.prodDescription : ""}
                  onChange={(e) =>
                    setProdData({
                      ...prodData,
                      prodDescription: e.target.value,
                    })
                  }
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
                  value={prodData ? prodData.prodIngredient : ""}
                  onChange={(e) =>
                    setProdData({
                      ...prodData,
                      prodIngredient: e.target.value,
                    })
                  }
                  placeholder="Nhập tên thành phần"
                />
              </div>

              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-2 mb-4">
                  <label className="block text-sm font-bold text-gray-700">
                    Loại sản phẩm
                  </label>
                  <div className="w-full">
                    <Dropdown
                      select={prodData ? prodData.prodType : ""}
                      title="Trống"
                      items={type}
                      setItem={setItem}
                      multiSelect={false}
                      position="top"
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
                    value={prodData ? prodData.qty : ""}
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
                    value={prodData ? prodData.unit : ""}
                    onChange={(e) =>
                      setProdData({
                        ...prodData,
                        unit: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-6 gap-4">
                <div className="col-span-3 mb-4">
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
                    value={prodData ? prodData.origin : ""}
                    onChange={(e) =>
                      setProdData({
                        ...prodData,
                        origin: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="flex items-end col-span-3 mb-4">
                  <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setImg({ ...img, img: base64 })}
                  />
                </div>
              </div>
            </ModalBody>
          </div>

          <div className="col-span-4 mr-3">
            <div className="w-full relative block before:pt-[100%] before:block">
              <img
                className="absolute top-0 bottom-0 left-0 object-cover w-full h-full m-auto"
                src={img ? img.img : ""}
                alt=""
              />
            </div>
          </div>
        </div>

        <ModalFooter>
          <div className="flex justify-end mb-2">
            <button className="mr-2 button button-success" type="submit">
              Lưu
            </button>
            <button
              className="button button-danger"
              type="button"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Đóng
            </button>
          </div>
        </ModalFooter>
      </Modal>
    </form>
  );
}

export default EditProduct;
