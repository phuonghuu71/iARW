import React from "react";
import TimeLineItems from "./TimeLineItems/TimeLineItems";
import { useNavigate } from "react-router-dom";

function ProductDetails() {
  const navigate = useNavigate();
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
            src="https://cdn.tgdd.vn/Products/Images/8785/222783/bhx/mang-tay-bo-200g-202012082233101204.jpg"
            alt=""
            className="object-cover w-11/12 h-full rounded-md"
          />
        </div>
        <h2 className="text-sm text-center h2-text">Măng tây bó 200g</h2>
        <hr />
        <br />
        <div>
          <h2 className="text-sm h2-text">Mô tả</h2>
          <p className="mb-2 text-justify text-gray-600">
            Măng tây được nuôi trồng tại Lâm Đồng và đóng gói theo những tiêu
            chuẩn nghiêm ngặt, bảo đảm các tiêu chuẩn xanh - sạch, chất lượng và
            an toàn với người dùng. Măng giòn, ngọt, hàm lượng dinh dưỡng cao
            nên thường được chế biên bằng hấp, luộc hoặc nướng để có thể giữ
            được độ tươi ngon.
          </p>
          <h2 className="text-sm h2-text">Thành phần</h2>
          <p className="mb-2 text-justify text-gray-600">
            Măng tây nguyên chất
          </p>
          <h2 className="text-sm h2-text">Loại sản phẩm</h2>
          <p className="mb-2 text-justify text-gray-600">Măng tây</p>
          <h2 className="text-sm h2-text">Khối lượng</h2>
          <p className="mb-2 text-justify text-gray-600">200g</p>

          <h2 className="text-sm h2-text">Nơi sản xuất</h2>
          <p className="mb-2 text-justify text-gray-600">Hà Tĩnh</p>
        </div>
      </div>
      <div className="w-6/12 px-6">
        <div className="mb-4">
          <h2 className="text-sm text-center h2-text">Mã QR của sản phẩm</h2>
          <div className="relative flex justify-center w-full mb-2">
            <img
              src="https://printgo.vn/uploads/media/790919/cac-loai-qr-code-1_1621446074.jpg"
              alt=""
              className="object-cover w-96 h-96"
            />
          </div>
        </div>
        <div>
          <h2 className="mb-4 text-sm h2-text">Quy trình 5 bước</h2>
          <TimeLineItems />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
