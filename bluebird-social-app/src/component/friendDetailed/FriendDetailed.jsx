import React, { useEffect, useState } from "react";
import { GET } from "../../utils/http";
import { ENDPOINTS } from "../../fetch/endpoints";
import "./frienddetailed.css";

function FriendDetailed({ id }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    GET(`${ENDPOINTS.USERS}/${id}`).then((res) => setUserData(res));
  }, []);
  return (
    <div className="user-details">
      <div className="name">
        {`${userData?.firstName} ${userData?.lastName}`}
      </div>
      <img src={userData?.image} className="user-datailed-img" alt="user-img" />
      <div className="username">{userData?.username}</div>
      <div className="gender">{userData?.gender}</div>
      <div className="work">{userData?.company?.title}</div>
      {/* TODO */}
    </div>
  );
}

export default FriendDetailed;
