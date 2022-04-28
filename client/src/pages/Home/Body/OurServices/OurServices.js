import React from "react";

import { AiOutlineQrcode } from "react-icons/ai";
import { GiFruitBowl, GiMagnifyingGlass } from "react-icons/gi";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

SwiperCore.use([Autoplay]);

function OurServices() {
  return (
    <div className="bg-gray-100 relative w-full h-[calc(100vh-4rem)] mt-16 px-6">
      <div className="top-blur"></div>
      <div className="bottom-blur"></div>

      <div className="flex items-center justify-center h-1/6">
        <div>
          <h2 className="text-center text-black uppercase h2-custom-1">
            Dịch vụ của chúng tôi
          </h2>
        </div>
      </div>

      <Swiper
        spaceBetween={50}
        breakpoints={{
          1536: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 3,
          },
        }}
        autoplay={{ delay: 5000 }}
        speed={1300}
        className="w-full mx-auto h-4/6"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="flex items-center justify-center">
          <div className="card-container-service">
            <div className="flex items-center justify-center h-3/6">
              <AiOutlineQrcode className="icon-effect" />
            </div>
            <div className="text-center h-3/6">
              <h2 className="text-base font-bold uppercase 2xl:text-2xl xl:text-2xl">
                Tạo mã vạch
              </h2>
              <br />
              <p className="hidden text-base text-gray-500 2xl:block xl:block">
                Đăng ký mã vạch nhanh chóng chuẩn GS1.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="card-container-service">
            <div className="flex items-center justify-center h-3/6">
              <AiOutlineQrcode className="icon-effect" />
            </div>
            <div className="text-center h-3/6">
              <h2 className="text-base font-bold uppercase 2xl:text-2xl xl:text-2xl">
                Truy xuất nông sản
              </h2>
              <br />
              <p className="hidden text-base text-gray-500 2xl:block xl:block">
                Truy xuất các loại nông sản dựa vào mã QR được tạo theo chuẩn
                GS1.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-center">
          <div className="card-container-service">
            <div className="flex items-center justify-center h-3/6">
              <GiFruitBowl className="icon-effect" />
            </div>
            <div className="text-center h-3/6">
              <h2 className="text-base font-bold uppercase 2xl:text-2xl xl:text-2xl">
                QUẢN LÝ NÔNG SẢN
              </h2>
              <br />
              <p className="hidden text-base text-gray-500 2xl:block xl:block">
                Dễ dàng quản lý nông sản của bạn, chuyển đổi các số liệu thành
                dữ liệu lưu trong hệ thống 1 cách dễ dàng.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default OurServices;
