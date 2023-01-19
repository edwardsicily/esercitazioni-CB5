import React, { useRef } from "react";
import "./modal.css";

function Modal({ children, handleModal }) {
  const modalRef = useRef(null);

  const onHandleClick = () => modalRef.current.classList.toggle("modal-on");

  return (
    <div className="Modal" useRef={modalRef}>
      <div className="modal-content" onClick={onHandleClick}>
        {children}
      </div>
      <div className="overlay" onClick={handleModal}></div>
    </div>
  );
}

export default Modal;
