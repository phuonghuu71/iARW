import React, { useState } from "react";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";

function ProductDetails() {
  const [toggleAccordion, setToggleAccordion] = useState(false);
  const [toggleAccordionBig, setToggleAccordionBig] = useState(false);

  return (
    <div className="flex justify-between p-4 bg-white rounded-md">
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
          {/* step 1 */}
          <div className="timeline">
            <div className="pl-8">
              <span className="inline-block px-2 py-1 mx-0 mb-4 -mt-2 text-sm font-bold text-white bg-green-500 rounded-md h2-text">
                Bước 1: Gieo trồng
              </span>
            </div>

            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm h2-text" />
                )}
                <h2 className="text-sm h2-text">
                  10h45, 10/04/2022, Chuẩn bị Đất trồng
                </h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-green-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  Đất trồng là loại đất phù sa, đất đỏ, đất xám, thịt nhẹ có pha
                  cát; đất có độ tơi xốp cao, giàu mùn, giàu chất hữu cơ; thế
                  đất cao ráo, dễ thoát nước; có tầng canh tác dày từ 30 – 40
                  cm. độ ẩm đất trung bình từ 65 – 70%, độ pH từ 6,6 – 7,0,
                  không bị phèn chua, không bị ngập úng trong mùa mưa, chủ động
                  tưới nước trong mùa nắng.
                </p>
                <p className="pl-4 mb-2 leading-relaxed text-justify">
                  Đất được cày bừa kỹ, phơi ải, nhặt sạch cỏ dại, xử lý nấm bệnh
                  và tuyến trùng, san cho bằng phẳng. Lên liếp rộng 100 – 120
                  cm, cao 20 – 25cm.
                </p>
              </div>
            </div>

            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm h2-text" />
                )}
                <h2 className="text-sm h2-text">
                  12h45, 10/04/2022, gieo ươm cây giống
                </h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-green-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  500g hạt giống để gieo ươm đủ trồng cho 1 ha với mật độ khoảng
                  18.000 – 20.000 cây/ha.
                </p>
                <p className="pl-4 mb-2 text-justify">
                  Ngâm hạt giống trong nước ấm khoảng 52°C (2 sôi, 3 lạnh) trong
                  12 giờ, vớt ra đem ủ trong vải sạch cho nứt nanh rồi đem gieo
                  vào bầu ni lông kích thước 12 x 7cm có chứa đất sạch, phân hữu
                  cơ và 1 ít tro bếp.
                </p>
                <p className="pl-4 mb-2 text-justify">
                  Mỗi bầu gieo 1 hạt, hàng ngày tưới vừa đủ ẩm, chăm sóc cho cây
                  sinh trưởng và phát triển tốt cho đến khi đủ tiêu chuẩn. Thông
                  thường, sau gieo từ 3 – 3,5 tháng, chiều cao cây đạt 25 –
                  30cm, thân có 1 – 2 nhánh, khỏe mạnh, không sâu bệnh gây hại
                  thì đem trồng.
                </p>
              </div>
            </div>
          </div>
          {/* step 1 */}

          {/* step 2 */}
          <div className="timeline">
            <div className="pl-8">
              <span className="inline-block px-2 py-1 mx-0 mb-4 -mt-2 text-sm font-bold text-white bg-green-500 rounded-md h2-text">
                Bước 2: Chăm sóc
              </span>
            </div>

            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm h2-text" />
                )}
                <h2 className="text-sm h2-text">8h, 11/04/2022, bón lót</h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-green-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  Cần bón lót với lượng phân hữu cơ sinh học Better HG01: 10 tấn
                  + 50 kg Better NPK 16-12-8-11+TE trộn đều.
                </p>
              </div>
            </div>

            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm h2-text" />
                )}
                <h2 className="text-sm h2-text">
                  8h, 26/04/2022, bón thúc lần 1
                </h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-green-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  Chọn giữ lại 4-6 cây mẹ khỏe mạnh trên 1 bụi, tỉa bỏ cây nhỏ,
                  cây già và cây bị sâu bệnh. Làm sạch cỏ non, xới xáo vun đất
                  đậy gốc, bón thúc 100 kg Better NPK 16-16-16-9+TE.
                </p>
              </div>
            </div>

            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm h2-text" />
                )}
                <h2 className="text-sm h2-text">
                  9h30, 11/05/2022, bón thúc lần 2
                </h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-green-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  Cây phát triển thêm nhiều thân mới. Chọn giữ lại 4-6 cây mẹ
                  khỏe mạnh trên 1 bụi, tỉa bỏ cây già, cây bị sâu bệnh, cây
                  nhỏ, và cành lá phát sinh ở phần gốc khoảng 40-50cm để thông
                  thoáng gió phòng tránh bệnh hại cho cây. Làm sạch cỏ non, xới
                  xáo vun đất đậy gốc, bón thúc 100 kg Better NPK 16-12-8-11+TE.
                  Trên cùng một hàng với cây trồng, chen giữa các cây măng, cắm
                  các cọc tre đường kính khoảng 5cm, cao khoảng 120cm, cách nhau
                  khoảng 3-4m, rồi dùng dây cước nilon bền chắc (chịu được mưa
                  nắng) giăng thành một hàng đôi (kẹp cây măng vào giữa đôi dây)
                  cách mặt liếp ở độ cao khoảng 40-50cm để chống đổ ngả cây.
                </p>
              </div>
            </div>

            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm h2-text" />
                )}
                <h2 className="text-sm h2-text">
                  10h, 26/05/2022, bón thúc lần 3
                </h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-green-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  Cây phát triển thêm nhiều thân mới. Chọn giữ lại 4-6 cây mẹ
                  khỏe mạnh trên 1 bụi, tỉa bỏ cây già, cây bị sâu bệnh, cây nhỏ
                  và cành lá phát sinh ở phần gốc khoảng 40-50cm để thông thoáng
                  gió phòng tránh bệnh hại cho cây. Làm sạch cỏ non, xới xáo vun
                  đất đậy gốc, bón thúc 100 kg Better NPK 16-16-16-9+TE.
                </p>
              </div>
            </div>

            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm h2-text" />
                )}
                <h2 className="text-sm h2-text">
                  11h, 11/06/2022, bón thúc lần 4
                </h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-green-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  Cây phát triển thêm nhiều thân mới. Chọn giữ lại 4-6 cây mẹ
                  khỏe mạnh trên 1 bụi, tỉa bỏ cây già, cây bị sâu bệnh, cây nhỏ
                  và cành lá phát sinh ở phần gốc khoảng 40-50cm để thông thoáng
                  gió phòng tránh bệnh hại cho cây. Làm sạch cỏ non, xới xáo vun
                  đất đậy gốc, bón thúc 100 kg Better NPK 16-12-8-11+TE.
                </p>
              </div>
            </div>

            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm h2-text" />
                )}
                <h2 className="text-sm h2-text">
                  11h, 26/06/2022, bón thúc lần 5
                </h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-green-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  Cây phát triển thêm nhiều thân mới. Chọn giữ lại 4-6 cây mẹ
                  khỏe mạnh trên 1 bụi, tỉa bỏ cây già, cây bị sâu bệnh, cây nhỏ
                  và cành lá phát sinh ở phần gốc khoảng 40-50cm để thông thoáng
                  gió phòng tránh bệnh hại cho cây. Làm sạch cỏ non, xới xáo vun
                  đất, bón thúc 100 kg Better NPK 16-16-16-9+TE.
                </p>
              </div>
            </div>

            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm h2-text" />
                )}
                <h2 className="text-sm h2-text">
                  8h, 11/07/2022, bón thúc lần 6
                </h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-green-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  Cây phát triển thêm nhiều thân mới. Chọn giữ lại 4-6 cây mẹ
                  khỏe mạnh trên 1 bụi, tỉa bỏ cây già, cây bị sâu bệnh, cây nhỏ
                  và cành lá phát sinh ở phần gốc khoảng 40-50cm để thông thoáng
                  gió phòng tránh bệnh hại cho cây. Làm sạch cỏ non, xới xáo vun
                  đất đậy gốc, bón thúc 100 kg Better NPK 16-12-8-11+TE. Tuỳ
                  theo độ cao và độ lớn của cây, cần giăng thêm hoặc nâng dần
                  hàng đôi dây cước nilon (kẹp cây Măng vào giữa đôi dây)lên các
                  độ cao khoảng 75cm, 90cm, 100cm để chống đổ ngả cây.
                </p>
              </div>
            </div>

            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm h2-text" />
                )}
                <h2 className="text-sm h2-text">
                  7h, 26/07/2022, bón thúc lần 7
                </h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-green-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  Cây phát triển thêm nhiều thân mới. Chọn giữ lại 4-6 cây mẹ
                  khỏe mạnh trên 1 bụi, tỉa bỏ cây già, cây bị sâu bệnh, cây nhỏ
                  và cành lá phát sinh ở phần gốc khoảng 40-50cm để thông thoáng
                  gió phòng tránh bệnh hại cho cây. Làm sạch cỏ non, xới xáo vun
                  đất đậy gốc, bón thúc 10 tấn phân hữu cơ sinh học Better HG01
                  + 100 kg Better NPK 16-16-16-9+TE.
                </p>
              </div>
            </div>

            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm h2-text" />
                )}
                <h2 className="text-sm h2-text">
                  7h30, 11/08/2022, bón thúc lần 8
                </h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-green-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  Cây phát triển thêm nhiều thân mới. Chọn giữ lại 4-6 cây mẹ
                  khỏe mạnh trên 1 bụi, tỉa bỏ cây già, cây bị sâu bệnh, cây nhỏ
                  và cành lá phát sinh ở phần gốc khoảng 40-50cm để thông thoáng
                  gió phòng tránh bệnh hại cho cây. Làm sạch cỏ non, xới xáo vun
                  đất đậy gốc, bón thúc 100 kg NPK 16-12-8-11+TE.
                </p>
              </div>
            </div>

            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm h2-text" />
                )}
                <h2 className="text-sm h2-text">
                  8h, 26/08/2022, bón thúc lần 9
                </h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-green-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  {`Chăm sóc đúng kỹ thuật và đủ dinh dưỡng, từ giai đoạn này cây
                  sẽ bắt đầu trổ măng. Đón đầu lứa măng tơ này,khi quan sát thấy
                  cây mẹ phát triển tốt, đường kính thân cây đạt > 10-12mm
                  (lớn hơn điếu thuốc lá) + lá chuyển sang màu xanh đậm thì chọn
                  giữ lại 2-3 cây mẹ khỏe mạnh,tiến hành cắt hạ bớt ngọn cây
                  măng ở độ cao 1,20m để kích thích việc trổ măng, kết hợp dưỡng
                  cành lá thật sum suê để lấy ánh nắng quang hợp nuôi dưỡng cây
                  măng, rồi tỉa bỏ cây già, cây bị sâu bệnh, cây nhỏ và cành lá
                  phát sinh ở phần gốc khoảng 40-50cm để thông thoáng gió phòng
                  tránh bệnh hại cho cây, làm sạch cỏ non, xới xáo vun đất đậy
                  gốc, bón thúc 100 kg Better NPK 16-12-8-11+TE.`}
                </p>
              </div>
            </div>
          </div>
          {/* step 2 */}

          {/* step 3 */}
          <div className="timeline">
            <div className="pl-8">
              <span className="inline-block px-2 py-1 mx-0 mb-4 -mt-2 text-sm font-bold text-white bg-green-500 rounded-md h2-text">
                Bước 3: Thu hoạch
              </span>
            </div>
            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm h2-text" />
                )}
                <h2 className="text-sm h2-text">8h, 27/08/2022, thu hoạch</h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-green-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  Khi các chồi măng cao khoảng 25cm-30cm là lúc cần phải thu
                  hoạch ngay để có được sản phẩm măng chất lượng cao. Sau khi
                  thu hoạch, không nên để măng tây xanh tiếp xúc với ánh nắng
                  làm cho chồi măng nhanh chóng bị già hóa, măng sẽ có nhiều xơ,
                  mất dinh dưỡng, giảm chất lượng và mất giá trị thương phẩm.
                </p>
                <p className="pl-4 mb-2 text-justify">
                  Sau khi thu hoạch măng, cần phải nén chặt đất trồng nơi đã lấy
                  măng.
                </p>
                <p className="pl-4 mb-2 text-justify">
                  Măng tây xanh sau khi thu hoạch nếu để tiếp xúc với ánh nắng
                  và bảo quản lạnh không đúng kỹ thuật bảo quản thực phẩm sẽ bị
                  hư hỏng nhanh chóng trong vòng 2 ngày. Để tiếp xúc với ánh
                  nắng, măng sẽ bị hóa già (xơ hóa), bị héo làm mất dinh dưỡng
                  và giảm chất lượng.
                </p>
              </div>
            </div>

            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm h2-text" />
                )}
                <h2 className="text-sm h2-text">
                  8h, 28/08/2022, phân loại măng
                </h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-green-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  Sau khi thu hoạch, măng sẽ được chuyển vào phòng sơ chế, Ở đây
                  măng sẽ được phân loại, làm sạch. Rửa kỹ rau bằng nước sạch,
                  dùng bao túi sạch để chứa đựng.
                </p>
                <p className="pl-4 mb-2 text-justify">
                  {`Đường kính gốc và độ dài chồi măng là tiêu chuẩn phân
                      loại sản phẩm măng tây xanh: Măng loại 1: Đường kính
                      thân măng cỡ >10mm-30mm, dài 25cm, thân thẳng không cong
                      vẹo, không sâu bệnh, đạt tiêu chuẩn rau an toàn cho người
                      dùng. Măng loại 2: Đường kính thân măng cỡ 5mm-10mm, dài
                      22cm, thân thẳng không cong vẹo, không sâu bệnh, đạt tiêu
                      chuẩn rau an toàn cho người dùng.`}
                </p>
              </div>
            </div>
          </div>
          {/* step 3 */}

          {/* step 4 */}
          <div className="timeline time-line-orange">
            <div className="pl-8">
              <span className="inline-block px-2 py-1 mx-0 mb-4 -mt-2 text-sm font-bold text-white bg-orange-500 rounded-md h2-text">
                Bước 4: Vận chuyển
              </span>
            </div>

            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm text-orange-500 h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm text-orange-500 h2-text" />
                )}
                <h2 className="text-sm text-orange-500 h2-text">
                  8h, 28/08/2022, vận chuyển
                </h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-orange-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  Sau khi đóng gói, măng sẽ được niêm phong và vận chuyển đến
                  cửa hàng hoặc trực tiếp cho người sử dụng trong vòng 4-8h, cần
                  bảo quản lạnh và tiêu thụ ra thị trường nhanh chóng.
                </p>
                <p className="pl-4 mb-2 text-justify">
                  {`Công ty vận chuyển ABC, vận chuyển theo phương thức bảo quản lạnh ở nhiệt độ 20C.`}
                </p>
              </div>
            </div>
          </div>
          {/* step 4 */}

          {/* step 5 */}
          <div className="timeline time-line-orange">
            <div className="pl-8">
              <span className="inline-block px-2 py-1 mx-0 mb-4 -mt-2 text-sm font-bold text-white bg-orange-500 rounded-md h2-text">
                Bước 5: Tiêu thụ
              </span>
            </div>

            <div
              className="pl-12 mb-4 cursor-pointer"
              onClick={() => setToggleAccordion(!toggleAccordion)}
            >
              <div className="flex items-center">
                {!toggleAccordion ? (
                  <BsChevronRight className="mr-2 text-sm text-orange-500 h2-text" />
                ) : (
                  <BsChevronDown className="mr-2 text-sm text-orange-500 h2-text" />
                )}
                <h2 className="text-sm text-orange-500 h2-text">
                  8h, 31/08/2022, tiêu thụ
                </h2>
              </div>
              <div
                className={`${
                  toggleAccordion ? "block" : "hidden"
                } px-4 py-2 text-white rounded-md bg-orange-500`}
              >
                <p className="mb-2">Chú thích: </p>
                <p className="pl-4 mb-2 text-justify">
                  Nhà phân phối sản phẩm là công ty ABC.
                </p>
                <p className="pl-4 mb-2 text-justify">
                  {`Măng được bảo quản ở cửa hàng ở nhiệt độ 20oC và thời gian lưu trữ không quá 2 ngày.`}
                </p>
              </div>
            </div>
          </div>
          {/* step 5 */}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
