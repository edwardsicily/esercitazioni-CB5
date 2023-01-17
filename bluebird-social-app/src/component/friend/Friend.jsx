import React from "react";
import "./friend.css";

function Friend({ data }) {
  const { username, image } = data;
  const address = data?.address?.city;

  return (
    <div className="friend-component">
      <img src={image} alt="" />
      <div className="friend-info">
        <h4>@{username}</h4>
        <h5>{address}</h5>
      </div>
    </div>
  );
}
export default Friend;
