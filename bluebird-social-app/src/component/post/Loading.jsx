import React from "react";
import "./loading.css";

function Loading() {
  return (
    <div className="loading-container">
      <div className=" loading-top">
        <div className=" load loading-circle"></div>
        <div className=" load loading-rectangle"></div>
      </div>
      <div className=" load loading-content"></div>
    </div>
  );
}

export default Loading;
