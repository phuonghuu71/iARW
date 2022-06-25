import React from "react";

import { BsArrowRightCircleFill } from "react-icons/bs";
import { AiOutlineArrowRight, AiOutlineQrcode } from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";

SwiperCore.use([Autoplay]);

function Instructions() {
  return (
    <div className="instructions-container">
      <div className="flex items-center justify-center h-1/6">
        <h2 className="text-center uppercase h2-custom-1">
          Tạo mã truy xuất nguồn gốc nông sản chuẩn
          <span className="text-orange-500">&nbsp;GS1</span> nhanh chóng
        </h2>
      </div>
      <div className="items-center hidden 2xl:flex xl:flex h-4/6">
        <div
          className="card-container"
          data-aos="zoom-in"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <h3>
            Bước 1&nbsp;
            <span>
              <AiOutlineArrowRight />
            </span>
          </h3>
          <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
          <hr />
          <br />
          <p>Sử dụng tài khoản Google để đăng nhập hoặc đăng ký</p>
        </div>
        <BsArrowRightCircleFill className="hidden text-5xl text-green-500 2xl:block xl:block" />
        <div
          className="card-container"
          data-aos="zoom-in"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <h3>
            Bước 2&nbsp;
            <span>
              <AiOutlineArrowRight />
            </span>
          </h3>
          <h2>KHỞI TẠO SẢN PHẨM</h2>
          <hr />
          <br />
          <p>
            Khởi tạo sản phẩm với các thông tin từ sản phẩm như tên sản phẩm,
            giá, hình ảnh,...
          </p>
        </div>
        <BsArrowRightCircleFill className="hidden text-5xl text-green-500 2xl:block xl:block" />
        <div
          className="card-container"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          <h3>
            Bước 3&nbsp;
            <span>
              <AiOutlineArrowRight />
            </span>
          </h3>
          <h2>Nhận mã QR theo chuẩn GS1</h2>
          <hr />
          <br />
          <p>
            Sau khi tạo sản phẩm, sẽ tạo mã sản phẩm theo chuẩn GS1. 
          </p>
        </div>
        <BsArrowRightCircleFill className="hidden text-5xl text-green-500 2xl:block xl:block" />
        <div
          className="card-container"
          data-aos="zoom-in"
          data-aos-delay="800"
          data-aos-duration="1000"
        >
          <h3>
            Bước 4&nbsp;
            <span>
              <AiOutlineArrowRight />
            </span>
          </h3>
          <h2>Theo dõi sản phẩm</h2>
          <hr />
          <br />
          <p>
            Sản phẩm có thể được theo dõi khi quét mã QR. Xem phần quy trình 5
            bước để biết thêm chi tiết.
          </p>
        </div>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        speed={1300}
        className="w-full text-justify h-3/6 2xl:hidden xl:hidden"
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="swiper-slide-instruction">
          <div className="card-container">
            <h3>
              Bước 1&nbsp;
              <span>
                <AiOutlineArrowRight />
              </span>
            </h3>
            <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
            <hr />
            <br />
            <p>Sử dụng tên tài khoản và mật khẩu để đăng ký và đăng nhập</p>
            <p>Lưu ý: Vui lòng liên hệ để đăng ký</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-instruction">
          <div className="card-container">
            <h3>
              Bước 2&nbsp;
              <span>
                <AiOutlineArrowRight />
              </span>
            </h3>
            <h2>KHỞI TẠO SẢN PHẨM</h2>
            <hr />
            <br />
            <p>
              Khởi tạo sản phẩm với các thông tin từ sản phẩm như tên sản phẩm,
              giá, hình ảnh,...
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-instruction">
          <div className="card-container">
            <h3>
              Bước 3&nbsp;
              <span>
                <AiOutlineArrowRight />
              </span>
            </h3>
            <h2>Nhận mã QR theo chuẩn GS1</h2>
            <hr />
            <br />
            <p>
              Sau khi tạo sản phẩm, mã sẽ được tạo theo chuẩn GS1. Đơn vị/Tổ
              chức tải mã về và in ấn trực tiếp lên bao bì sản phẩm hoặc in tem
              nhãn dán lên bao bì sản phẩm.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-instruction">
          <div className="card-container">
            <h3>
              Bước 4&nbsp;
              <span>
                <AiOutlineArrowRight />
              </span>
            </h3>
            <h2>Theo dõi sản phẩm</h2>
            <hr />
            <br />
            <p>
              Sản phẩm có thể được theo dõi khi quét mã QR. Xem phần quy trình 5
              bước để biết thêm chi tiết.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex items-center justify-center h-1/6">
        <div className="flex items-center px-6 py-4 text-xl font-semibold text-white transition-all bg-orange-500 cursor-pointer 2xl:text-3xl xl:text-3xl hover:bg-orange-600 rounded-3xl">
          <AiOutlineQrcode />
          <p>&nbsp;TẠO MÃ NGAY</p>
        </div>
      </div>
    </div>
  );
}

export default Instructions;
