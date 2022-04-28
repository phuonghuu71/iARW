import React from "react";

function FiveStepsProcess() {
  return (
    <div className="five-steps-process-container">
      <div className="bg-container -z-10">
        <img
          className="object-cover w-full h-full"
          src={require("../../../../assets/images/background-2.jpg")}
          alt=""
        />
        <div className="dim-bg"></div>
        <div className="bottom-blur"></div>
      </div>

      <div className="flex items-center justify-center h-1/6">
        <div>
          <h2 className="text-center text-white uppercase h2-custom-1">
            Quy trình
            <span className="text-orange-500">&nbsp;5</span> bước
          </h2>
        </div>
      </div>

      <div className="h-5/6">
        <div className="w-full h-full mx-auto">
          <div className="relative h-full overflow-hidden wrap">
            <div className="border-2 absolute border-opacity-20 border-green-500 bg-green-500 rounded-full h-[calc(100%-4rem)] left-1/2"></div>

            <div className="flex items-center justify-between w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-0 flex items-center order-1 w-8 h-8 bg-green-500 rounded-full shadow-xl">
                <h1 className="mx-auto text-lg font-semibold text-white">1</h1>
              </div>
              <div
                className="order-1 w-5/12 px-6 py-4 bg-green-500 rounded-lg shadow-xl"
                data-aos="fade-left"
              >
                <h3 className="mb-3 text-sm font-bold text-white 2xl:text-xl xl:text-xl">
                  Bước 1: Gieo trồng
                </h3>
                <p className="hidden text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 2xl:block xl:block">
                  Quản lý việc sử dụng giống, đất,...
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center justify-between w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-0 flex items-center order-1 w-8 h-8 bg-green-500 rounded-full shadow-xl">
                <h1 className="mx-auto text-lg font-semibold text-white">2</h1>
              </div>
              <div
                className="order-1 w-5/12 px-6 py-4 bg-green-500 rounded-lg shadow-xl"
                data-aos="fade-right"
              >
                <h3 className="mb-3 text-sm font-bold text-white 2xl:text-xl xl:text-xl">
                  Bước 2: Chăm sóc
                </h3>
                <p className="hidden text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 2xl:block xl:block">
                  Sẽ biết được nông sản sử dụng loại phân bón nào, thuốc bảo vệ
                  thực vật là gì và mật độ sử dụng của chúng ra sao.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-0 flex items-center order-1 w-8 h-8 bg-green-500 rounded-full shadow-xl">
                <h1 className="mx-auto text-lg font-semibold text-white">3</h1>
              </div>
              <div
                className="order-1 w-5/12 px-6 py-4 bg-green-500 rounded-lg shadow-xl"
                data-aos="fade-left"
              >
                <h3 className="mb-3 text-sm font-bold text-white 2xl:text-xl xl:text-xl">
                  Bước 3: Thu hoạch
                </h3>
                <p className="hidden text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 2xl:block xl:block">
                  Cung cấp thông tin quy trình quy trình sơ chế và đóng gói của
                  sản phẩm.
                </p>
              </div>
            </div>

            <div className="flex flex-row-reverse items-center justify-between w-full left-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-0 flex items-center order-1 w-8 h-8 bg-orange-500 rounded-full shadow-xl">
                <h1 className="mx-auto text-lg font-semibold text-white">4</h1>
              </div>
              <div
                className="order-1 w-5/12 px-6 py-4 bg-orange-500 rounded-lg shadow-xl"
                data-aos="fade-right"
              >
                <h3 className="mb-3 text-sm font-bold text-white 2xl:text-xl xl:text-xl">
                  Bước 4: Vận chuyển
                </h3>
                <p className="hidden text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 2xl:block xl:block">
                  Hiển thị thông tin của đơn vị vận chuyển, thiết bị vận
                  chuyển,...
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between w-full right-timeline">
              <div className="order-1 w-5/12"></div>
              <div className="z-0 flex items-center order-1 w-8 h-8 bg-orange-500 rounded-full shadow-xl">
                <h1 className="mx-auto text-lg font-semibold text-white">5</h1>
              </div>
              <div
                className="order-1 w-5/12 px-6 py-4 bg-orange-500 rounded-lg shadow-xl"
                data-aos="fade-left"
              >
                <h3 className="mb-3 text-sm font-bold text-white 2xl:text-xl xl:text-xl">
                  Bước 5: Tiêu thụ
                </h3>
                <p className="hidden text-sm font-medium leading-snug tracking-wide text-white text-opacity-100 2xl:block xl:block">
                  Hiển thị thông tin các nhà cung cấp, bán lẻ trên thị trường.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FiveStepsProcess;
