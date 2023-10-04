import React from "react";
import emailjs from "emailjs-com";

import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";

function Contact() {
  function sendEmail(e) {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_cvecpvl",
        "template_vofceyf",
        e.target,
        "plkhLdi5bGV-Nxg8y"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

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
              Nếu bạn có thắc mắc, đừng ngần ngại điền thông tin vào form liên
              hệ. Chúng tôi sẽ liên lạc với bạn sớm nhất có thể. Cám ơn bạn đã
              quan tâm tới dịch vụ của chúng tôi
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
          <form onSubmit={sendEmail}>
            <div className="contact-register-info-container group">
              <input
                type="email"
                name="from_email"
                className="contact-register-info-input peer text-black"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="from_email"
                className="contact-register-info-label"
              >
                Địa chỉ Email
              </label>
            </div>

            <div className="contact-register-info-container group">
              <input
                type="text"
                name="from_name"
                id="floating_name"
                className="contact-register-info-input peer text-black"
                placeholder=" "
                required=""
              />
              <label
                htmlFor="from_name"
                className="contact-register-info-label"
              >
                Họ Tên
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
                name="message"
                rows="5"
                className="contact-register-message-input"
                placeholder="Để lại thắc mắc..."
              ></textarea>
            </div>

            <div className="flex">
              <button
                type="submit"
                className="contact-register-info-btn-submit"
              >
                Liên hệ
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
