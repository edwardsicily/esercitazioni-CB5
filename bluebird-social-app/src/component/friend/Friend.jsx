import React from "react";
import "./friend.css";

function Friend({ data, setModalChildren, setModalState }) {
  const { id, username, image } = data;
  const address = data?.address?.city;

  const onHandleClick = () => {
    setModalChildren(id);
    setModalState(true);
  };

  return (
    <div className="friend-component" onClick={onHandleClick}>
      <img src={image} alt="" />
      <div className="friend-info">
        <h4>@{username}</h4>
        <h5>{address}</h5>
      </div>
    </div>
  );
}
export default Friend;
