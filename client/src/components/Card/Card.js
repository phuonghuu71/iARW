import React, { useCallback } from "react";

import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(
    () => navigate("/dashboard/details", { replace: true }),
    [navigate]
  );
  return (
    <div className="simple-card" onClick={handleOnClick}>
      <div className="relative w-full h-3/6">
        <img
          src="https://cdn.tgdd.vn/Products/Images/8785/222783/bhx/mang-tay-bo-200g-202012082233101204.jpg"
          alt=""
          className="object-contain w-full h-full"
        />
      </div>
      <div className="flex flex-col w-full px-4 py-2 h-3/6">
        <h2 className="mt-auto mb-1 h2-text">Măng tây bó 200g</h2>
        <p className="mb-1 text-gray-500">Loại sản phẩm: Rau lá</p>
        <p className="mb-1 text-gray-500">Mã sản phẩm: VNC63431485</p>
        {/* <p className="mb-1 text-gray-500">Tình trạng: còn hàng</p> */}
        {/* <p className="mb-1 text-lg text-orange-500">đ100.000/kg</p> */}
        <p className="text-right text-gray-500">Hồ Chí Minh</p>
      </div>
    </div>
  );
}

export default Card;
