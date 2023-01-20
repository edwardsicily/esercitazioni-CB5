import React, { useRef } from "react";
import "./modal.css";

function Modal({ children, handleModal }) {
  const modalref = useRef(null);

  const onHandleClick = () => modalref.current.classList.toggle("modal-on");

  return (
    <div className="Modal" useRef={modalref}>
      <div className="modal-content" onClick={onHandleClick}>
        {children}
      </div>
      <div className="overlay" onClick={handleModal}></div>
    </div>
  );
}

export default Modal;
