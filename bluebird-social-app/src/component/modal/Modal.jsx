import React from "react";
import "./modal.css";

function Modal({ children, modalState, handleModal }) {
  if (!modalState) return "";
  return (
    <div className="Modal">
      <div className="modal-content">{children}</div>
      <div className="overlay" onClick={handleModal}></div>
    </div>
  );
}

export default Modal;
