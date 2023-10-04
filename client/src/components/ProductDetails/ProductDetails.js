import React, { useEffect } from "react";
import TimeLineItems from "./TimeLineItems/TimeLineItems";
import { useLocation, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import { updateView } from "../../api";

function ProductDetails() {
  const navigate = useNavigate();

  const { state } = useLocation();

  useEffect(() => {
    updateView(state._id);
  }, []);

  return (
    <div className="flex justify-between p-4 bg-white rounded-md">
      <div className="fixed z-10 top-30 right-10">
        <button className="button button-warning" onClick={() => navigate(-1)}>
          Quay lại
        </button>
      </div>
      <div className="w-6/12 px-6">
        <h2 className="text-sm h2-text">Thông tin sản phẩm</h2>
        <div className="relative flex justify-center w-full mb-2">
          <img
            src={`${state.img}`}
            alt=""
            className="object-cover w-11/12 h-full rounded-md"
          />
        </div>
        <h2 className="text-sm text-center h2-text">{`${state.prodName} ${state.qty}${state.unit}`}</h2>
        <hr />
        <br />
        <div>
          <h2 className="text-sm h2-text">Mô tả</h2>
          <p className="mb-2 text-justify text-gray-600">
            {`${state.prodDescription}`}
          </p>
          <h2 className="text-sm h2-text">Thành phần</h2>
          <p className="mb-2 text-justify text-gray-600">
            {`${state.prodIngredient}`}
          </p>
          <h2 className="text-sm h2-text">Loại sản phẩm</h2>
          <p className="mb-2 text-justify text-gray-600">
            {`${state.prodType}`}
          </p>
          <h2 className="text-sm h2-text">Khối lượng</h2>
          <p className="mb-2 text-justify text-gray-600">{`${state.qty}${state.unit}`}</p>

          <h2 className="text-sm h2-text">Nơi sản xuất</h2>
          <p className="mb-2 text-justify text-gray-600">{`${state.origin}`}</p>
        </div>
      </div>
      <div className="w-6/12 px-6">
        <div className="mb-4">
          <h2 className="text-sm text-center h2-text">Mã QR của sản phẩm</h2>
          <div className="relative flex justify-center w-full mb-2">
            {/* <img
              src="https://printgo.vn/uploads/media/790919/cac-loai-qr-code-1_1621446074.jpg"
              alt=""
              className="object-cover w-96 h-96"
            /> */}
            <QRCode value={`${state.prodCode}`} />
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm h2-text">Quy trình 5 bước</h2>
          <TimeLineItems data={state.process_steps} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
