import React, { useEffect, useRef } from "react";

function Modal(props) {
  const modalRef = useRef();

  useEffect(() => {
    const clickOutsideContent = (e) => {
      if (e.target === modalRef.current) props.setShow(false);
    };
    window.addEventListener("click", clickOutsideContent);
    return () => {
      window.removeEventListener("click", clickOutsideContent);
    };
  }, [props]);

  return (
    <div ref={modalRef} className={`${props.show ? "modal-active" : ""} modal`}>
      <div className="modal-content">
        {!props.hideCloseButton && (
          <span onClick={() => props.setShow(false)} className="modal-close">
            &times;
          </span>
        )}
        {props.children}
      </div>
    </div>
  );
}

export default Modal;

export const ModalHeader = (props) => {
  return <div className="modal-header">{props.children}</div>;
};

export const ModalBody = (props) => {
  return <div className="modal-body">{props.children}</div>;
};

export const ModalFooter = (props) => {
  return <div className="modal-footer">{props.children}</div>;
};
