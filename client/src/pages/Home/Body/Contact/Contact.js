import React from "react";

import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

function Contact() {
  return (
    <div className="contact-container">
      <div className="bg-container -z-10">
        <img
          className="object-cover w-full h-full"
          src={require("../../../../assets/images/background-3.jpg")}
          alt=""
        />
        <div className="dim-bg"></div>
        <div className="bottom-blur"></div>
      </div>

      <div className="flex items-center justify-center h-1/6">
        <div>
          <h2 className="text-center text-white uppercase h2-custom-1">
            LIÊN HỆ
          </h2>
        </div>
      </div>

      <div className="contact-inner-container flex-center">
        <div className="contact-introduce-container">
          <div className="mb-6">
            <h2 className="contact-introduce-title">Liên hệ với chúng tôi</h2>
            <p className="contact-introduce-text">
              Nếu bạn có thắc mắc hoặc bạn muốn đăng ký chương trình của chúng
              tôi, đừng ngần ngại điền thông tin vào form đăng ký. Chúng tôi sẽ
              liên lạc với bạn sớm nhất có thể. Cám ơn bạn đã quan tâm tới dịch
              vụ của chúng tôi
            </p>
          </div>
          <div className="contact-introduce-info-container">
            <div className="contact-introduce-info-title-container">
              <h2 className="contact-introduce-info-title">
                Thông tin liên lạc
              </h2>
            </div>
            <div className="contact-introduce-info-items-container">
              <AiFillPhone className="mr-2 text-lg" />
              <p>+849 8111 9573</p>
            </div>
            <div className="contact-introduce-info-items-container">
              <AiOutlineMail className="mr-2 text-lg" />
              <p>phuonghuu71@gmail.com</p>
            </div>
            <div className="contact-introduce-info-items-container">
              <FiMapPin className="mr-2 text-lg" />
              <p>8C Tống Hữu Định</p>
            </div>
          </div>
        </div>
        <div className="contact-register-container">
          <form>
            <div className="contact-register-info-container group">
              <input
                type="email"
                name="floating_email"
                className="contact-register-info-input peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_email"
                className="contact-register-info-label"
              >
                Địa chỉ Email
              </label>
            </div>
            <div className="contact-register-info-container group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="contact-register-info-input peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_first_name"
                className="contact-register-info-label"
              >
                Họ
              </label>
            </div>

            <div className="contact-register-info-container group">
              <input
                type="text"
                name="last_name"
                id="floating_last_name"
                className="contact-register-info-input peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_last_name"
                className="contact-register-info-label"
              >
                Tên
              </label>
            </div>

            <div className="contact-register-info-container group">
              <input
                type="text"
                name="phone"
                id="floating_phone"
                className="contact-register-info-input peer"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="floating_phone"
                className="contact-register-info-label"
              >
                Số điện thoại
              </label>
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="contact-register-message-label"
              >
                Thắc mắc của bạn
              </label>
              <textarea
                id="message"
                rows="1"
                className="contact-register-message-input"
                placeholder="Để lại thắc mắc..."
              ></textarea>
            </div>

            <div className="flex">
              <button
                type="submit"
                className="contact-register-info-btn-submit"
              >
                Đăng ký
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
