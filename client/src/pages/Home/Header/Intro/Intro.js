import React from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowRight,
  AiOutlineMail,
} from "react-icons/ai";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Intro() {
  return (
    <div className="relative flex h-[calc(100vh-4rem)] mt-16 items-center justify-around w-full">
      <div
        className="hidden w-5/12 rounded-t-full h-5/6 2xl:block xl:block"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <div className="relative flex flex-col justify-between w-3/4 h-full m-auto rounded-t-full shadow-xl">
          <div className="w-full h-full">
            <img
              className="object-cover w-full h-full rounded-t-full"
              src="https://media.qrtiger.com/blog/2021/01/Header_83.jpg"
              alt=""
            />
          </div>
          <div className="flex items-center justify-between w-full h-20 text-sm bg-white">
            <div className="p-3 leading-5 text-justify text-gray-500">
              <p>
                Bạn đang băn khoăn về nguồn gốc nông sản bạn đang tiêu thụ? Đừng
                lo lắng, chúng tôi đã có giải pháp cho bạn.
              </p>
            </div>
            <a
              href=""
              className="relative flex flex-col items-center justify-center h-full text-center text-white bg-green-500 w-72 hover:bg-green-600"
            >
              <div>
                <p>Tìm hiểu ngay</p>
              </div>
              <div className="absolute bottom-0 m-auto animate-bounce">
                <AiOutlineArrowDown />
              </div>
            </a>
          </div>
        </div>
      </div>

      <div
        className="w-full bg-transparent h-5/6 2xl:w-7/12 xl:w-7/12"
        data-aos="zoom-in"
      >
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          className="w-full h-full text-justify"
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="px-6">
            <div>
              <h2 className="h2-custom-1">
                Truy xuất các loại nông sản trên thị trường với
                <span className="text-green-500">&nbsp;iARW</span>
              </h2>
              <br />
              <div className="text-gray-600 2xl:text-lg xl:text-lg lg:text-lg">
                <p>
                  Hiện nay trên thị trường có rất nhiều nông sản không rõ nguồn
                  gốc sản xuất, vậy làm sao để biết thực phẩm chúng ta tiêu thụ
                  là an toàn? iARW ra đời để truy xuất các loại nông sản từ các
                  nông trại qua hệ thống quét mã QR hiện đại nhằm giải quyết bài
                  toán đó và mang lại sự an tâm cho khách hàng.
                </p>
              </div>
              <br />
              <div className="flex items-center justify-between w-full h-20 m-auto mt-6 text-xs bg-green-100 rounded-full shadow-lg 2xl:text-base xl:text-base 2xl:w-4/6 xl:w-4/6">
                <div className="items-center justify-center hidden w-12 h-12 mx-6 text-2xl text-white bg-green-500 rounded-full 2xl:flex xl:flex">
                  <AiOutlineMail />
                </div>
                <div className="px-2 ml-6 mr-auto 2xl:ml-0 xl:ml-0">
                  <p className="text-gray-600">Email tư vấn</p>
                  <p>phuonghuu71@gmail.com</p>
                </div>
                <a
                  className="flex items-center justify-center h-12 px-2 mx-6 text-white bg-green-500 rounded-full hover:bg-green-600"
                  href=""
                >
                  <div>
                    <p>Tư vấn tại đây</p>
                  </div>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="px-6">
            <div>
              <h2 className="h2-custom-1">
                Kiểm tra chất lượng nông sản với quy trình
                <span className="text-orange-500">&nbsp;5</span> bước
              </h2>
              <br />
              <div className="flex">
                <div className="w-2/4 text-gray-600 2xl:text-lg xl:text-lg lg:text-lg">
                  <p>
                    Nhằm đáp ứng nhu cầu theo dõi chất lượng của sản phẩm. Gồm 5
                    bước: Gieo trồng, Chăm sóc, Thu hoạch, Vận chuyển và tiêu
                    thụ.
                  </p>
                  <br />
                  <a href="" className="flex items-center hover:text-green-500">
                    <p>Đi tới ngay &nbsp;</p>
                    <AiOutlineArrowRight />
                  </a>
                </div>
                <div className="flex justify-end w-2/4">
                  <img
                    src="https://trace.icheck.vn/frontendv3/assets/images/new/slider-2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Intro;
